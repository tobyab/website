import Link from "next/link"

export function ProjectCard({ title, description, link }) {
    return (
        <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-8 bg-grey rounded-lg md:w-1/2 w-auto border-2 border-grey border-transparent hover:border-gray-200 md:my-0 my-2"
        >
                <h1 className="font-medium text-2xl mb-2">
                    {title}
                </h1>
                <p className="text-xl w-2/3">
                    {description}
                </p>
        </Link>
    )
}

export function BigProjectCard({ title, link, description, imgSrc, imgAlt }){
    return (
        <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
        >
            <div className="w-auto">
                <div>
                    <div className="mb-6">
                        <h1 className="font-medium text-2xl pt-4 mb-2">{title}</h1>
                        <p className="text-xl md:w-2/3">{description}</p>
                    </div>
                    <picture>
                        <img
                            src={imgSrc}
                            alt={imgAlt}
                            className="rounded-lg"
                        />
                    </picture>
                </div>
            </div>
        </Link>
    )
}
