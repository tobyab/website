import Link from "next/link"

export default function Social({ SocialLink, Name, Description }: any) {
    return (
        <Link
            href={SocialLink}
            target="_blank"
            rel="noopener noreferrer"
        >
            <h1 className="font-medium text-2xl mt-4 mb-2">{Name}</h1>
            <p className="text-xl w-2/3">{Description}</p>
        </Link>
    )
}
