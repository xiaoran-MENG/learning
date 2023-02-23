import Link from "next/link"
import { useRouter } from "next/router"
import styles from "../../styles/post.module.css"

const url = "https://learnwebcode.github.io/json-example/posts.json"

export default function Post(props) {
  const router = useRouter()
  return (
    <>
      <p>
        <Link href="/blog">
          <small>&laquo; back to all blog posts</small>
        </Link>
      </p>
      <h2 className={styles.title}>{props.post.title}</h2>
      <p>{props.post.content}</p>
      <button className={styles.button} onClick={() => router.push("/blog")}>
        Click me to programmatically navigate or redirect
      </button>
    </>
  )
}

export async function getStaticPaths() {
  const result = await fetch(url)
  const { posts } = await result.json()

  const paths = posts.map(p => {
    return { params: { slug: p.slug } }
  })

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps(context) {
  const result = await fetch(url)
  const { posts } = await result.json()
  const post = posts.filter(p => p.slug === context.params.slug)[0]

  return {
    props: {
      post,
      title: post.title
    }
  }
}