import { createClient } from "contentful"
import {PostCard} from "../components/PostCard"
import Hero from "../components/Hero"

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
    <div className="grid grid-cols-1 md:grid-cols-3 max-w-100 overflow-hidden md:max-w-screen-2xl gap-11">
      {blogPosts.map(post => (
        <PostCard key={post.sys.id} post={post} />
      ))}
    </div>
  )
}