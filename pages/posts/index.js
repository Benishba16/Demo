import Link from "next/link"
import Head from "next/head"

function PostList({posts}) {
    <Head>
        <title>Next JS Post</title>
        <meta name="description" content="Post API"/>
    </Head>
    return(
        <div>
            {
                posts.map((post) => {
                    return(
                        <div key={post.id}>
                            <Link href={`posts/${post.id}`} passHref>
                            <h2>{post.id} {post.title}</h2></Link>
                            <hr/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default PostList

export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await response.json()

    return{
        props: {
            posts: data
        }
    }
}