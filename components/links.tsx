import Link from "next/link"

export default function Social({ SocialLink, Name, Description, rel }: any) {
    return (
        <div className="my-8">
            <Link
                href={SocialLink}
                target="_blank"
                rel={`noopener noreferrer ${rel}`}
            >
                <h1 className="font-medium text-2xl mb-2">{Name}</h1>
                <p className="text-xl w-2/3">{Description}</p>
            </Link>
        </div>
    )
}
