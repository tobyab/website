import Link from "next/link"
import Image from "next/image"

export default function Now({ Title, Description, Img, LinkToProject }) {
    return (
        <div className="my-8">
            <Link
                href={LinkToProject}
                target="_blank"
                rel="noopener norefferer"
            >
                <div className="flex space-x-4">
                    <Image
                        src={Img}
                        alt={Title}
                        className="rounded-lg self-center"
                        width={48}
                        height={48}
                    />
                    <div>
                        <h1 className="text-2xl font-medium mb-2">{Title}</h1>
                        <p className="text-xl">{Description}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}
