// src/app/api/checkout/route.js
import Stripe from 'stripe';
import { NextResponse } from 'next/server';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2024-06-20',
});

export async function POST(req) {
  try {
    const { priceId, quantity = 1 } = await req.json();

    // 【推荐】在这里做白名单映射，避免前端传入任意 priceId
    // const PRICE_MAP = { ABST: 'price_xxx' };
    // const safePriceId = PRICE_MAP[priceId] ?? process.env.NEXT_PUBLIC_STRIPE_PRICE_ID;

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [{ price: priceId, quantity }],
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/program`,
      // 可选：自动税、客户邮箱等
      // automatic_tax: { enabled: true },
      // customer_email: 'prefill@example.com',
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error('Stripe checkout error:', err);
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}