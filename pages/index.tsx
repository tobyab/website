import Image from "next/image"
import Link from "next/link"
import { age, year, message } from "../utils/time"
import prisma from "../utils/prisma"
import Guestbook from "../components/guestbook"
import { ProjectCard } from "../components/Cards"

export default function Home({ fallbackData }) {
  return (
        <div className="place-items-center justify-center flex flex-col  px-6 mx-auto">
          <div className="flex-col place-items-center w-4/5 md:w-2/3">
          <div className="lg:flex md:mt-48">
            <div className="flex-col space-y-2 pt-48 lg:pr-80 pr-24">
              <p className="text-xl">Hey there, I&apos;m</p>
              <h1 className="text-6xl font-bold">Toby Brown!</h1>
              <p className="text-xl">A year old {age} full stack web developer.</p>
              <div className="space-x-4 pt-2">
                <Link href="mailto:mail.toby@icloud.com">
                  <a target="_blank" rel="noopener norefferer">
                    <Image
                      className="mx-16"
                      src="/icons/mail.svg"
                      height={24}
                      width={24}
                    />
                  </a>
                </Link>
                <Link href="https://github.com/developedbytoby">
                  <a target="_blank" rel="noopener norefferer">
                    <Image
                      src="/icons/github.svg"
                      height={24}
                      width={24}
                    />
                  </a>
                </Link>
                <Link href="https://twitter.com/developedbytoby">
                  <a target="_blank" rel="noopener norefferer">
                    <Image
                      src="/icons/twitter.svg"
                      height={24}
                      width={24}
                    />
                  </a>
                </Link>
                </div>
              </div>
              <img
                className="lg:flex flex-col"
                src="/toby.png"
                height={500}
                width={500}
              />
          </div>
          <div className="my-64 w-auto">
            <h1 className="text-5xl font-bold">Projects</h1>
            <p className="text-xl mt-2 mx-auto">A collection of a few small projects I&apos;ve worked on!</p>
            <div className="space-y-4 mt-16">
              <div className="md:flex grid md:space-x-4">
                <ProjectCard
                  title="Blog"
                  description="📖 My blog powered by Next.js, Tailwind and ContentLayer"
                  link="https://github.com/blog"
                />
                <ProjectCard
                  title="Conifer"
                  description="🌲The (almost) perfect personal website template"
                  link="https://github.com/developedbytoby/conifer"
                />
              </div>
              <div className="md:flex grid md:space-x-4">
                <ProjectCard
                  title="Pluto"
                  description="🤖 A small space themed quiz run by Pluto!"
                  link="https://github.com/developedbytoby/pluto"
                />
                <ProjectCard
                  title="Website"
                  description="🏡 My personal website built with Next.js, TailwindCSS, Prisma and Planetscale"
                  link="https://tobyb.wiki"
                />
              </div>
            </div>
            <h2 className="font-medium text-2xl my-16">Some other cool things I&apos;m working on right now:</h2>
            <div className="md:flex grid md:space-x-4">
              <Link href="https://github.com/developedbytoby/tilde">
                <a target="_blank" rel="noopener noreferrer">
                <div className="rounded-lg p-8 border-2 border-transparent hover:border-gray-200 bg-gray-100">
                  <div>
                    <img
                      className="rounded-lg h-full"
                      src="/screenshots/tilde.png"
                    />
                  </div>
                  <h1 className="font-medium text-2xl pt-4">Tilde</h1>
                  <p className="text-xl w-2/3">Tilde is a simple and open source Markdown editor built on electron!</p>
                </div>
                </a>
              </Link>
              <Link href="https://aretav.com">
                <a target="_blank" rel="noopener noreferrer">
                  <div className="bg-gray-100 rounded-lg p-8 border-2 border-transparent hover:border-gray-200">
                    <div className="">
                    <img
                      className="rounded-lg"
                      src="/screenshots/aretav.png"
                    />
                    </div>
                    <h1 className="font-medium text-2xl pt-4">Aretav</h1>
                    <p className="text-xl w-2/3">Aretav provides you with an quick and easy way to create a beautiful personal portfolio.</p>
                  </div>
                </a>
              </Link>
            </div>
          </div>
          <div className="my-64 w-auto">
            <h1 className="text-5xl font-bold">About</h1>
            <p className="text-xl lg:w-1/2 w-2/3 mt-2 mb-16">A small paragraph about me!</p>
            <p className="w-2/3 text-xl">
            I&apos;m Toby, a {age} year old full stack web developer based in London. My some favourite technologies include TypeScript, Next.js and Postgresql.
              Outside of web development, I&apos;m also interested in ethical hacking, UI design and Artifical Intelligence.
              <br/>
              On top of all of this, I also play piano, cello and I sing. If you want to chat, send me an email, DM me on Twitter, or leave an entry on my Guestbook below!
            </p>
          </div>
          <div className="mb-64">
            <h1 className="text-5xl font-bold">Let&apos;s be friends</h1>
            <p className="text-xl lg:w-1/2 w-2/3 mt-2 mb-16">I love meeting new people, below are some of my social accounts.</p>
            <Link href="mailto:mail.toby@icloud.com">
              <a target="_blank" rel="noopener noreferrer">
                <h1 className="font-medium text-2xl mt-4 mb-2">Email</h1>
                <p className="text-xl w-2/3">Here&apos;s my email address, it&apos;s the best way to contact me</p>
              </a>
            </Link>
            <Link href="https://github.com/developedbytoby">
              <a target="_blank" rel="noopener noreferrer">
                <h1 className="font-medium text-2xl mt-4 mb-2">GitHub</h1>
                <p className="text-xl w-2/3">The home of all of my code!</p>
              </a>
            </Link>
            <Link href="https://twitter.com/developedbytoby">
              <a target="_blank" rel="noopener noreferrer">
                <h1 className="font-medium text-2xl mt-4 mb-2">Twitter</h1>
                <p className="text-xl w-2/3">I&apos;m not too active on Twitter, but occasinally, I do tweet!</p>
              </a>
            </Link>
            <Link href="https://aretav.com/toby">
              <a target="_blank" rel="noopener noreferrer">
                <h1 className="font-medium text-2xl mt-4 mb-2">Aretav</h1>
                <p className="text-xl w-2/3">If you want more information on me, my Aretav page is the best place to find that!</p>
              </a>
            </Link>
            <Link href="https://www.linkedin.com/in/toby-b-987229232/">
              <a target="_blank" rel="noopener noreferrer">
                <h1 className="font-medium text-2xl mt-4 mb-2">LinkedIn</h1>
                <p className="text-xl w-2/3">Behold, my LinkedIn!</p>
              </a>
            </Link>
            <Link href="https://open.spotify.com/playlist/4aaUkXmc9FtFEdabNmYVuN?si=690955bc25ee4f12">
              <a target="_blank" rel="noopener noreferrer">
                <h1 className="font-medium text-2xl mt-4 mb-2">Spotify</h1>
                <p className="text-xl w-2/3">Here&apos;s my Spotify playlist! I&apos;m almost always listening to it.</p>
              </a>
            </Link>
          </div>
          <div className="flex-col">
            <h1 className="text-5xl font-bold">Guestbook</h1>
            <p className="text-xl lg:w-1/2 w-2/3 mt-2 mb-8">Leave a message for me and everyone else who visits this website, it can be anything from advice to a joke!</p>
            <Guestbook fallbackData={fallbackData} />
          </div>

          <div className="mt-16">
            <h1 className="text-lg">© Toby Brown {year}</h1>
            <p className="text-gray-600 w-1/2 pt-4 mb-8">Hey! Thanks for checking out my website. If you&apos;re interested, check out the source code <Link href="https://github.com/developedbytoby/website">
                <a 
                  className="underline" 
                  target="_blank"
                  rel="noopener noreferrer"
                >here
                </a>
              </Link>
            . Or, if you&apos;re looking for a cute picture of my dog, Pepper, <Link href="/pepper.png">
                <a 
                  className="underline" 
                  target="_blank"
                  rel="noopener noreferrer"
                >here you go
                </a>
              </Link>
            . And, I hope you&apos;re having an awesome {message}!
            </p>
          </div>

        </div>
        </div>
  );
}

export async function getStaticProps() {
  const entries = await prisma.guestbook.findMany({
    orderBy: {
      updated_at: 'desc',
    },
  });

  const fallbackData = entries.map((entry) => ({
    id: entry.id.toString(),
    body: entry.body,
    updated_at: entry.updated_at.toString(),
    created_by: entry.created_by.toString()
  }));

  return {
    props: {
      fallbackData
    },
    revalidate: 60
  };
}
