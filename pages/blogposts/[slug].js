import { createClient } from "contentful"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Image from "next/image"

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
})

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: 'blogPost'
  })

  const paths = res.items.map(item => {
    return {
      params: {slug: item.fields.slug}
    }
  })

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const {items} = await client.getEntries ({
    content_type: 'blogPost',
    'fields.slug': params.slug
  })

  return {
    props: { post: items[0] }
  }

}

export default function BlogDetails({ post }) {
  console.log(post)
  const { featureImage, title, description, content} = post.fields
  return (
    <div>
      <div className="banner">
        <Image 
          src = {'https:' + featureImage.fields.file.url}
          width = {featureImage.fields.file.details.image.width}
          height = {featureImage.fields.file.details.image.height}
        />
        <h2> { title } </h2>
      </div>
      <div className="info">
        <h3> {description} </h3>
      </div> 
      <div className="content">
        <div> {documentToReactComponents(content)} </div>
      </div>
      <style jsx>{`
        h2,h3 {
          text-transform: uppercase;
        }
        .banner h2 {
          margin: 0;
          background: #fff;
          display: inline-block;
          padding: 20px;
          position: relative;
          top: -60px;
          left: -10px;
          transform: rotateZ(-1deg);
          box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
        }
        .info p {
          margin: 0;
        }
        .info span::after {
          content: ", ";
        }
        .info span:last-child::after {
          content: ".";
        }
      `}</style>
    
    </div>
  )
}