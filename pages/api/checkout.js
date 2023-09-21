import { mongooseConnect } from "@/lib/mogooseConnect";
import { Order } from "@/models/Order";
import { Product } from "@/models/Product";
const stripe = require('stripe')(process.env.STRIPE_SK);

export default async function handle(req, res){
    if(req.method !== 'POST'){
        res.json({message: 'Method not allowed'});
        return;
    }
    await mongooseConnect();
    const {name, email, address, city, pincode, state, country, phone, cartProducts} = req.body;
    const productIds = cartProducts;
    const uniqueIds = [...new Set   (productIds)];
    const productsInfo = await Product.find({_id: uniqueIds});

    let line_items=[];
    for(const productId of uniqueIds){
        const productInfo = productsInfo.find(p => p._id.toString() === productId);
        const quantity = productIds.filter(id => id === productId)?.length || 0;
        if(quantity > 0){
            line_items.push({
                quantity,
                price_data: {
                    currency: 'inr',
                    product_data: {
                        name: productInfo.title,
                    },
                    unit_amount: productInfo.price * quantity * 100,
                },
            })
        } 
    }

    const orderDoc = await Order.create({
        line_items, name, email, city, postalCode: pincode, streetAddress: address, country, paid: false
    });

    const session = await stripe.checkout.sessions.create({
        line_items,
        mode: 'payment',
        customer_email: email,
        success_url: process.env.PUBLIC_URL + '/cart?success=1',
        cancel_url: process.env.PUBLIC_URL + '/cart?cancelled=1',
        metadata: {
            orderId: orderDoc._id.toString(), 
        }
    })

    res.json({url: session.url});
}

