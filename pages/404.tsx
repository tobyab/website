import Link from "next/link"
import Head from "next/head"

export default function FourOhFour() {
    return (
        <div className="place-items-center justify-center flex flex-col mt-48 text-left px-8">
            <Head>
                <title>404!</title>
            </Head>
            <div>
                <h1 className="text-6xl font-bold mb-6">404- the page was lost in space. 🧑‍🚀</h1>
                <p className="text-xl mb-8">Just kidding. I&apos;m guessing you just typed the url wrong. Maybe give it double check?</p>
                <Link href="/">
                    <button
                        className="p-4 bg-gray-100 rounded-lg mb-8 border-2 border-transparent hover:border-gray-200"
                    >
                        Let&apos;s head home
                    </button>
                </Link>
            </div>
        </div>
    )
}