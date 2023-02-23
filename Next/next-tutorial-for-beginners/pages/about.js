const url = "https://api.github.com/users/xiaoran-MENG"

export default function About(props) {
    return (
      <>
        <h2>About Us</h2>
        <p>Welcome to this amazing about page. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro dolore officiis atque voluptas, quas, repellendus cum, magnam a alias unde reiciendis voluptates aliquam maxime laborum? Quae omnis eius impedit et?</p>
        <p>I have {props.repoCount} public repos on GitHub.</p>
      </>
    )
}
  
export async function getStaticProps() {
    const result = await fetch(url)
    const { public_repos } = await result.json()
  
    return {
      props: {
        repoCount: public_repos
      },
      revalidate: 10
    }
}