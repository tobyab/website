import Link from "next/link"

export default function Now({ Title, Description, Img, LinkToProject }) {
    return (
        <div className="my-4">
            <Link
                href={LinkToProject}
                target="_blank"
                rel="noopener norefferer"
            >
                <div className="flex py-4 space-x-4">
                    <picture className="self-center w-12 h-12">
                        <img
                            src={Img}
                            alt={Title}
                            className="rounded-lg"
                        />
                    </picture>
                    <div>
                        <h1 className="text-2xl font-medium mb-2">{Title}</h1>
                        <p className="text-xl">{Description}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}
