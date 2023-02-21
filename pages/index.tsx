import Guestbook from "../components/guestbook"
import { ProjectCard, BigProjectCard } from "../components/cards"
import Meta from "../components/meta"
import Now from "../components/now"
import Social from "../components/links"
import Footer from "../components/footer"
import Header from "../components/header"
import Hero from "../components/hero"

export default function Home({ fallbackData }) {
  return (
      <div>
        <Meta/>
        <Header/>
        <div className="place-items-center justify-center flex flex-col px-6 mx-auto z-10">
          <div className="flex-col place-items-center w-4/5 md:w-2/3 z-10">
            <Hero/>
            <div className="mb-64 w-auto">
              <h1 className="text-5xl font-bold">Projects</h1>
              <p className="text-xl my-2 mx-auto">A collection of a few small projects I&apos;ve worked on!</p>
              <div className="sm:space-y-4 mt-16">
                <div className="md:flex grid md:space-x-4">
                  <ProjectCard
                      title="Blog"
                      description="📖 My blog powered by Next.js, Tailwind and ContentLayer"
                      link="https://github.com/developedbytoby/blog"
                  />
                  <ProjectCard
                      title="Conifer"
                      description="🪴 The (almost) perfect personal website template"
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
                      description="🏡 My personal website built with Next.js, TailwindCSS, Prisma and PlanetScale"
                      link="https://github.com/developedbytoby/website"
                  />
                </div>
              </div>
              <h2 className="font-medium text-2xl my-16">Some other cool things I&apos;m working on right now:</h2>
              <div className="grid space-y-8">
                <BigProjectCard
                    title="Aretav"
                    description="Aretav provides you with an quick and easy way to create a beautiful personal portfolio."
                    link="https://aretav.com/"
                    imgSrc="/screenshots/aretav.png"
                    imgAlt="A screenshot of aretav.com's landing page."
                />
                <BigProjectCard
                    title="Tilde"
                    description="Tilde is a simple, easy to use and open source Markdown editor built on electron."
                    link="https://github.com/developedbytoby/tilde"
                    imgSrc="/screenshots/tilde.png"
                    imgAlt="A screenshot of Tilde"
                />
              </div>
            </div>

            <div className="mb-64">
              <h1 className="text-5xl font-bold">Now</h1>
              <p className="text-xl lg:w-1/2 w-auto mt-2 mb-16">Here&apos;s a super quick summary of what I&apos;m up to right now!</p>
              <Now
                  Title="Hack Club"
                  Description="I&apos;m a community engineer at Hack Club"
                  Img="https://assets.hackclub.com/icon-square.svg"
                  LinkToProject="https://hackclub.com"
              />
              <Now
                  Title="SineRider"
                  Description="I&apos;m currently building a Twitter bot for SineRider"
                  Img="https://sinerider.com/sr_logo.webp"
                  LinkToProject="https://sinerider.com"
              />
              <Now
                  Title="Aretav"
                  Description="I&apos;m working on open sourcing Aretav"
                  Img="https://aretav.com/logo.png"
                  LinkToProject="https://aretav.com"
              />
              <Now
                  Title="Tilde"
                  Description="Trying to make note-taking as easy as possible"
                  Img="https://cdn.tobyb.dev/tilde.png"
                  LinkToProject="https://github.com/developedbytoby/tilde"
              />
              <Now
                  Title="grooovy"
                  Description="I&apos;m trying to make sharing your project progress easier"
                  Img="https://grooovy.tobyb.dev/logo.png"
                  LinkToProject="https://grooovy.tobyb.dev"
              />
            </div>
            <div className="mb-64">
              <h1 className="text-5xl font-bold">Let&apos;s be friends</h1>
              <p className="text-xl lg:w-1/2 w-auto mt-2 mb-16">I love meeting new people, here are some of my social accounts!</p>
              <Social
                  SocialLink="mailto:hi@tobyb.dev"
                  Name="Email"
                  Description="Want to chat? Feel free to shoot me an email."
              />
              <Social
                  SocialLink="https://github.com/developedbytoby"
                  Name="GitHub"
                  Description="The home of all of my code, one of my favourite places on the internet."
              />
              <Social
                  SocialLink="https://twitter.com/developedbytoby"
                  Name="Twitter"
                  Description="Stay up to date with my projects, cool things I&apos;ve found or my random musings."
              />
              <Social
                  SocialLink="https://mas.to/@tobyb"
                  Name="Mastodon"
                  Description="Stay even more up to date with my projects, cool things I&apos;ve found or my random musings."
                  rel="me"
              />
              <Social
                  SocialLink="https://aretav.com/toby"
                  Name="Aretav"
                  Description="Here's my portfolio, made with Aretav!"
              />
              <Social
                  SocialLink="https://www.linkedin.com/in/developedbytoby/"
                  Name="LinkedIn"
                  Description="There's not too much here, but let's connect!"
              />
              <Social
                  SocialLink="https://music.apple.com/profile/developedbytoby"
                  Name="Apple Music"
                  Description="Take a listen to some of my favourite songs!"
              />
            </div>
            <div className="flex-col">
              <h1 className="text-5xl font-bold">Guestbook</h1>
              <p className="text-xl md:w-2/3 w-auto mt-2 mb-8">Leave a message for me and everyone else who visits this website, it can be anything from advice to a joke!</p>
              <Guestbook fallbackData={fallbackData}/>
            </div>
            <Footer/>
          </div>
        </div>
      </div>
  );
}
