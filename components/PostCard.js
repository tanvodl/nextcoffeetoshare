import Link from 'next/link'
import Image from 'next/image'

export function PostCard({ post }) {
    const { title, slug, description, thumbnail } = post.fields

    return (
        <div className="content">
            <div className="featured">
            <Link href={'/posts/' + slug}>
            <a>
            <Image 
                    src={'https:'+ thumbnail.fields.file.url}
                    width={thumbnail.fields.file.details.image.width}
                    height={thumbnail.fields.file.details.image.height}
                    href={'/posts/' + slug}
                />
            </a>
            </Link>
            
                
            </div>
            <div className="content">
                <div className="mb-5 uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                    <Link href={'/posts/' + slug}>
                        <h4>{title}</h4>
                    </Link>
                </div>
                <div>
                    <p className= "mt-1 text-gray-500">{description}</p>
                </div>
                <div className="actions">
                    <Link href={'/posts/' + slug}><a>Xem Thêm</a></Link>
                </div>
            </div>
            {/* <style jsx>{`
                .content {
                    background: #fff;
                    box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
                    margin: 0;
                    position: relative;
                    top: -20px;
                    left: 0px;
                }
                .info {
                    padding: 16px;
                }
                .info h4 {
                    margin: 4px 0;
                    text-transform: uppercase;
                }
                .info p {
                    margin: 0;
                    color: #777;
                }
                .actions {
                    margin-top: 20px;
                    display: flex;
                    justify-content: flex-end;
                }
                .actions a {
                    color: #fff;
                    background: #000;
                    padding: 16px 24px;
                    text-decoration: none;
                    border-radius: 25px 0px 0px 0px;
                }
            `}</style> */}
        </div>
    )
}