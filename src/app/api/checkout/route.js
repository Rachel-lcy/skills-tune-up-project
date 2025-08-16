// app/api/checkout/route.js
import Stripe from 'stripe';

// Ensure this API route runs on the Node runtime (not Edge)
export const runtime = 'nodejs';

// Initialize Stripe using the secret key
const stripeSecret = process.env.STRIPE_SECRET_KEY || '';
const stripe = stripeSecret ? new Stripe(stripeSecret, { apiVersion: '2024-06-20' }) : null;

// Resolve an absolute origin with protocol (http/https)
function resolveOrigin(req) {
  const fromEnv =
    process.env.NEXT_PUBLIC_BASE_URL ||
    process.env.NEXT_PUBLIC_SITE_URL;

  if (fromEnv && /^https?:\/\//i.test(fromEnv)) return fromEnv; // must start with http(s)://
  return req.nextUrl.origin; // e.g. http://localhost:3001
}

// Prefer a configured Stripe Price ID; fallback to inline amount if missing
const priceId =
  process.env.NEXT_PUBLIC_STRIPE_PRICE_ID ||
  process.env.STRIPE_PRICE_ID ||
  '';

export async function POST(req) {
  try {
    const origin = resolveOrigin(req);

    // Optional: parse cart data from the request body
    const body = await req.json().catch(() => ({}));
    const quantity = Math.max(1, Number(body?.quantity) || 1);

    // Always provide absolute URLs
    const successUrl = new URL('/program?success=1', origin).toString();
    const cancelUrl = new URL('/program?canceled=1', origin).toString();

    // If Stripe is not configured, return a success URL for local testing
    if (!stripe) {
      return new Response(JSON.stringify({ url: successUrl }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Create a Checkout Session
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [
        priceId
          ? {
              // Use a Stripe Price (amount is controlled in Stripe Dashboard)
              price: priceId,
              quantity,
            }
          : {
              // Fallback: inline amount in cents
              price_data: {
                currency: 'cad',
                product_data: { name: 'Alberta Basic Security Training Fee' },
                unit_amount: 12900, // CA$129.00
              },
              quantity,
            },
      ],
      success_url: successUrl,
      cancel_url: cancelUrl,
    });

    return new Response(JSON.stringify({ url: session.url }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('Checkout error:', err);
    return new Response(JSON.stringify({ error: err?.message || 'Checkout error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export async function GET() {
  return new Response(JSON.stringify({ error: 'Use POST for /api/checkout' }), {
    status: 405,
    headers: { 'Content-Type': 'application/json' },
  });
}
