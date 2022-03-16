import {useRouter} from "next/router"

function Post({post}) {
    const router = useRouter()

    if(router.isFallback) {
        return <h1>Loading...</h1>
    }
    return(
        <>
            <h2>{post.id} {post.title}</h2>
            <body>{post.body}</body>
        </>
    )
}

export default Post

export async function getStaticPaths() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await response.json()

    // const paths = data.map(path => {
    //     return{
    //         params: {
    //             postId: `${path.id}`
    //         }
    //     }
    // })
    return{
        paths: [
                {
                    params: {postId: "1"},
                },
                {
                    params: {postId: "2"},
                },
                {
                    params: {postId: "3"},
                }
        ],
        // paths,
        fallback: "blocking",
    }
}

export async function getStaticProps(context) {
    const {params} = context
    const response  = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    const data = await response.json()

    if(!data.id) {
        return{
            notFound: true,
        }
    }
    console.log(`Generating page for /post/${params.postId}`);

    return{
        props: {
            post: data,
        }
    }
}