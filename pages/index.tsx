import Image from "next/image"
import Link from "next/link"
import { GetRepo } from "../utils/hooks"
import type { Repo } from "../utils/hooks"
import { age, year, message } from "../utils/time"
import prisma from "../utils/prisma"
import Guestbook from "../components/guestbook"

type Props = {
  repository: Repo[];
}

function Card({ repository: projects }: { repository: Repo }) {
  return (
    <div>
      <h1 className="capitalize">{projects.repo}</h1>
      <p>Hello</p>
    </div>
  )
}

export default function Home(props: Props, { fallbackData }) {
  const {data: projects = props.repository} = GetRepo();
  //flex flex-col pt-24 space-x-4 text-left justify-center px-8 z-0 w-3/4 mx-auto
  //flex justify-center flex-col place-items-center px-8 z-0 bg-green-300
  //
  return (
    <div className="">
        <div className="place-items-center justify-center flex flex-col">
          <div>
          <div className="flex mt-48">
            <div className="flex-col space-y-2 pt-48 mr-80">
              <p className="text-xl">Hey there, I&apos;m</p>
              <h1 className="text-6xl font-bold">Toby Brown!</h1>
              <p className="text-xl">A {age} year old full stack web developer.</p>
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

          <div className="my-64">
            <h1 className="text-5xl font-bold">Projects</h1>
            <p className="text-xl lg:w-1/2 w-2/3 mt-2">A collection of a few of my projects, pulled straight from my GitHub!</p>
            <>
              {projects?.map(project => (
                <Card 
                  key={project.repo} 
                  repository={project}
                />
              ))}
            </>

            <h2 className="font-medium text-2xl my-16">Some other cool things I&apos;m working on right now:</h2>
            <div className="flex space-x-4">
              <div className="bg-gray-100 rounded-lg p-8 grid">
                <div>
                <img
                  className="w-auto rounded-lg"
                />
                </div>
                <h1 className="font-medium text-2xl">Tilde</h1>
                <p className="text-xl w-2/3">An open source, simple Markdown editor built with electron!</p>
              </div>
              <div className="bg-gray-100 rounded-lg p-8 grid">
                <img
                  src=""
                />
                <h1 className="font-medium text-2xl">Aretav</h1>
                <p className="text-xl w-2/3">The open source, simple Markdown editor built on electron!</p>
              </div>
            </div>
          </div>
          <div className="flex-col">
            <h1 className="text-5xl font-bold">Guestbook</h1>
            <p className="text-xl lg:w-1/2 w-2/3 mt-2 mb-6">Leave a message for me and everyone else who visits this website, it can be anything from advice to a joke!</p>
            <Guestbook fallbackData={fallbackData} />
          </div>

          <div className="mt-16">
            <h1 className="text-lg">© Toby Brown {year}</h1>
            <p className="text-gray-600 w-1/2 pt-4 mb-8">Hey! Thanks for checking out my website. If you&apos;re interested, check out the source code <Link href="https://github.com/developedbytoby/website">
                <a 
                  className="underline" 
                  target="_blank"
                  ref="noopener norefferer"
                >here
                </a>
              </Link>
            . And, I hope you have an awesome {message}!</p>
          </div>

        </div>
        </div>
      </div>
  );
}

function GuestbookComponent({ fallbackData }) {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-5xl font-bold">
          Guestbook
        </h1>
        <p className="text-xl mt-2">
          Leave a message below for me, and all future visitors of this site!
        </p>
      </div>
        <Guestbook fallbackData={fallbackData} />
      </div>
  )
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
