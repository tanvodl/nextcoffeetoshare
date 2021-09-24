import { createClient } from "contentful"
import {PostCard} from "../components/PostCard"
import Hero from "../components/Hero"

export function Herosection(){
  return (
    <Hero></Hero>
  )
}

export async function getStaticProps() {

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })

  const res = await client.getEntries({ content_type: 'blogPost'})

  return {
    props: {
      blogPosts: res.items
    }
  } 

}
//Blog Post
export default function blogPosts({ blogPosts }) {
  console.log(blogPosts)
  return (
    <div className="md:flex md:grid-cols-3 md:gap-14">
      {blogPosts.map(post => (
        <PostCard key={post.sys.id} post={post} />
      ))}
    </div>
  )
}