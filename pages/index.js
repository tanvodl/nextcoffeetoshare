import { createClient } from "contentful"
import Layout from "../components/Layout"
import PostCard from "../components/PostCard"

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

export default function blogPosts({ blogPosts }) {
  console.log(blogPosts)
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      {blogPosts.map(post => (
        <PostCard key={post.sys.id} post={post} />
      ))}

      {/* <style jsx>{`
        .post-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 20px 60px;
        }
      `}

      </style> */}

    </div>
  )
}