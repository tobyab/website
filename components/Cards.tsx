import Link from "next/link"

export function ProjectCard({ title, description, link }) {
    return (
        <Link href={link}>
            <a target="_blank" rel="noopener noreferrer" className="p-8 bg-gray-100 rounded-lg w-1/2 border-2 border-transparent hover:border-gray-200">
                <h1 className="font-medium text-2xl">
                    {title}
                </h1>
                <p className="text-xl w-2/3">
                    {description}
                </p>
            </a>
        </Link>
    )
}

export function BlogCard({ title, date, description, link }) {
    return (
        <Link href={link}>
            <a target="_blank" rel="noopener noreferrer" className="p-8 bg-gray-100 rounded-lg w-1/2 border-2 border-transparent hover:border-gray-200">
                <h1 className="font-medium text-2xl">
                    {title}
                </h1>
                <p className="text-xl w-2/3">
                    {description}
                </p>
                <p className="text-xl w-2/3">
                    {date}
                </p>
            </a>
        </Link>
    )
}
