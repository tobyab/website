import { age } from "../utils/time"
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
      <div className="place-items-center justify-center flex flex-col px-6 mx-auto">
        <div className="flex-col place-items-center w-4/5 md:w-2/3 z-10">
          <Hero/>
          <div className="my-64 w-auto">
            <h1 className="text-5xl font-bold">Projects</h1>
            <p className="text-xl mt-2 mx-auto">A collection of a few small projects I&apos;ve worked on!</p>
            <div className="sm:space-y-4 mt-16">
              <div className="md:flex grid md:space-x-4">
                <ProjectCard
                  title="Blog"
                  description="📖 My blog powered by Next.js, Tailwind and ContentLayer"
                  link="https://github.com/developedbytoby/blog"
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
                  description="🏡 My personal website built with Next.js, TailwindCSS, Prisma and PlanetScale"
                  link="https://github.com/developedbytoby/website"
                />
              </div>
            </div>
            <h2 className="font-medium text-2xl my-16">Some other groovy things I&apos;m working on right now:</h2>
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
          <div className="my-64 w-auto">
            <h1 className="text-5xl font-bold">About</h1>
            <p className="text-xl lg:w-1/2 w-auto mt-2 mb-16">A small paragraph about me!</p>
            <div className="md:w-1/2 w-auto text-xl space-y-2 flex space-x-16">
              <div>
              <p>
                I&apos;m Toby, a {age} year old full stack web developer from London. 
                I have a passion for building intuitive, modern and speedy web apps. 
              </p>
              <p>
                Before web development, I was really into hardware. 
                At the age of 7, I got my first computer, a Raspberry Pi Model B. 
                With that Raspberry Pi, I started learning how to code.
                This is where my passion for computers really started. 
                I started by developing simple games using Scratch, and later on I was building small games using Python. 
                3 years later, at the age of 10, I built my first computer.
              </p>
              <p>
                Since then, I&apos;ve really got into open source software. 
                I&apos;ve also found amazing communities like Hack Club which have helped me learn more, and grow as a programmer!
              </p>
              <p>
                As well as web development, I&apos;m also really interested in UI design, AI and ethical hacking. 
                Outside of technology, I also play the cello, piano, and I sing. Also, according to my family, I&apos;m really bad at telling
                jokes!
              </p>
              </div>
            </div>
          </div>

          <div className="mb-64">
            <h1 className="text-5xl font-bold">Now</h1>
            <p className="text-xl lg:w-1/2 w-auto mt-2 mb-16">Here&apos;s a super quick summary of what I&apos;m up to right now!</p>
            <Now
                Title="Hack Club"
                Description="Community engineer @ Hack Club"
                Img="https://assets.hackclub.com/icon-square.svg"
                LinkToProject="https://hackclub.com"
            />
            <Now
              Title="Tilde"
              Description="An easier way to take notes"
              Img="https://github.com/developedbytoby/tilde/raw/master/resources/icon.png"
              LinkToProject="https://github.com/developedbytoby/tilde"
            />
            <Now
              Title="Aretav"
              Description="Create a portfolio in a matter of minutes"
              Img="https://aretav.com/logo.png"
              LinkToProject="https://aretav.com"
            />
            <Now
                Title="grooovy"
                Description="A very much unfinished project, I'm building right now!"
                Img="https://grooovy-sable.vercel.app/logo.png"
                LinkToProject="https://grooovy-sable.vercel.app/"
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
              SocialLink="https://aretav.com/toby"
              Name="Aretav"
              Description="Here's my portfolio, made with Aretav!"
            />
            <Social
              SocialLink="https://www.linkedin.com/in/toby-b-987229232/"
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
