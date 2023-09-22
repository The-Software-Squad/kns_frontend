import { mongooseConnect } from "@/lib/mogooseConnect"
import { Product } from "@/models/Product";

export default function ProductPage({product}) {
    return (
        <>
            <h1>Product Page</h1>
            <p>Product ID: {product.title}</p>
        </>
    )
}
export async function getServerSideProps(context){
    await mongooseConnect();
    const {id} = context.query;
    const product = await Product.findById(id);
    return {
        props:{
            product: JSON.parse(JSON.stringify(product))
        }
    }
}