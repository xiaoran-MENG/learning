import Link from "next/link"

const url = "https://learnwebcode.github.io/json-example/posts.json"

export default function Blog(props) {
  return (
    <>
      <h2>The Blog</h2>
      {props.posts.map((p, i) => {
        return (
          <div key={i}>
            <h3>
              <Link href={`/blog/${p.slug}`}>{p.title}</Link>
            </h3>
            <p>{p.content}</p>
            <hr />
          </div>
        )
      })}
    </>
  )
}

export async function getStaticProps() {
  const result = await fetch(url)
  const { posts } = await result.json()

  return {
    props: {
      posts
    }
  }
}