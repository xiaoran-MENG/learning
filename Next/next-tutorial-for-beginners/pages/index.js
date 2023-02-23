import awaitSleep from "await-sleep"

export default function Home(props) {
    return (
      <div>
        <h2>Welcome to our homepage.</h2>
        <p>This is the best home page in the world. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum aspernatur illum architecto cumque recusandae fuga sequi necessitatibus deleniti repellat harum nobis, dolor veniam vero deserunt. Voluptatibus, ducimus deserunt. Recusandae, dolore.</p>
        <p>The weather: {props.forecast}</p>
      </div>
    )
}
  
// For dynamic data you would not want to be cached
// such as data that depends on the logged in user
export async function getServerSideProps() {
    const response = await fetch("https://api.weather.gov/gridpoints/MFL/109,49/forecast")
    const data = await response.json()

    await awaitSleep(2000)
  
    return {
      props: {
        forecast: data.properties.periods[0].detailedForecast
      }
    }
}