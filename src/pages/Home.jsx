import { Blog, Course, Hero, NewsLetter, Podcast, Testimonial } from "../components/index"


const Home = () => {
  return (
    <>
      <Hero /> 
      <Testimonial />
      <Blog />
      <Course />
      <Podcast />
      <NewsLetter />
    </>
  )
}

export default Home