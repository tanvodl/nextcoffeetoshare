import Link from 'next/link'
import Image from 'next/image'


export function PostCard({ post }) {
    const { title, slug, description, thumbnail } = post.fields
   
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
                    {/* <Link href={'/posts/' + slug}><strong classname="font-bold hover:text-yellow-600">   ...[Xem Thêm]</strong></Link> */}
                    </p>
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