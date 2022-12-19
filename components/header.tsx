import Link from "next/link"
import Icon from "@hackclub/icons"

export default function Header() {
    return (
        <div>
            <Link
                href="#"
                className="fixed m-8 text-xl"
            >
                Toby Brown
            </Link>
            <div className="fixed right-0 flex m-8 space-x-4">
                <Link
                    href="mailto:hi@tobyb.dev"
                    target="_blank"
                    rel="noopener norefferer"
                >
                    <Icon glyph="email-fill" size={32}/>
                </Link>
                <Link
                    href="https://github.com/developedbytoby"
                    target="_blank"
                    rel="noopener norefferer"
                >
                    <Icon glyph="github" size={32} />
                </Link>
                <Link
                    href="https://twitter.com/developedbytoby"
                    target="_blank"
                    rel="noopener norefferer"
                >
                    <Icon glyph="twitter" size={32} />
                </Link>
            </div>
        </div>
    )
}