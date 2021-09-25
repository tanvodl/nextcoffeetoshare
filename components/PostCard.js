import Link from 'next/link'
import Image from 'next/image'


export function PostCard({ post }) {
    const { title, slug, description, thumbnail, category } = post.fields
    return (
        <div className="md:grid-cols-3">
            <div className="relative hover:bg-yellow-500">
                <Image 
                    className="object-cover cursor-pointer"
                    src={'https:'+ thumbnail.fields.file.url}
                    width={'680px'}
                    height={'400px'}
                    href={'/posts/' + slug}
                />
            </div>
            <div className="content">
                <div className="pb-5 uppercase tracking-wide text-sm font-semibold">
                    <Link href={'/posts/' + slug}>
                        <h2 className="pt-2 hover:text-yellow-600 cursor-pointer">{title}</h2>
                    </Link>
                </div>
                <div>
                    <p className= "text-gray-500">{description}
                    </p>
                </div>
            </div>
            <div className="category">               

                {/* <p>{category.fields.category[0].fields.category}</p> */}
            </div>

        </div>
    )
}


