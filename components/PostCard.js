import Link from 'next/link'
import Image from 'next/image'

export default function PostCard({ post }) {
    const { title, slug, description, thumbnail } = post.fields

    return (
        <div className="card">
            <div className="featured">
            <Link href={'/blogposts/' + slug}>
            <a>
            <Image 
                    src={'https:'+ thumbnail.fields.file.url}
                    width={thumbnail.fields.file.details.image.width}
                    height={thumbnail.fields.file.details.image.height}
                    href={'/blogposts/' + slug}
                />
            </a>
            </Link>
            
                
            </div>
            <div className="content">
                <div className="info">
                    <Link href={'/blogposts/' + slug}>
                        <h4>{title}</h4>
                    </Link>
                    <p>{description}</p>
                </div>
                <div className="actions">
                    <Link href={'/blogposts/' + slug}><a>Xem Thêm</a></Link>
                </div>
            </div>
            <style jsx>{`
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
            `}</style>
        </div>
    )
}