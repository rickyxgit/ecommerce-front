import { mongooseConnect } from "@/lib/mongoose";
const stripe = require('stripe')(process.env.STRIPE_SK);
import {buffer} from 'micro';

endpoint_secret = 'whsec_d80d9a9d5a27f12f4c19417b2cd94cc52267a9d2e1b47c400209c2ecbc2d6bdb';

export default async function handler(req, res) {
    await mongooseConnect();
    const sig = req.headers['stripe-signature'];

    let event;

    try {
        event = stripe.webhooks.constructEvent(await buffer(req), sig, endpointSecret);

    } catch (err) {
        res.status(400).send(`Webhook Error: ${err.message}`);
        return;
    }

    switch (event.type ) {
        case 'payment_intent.suceeded':
            const paymentIntentSucceeded = event.data.object;
            console.log(paymentIntentSucceeded);
            break;
        default: 
            console.log(`Unhandled event type ${event.type}`);
    }

}

export const config = {
    api {bodyParser:false}
};