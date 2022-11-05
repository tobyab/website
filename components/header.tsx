import Link from "next/link";
import Image from "next/image";

import mail from "../public/icons/mail.svg";
import github from "../public/icons/github.svg";
import twitter from "../public/icons/twitter.svg";

export default function Header() {
    return (
        <div className="z-50">
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
                    <Image
                        src={mail}
                        alt="Mail icon"
                    />
                </Link>
                <Link
                    href="https://github.com/developedbytoby"
                    target="_blank"
                    rel="noopener norefferer"
                >
                    <Image
                        src={github}
                        alt="GitHub icon"
                    />
                </Link>
                <Link
                    href="https://twitter.com/developedbytoby"
                    target="_blank"
                    rel="noopener norefferer"
                >
                    <Image
                        src={twitter}
                        alt="Twitter icon"
                    />
                </Link>
            </div>
        </div>
    )
}