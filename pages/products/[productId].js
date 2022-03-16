import { useRouter } from "next/router";

function Product({product}) {
    const router = useRouter()

    if(router.isFallback) {
        return <h1>Loading...</h1>
    }

    return(
        <>
            <h1>{product.id} {product.title} {product.Price}</h1>
            <p>{product.description}</p>
            <hr/>
        </>
    )
}

export default Product

export async function getStaticPaths() {
    const response = await fetch("http://localhost:4000/products")
    const data = await response.json()

    return {
        paths: [
            {
                params: { productId: "1" },
            },
        ],
        fallback: true,
    }
}

export async function getStaticProps(context) {
    console.log("Regenerating ProductId");
    const { params } = context
    const response = await fetch(`http://localhost:4000/products/${params.productId}`)
    const data = await response.json()

    return{
        props: {
            product: data,
            revalidate: 10
        }
    }
}