import { message } from "../utils/time";
import Link from "next/link";

export default function Footer() {
    return (
        <div className="mt-16">
            <h1 className="text-lg">Built with vibes and groovy 80&apos;s music ✨</h1>
            <p className="text-gray-600 md:w-1/2 w-auto pt-4 mb-8">Hey! Thanks for checking out my website. If you&apos;re interested, check out the source code <Link
                    href="https://github.com/developedbytoby/website"
                    className="underline"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    here
                </Link>
                . Or, if you&apos;re looking for a cute picture of my dog, Pepper, <Link
                    href="/pepper.png"
                    className="underline"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    here you go
                </Link>
                . Oh, and one more thing, if you feel like doing something kind today, <Link
                    href="https://github.com/sponsors/developedbytoby"
                    className="underline"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    click here
                </Link>
                . I hope you&apos;re having an awesome {message}!
            </p>
        </div>
    )
}
