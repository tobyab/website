import { H1 } from "../components/design/typography";
import Np from "../components/np";
import Image from "next/image";
import { age } from "../utils/time";
import Nav from "../components/nav";

import hammer from "../public/icons/hammer.svg";
import sparkles from "../public/icons/sparkles.svg";
import globe from "../public/icons/globe.svg";
import pen from "../public/icons/pen.svg";
import Transition from "../components/transition";
import React from "react";

type IndexPageRef = React.ForwardedRef<HTMLDivElement>;

export default function Home(ref: IndexPageRef) {
  return (
    <div className="mx-8">
      <Transition ref={ref}>
        <div className="grid justify-center place-items-center h-screen">
          <H1 className="max-w-2xl">
            Hey, I&apos;m Toby. I&apos;m a {age} year old full stack web
            developer{" "}
            <Image
              src={hammer}
              alt="Hammer icon"
              className="h-8 w-8 object-cover inline self-center"
            />{" "}
            with a passion for making delightful websites{" "}
            <Image
              src={sparkles}
              alt="Sparkles icon"
              className="h-8 w-8 object-cover inline self-center"
            />{" "}
            . Right now, I&apos;m working as a Community Engineer at{" "}
            <Np href="https://hackclub.com">Hack Club</Np>, a community for
            teenage hackers across the globe{" "}
            <Image
              src={globe}
              alt="Globe icon"
              className="h-8 w-8 object-cover inline self-center"
            />{" "}
            , and building <Np href="https://aretav.com">Aretav</Np>, a tool for
            anyone to craft{" "}
            <Image
              src={pen}
              alt="Pen nib icon"
              className="h-8 w-8 object-cover inline self-center"
            />{" "}
            their own website - as painlessly as possible.
          </H1>
        </div>
      </Transition>
      <Nav />
    </div>
  );
}

/*

-----------------
Potential version
-----------------

 <div className="grid justify-center place-items-center">
      <Meta />
      <div className="max-w-xl space-y-16 my-32 mx-8">
        <div>
          <Image
            src={toby}
            alt="Toby Brown"
            className="rounded-full h-10 w-10 object-cover mb-8"
          />
          <P>Toby Brown</P>
          <div className="space-y-4 mt-2">
            <S>
              Hey, I&apos;m Toby. I&apos;m a {age} year old full stack web
              developer, designer and (occasional) musician from London. Right
              now, I&apos;m working as a community engineer at{" "}
              <Np href="https://hackclub.com">Hack Club</Np>, a community for
              teenage hackers across the globe.
            </S>
            <S>
              As well as Hack Club, I&apos;m also building{" "}
              <Np href="https://aretav.com">Aretav</Np>. A tool to help anyone
              make creating a website more accessible for everyone.
            </S>
            <S>
              I&apos;ve also built{" "}
              <Link href="https://aretav.com">Conifer</Link>, which is a super
              simple template for creating a personal website. And, I helped
              build{" "}
              <Np href="https://twitter.com/sineriderbot">
                SineRider&apos;s Twitter bot
              </Np>
              ; a bot which tweets out random maths equations everyday.
            </S>
            <S>
              As well as all of this, I love listening to, and creating music
              with my cello and piano! Right now, my favourite music artist is
              probably{" "}
              <Np href="https://en.wikipedia.org/wiki/Caroline_Polachek">
                Caroline Polacheck
              </Np>
              . You can check out all of my playlists over on{" "}
              <Np href="https://music.apple.com/profile/developedbytoby">
                Apple Music
              </Np>
              .
            </S>
            <Button>
              <Link href="mailto:hi@tobyb.dev">Shoot me an email</Link>
            </Button>
          </div>
        </div>
        <div className="space-y-4">
          <H1>Socials</H1>
          <Profile name="GitHub" link="https://github.com/developedbytoby" />
          <Profile name="Twitter" link="https://twitter.com/developedbytoby" />
          <Profile name="Mastodon" link="https://mas.to/@tobyb" />
        </div>
        <div className="space-y-4">
          <H1>Work</H1>
          <Work
            title="Community Engineer"
            company="Hack Club"
            start="2022"
            link="https://hackclub.com"
          />
          <Work
            title="Founding Developer"
            company="Aretav"
            start="2022"
            link="https://aretav.com"
          />
        </div>
        <div className="space-y-4">
          <H1>Projects</H1>
          <Project
            title="SineRider Twitter Bot"
            link="https://twitter.com/sineriderbot"
            date="2023"
          />
          <Project
            title="Conifer"
            link="https://conifer.tobyb.dev"
            date="2022"
          />
          <Project
            title="Tilde"
            link="https://github.com/developedbytoby/tilde"
            date="2022"
          />
        </div>
        <div>
          <H1>Guestbook</H1>
          <Guestbook fallbackData={fallbackData} />
        </div>
        <div>
          <P>✨ Built with groovy 80s music.</P>
          <S className="mt-4">
            Hey! Thanks for checking out my website. If you&apos;re interested,
            check out the source code{" "}
            <Link
              href="https://github.com/developedbytoby/website"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </Link>
            . Or, if you&apos;re looking for a cute picture of my dog, Pepper,{" "}
            <Link
              href="/pepper.png"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              here you go
            </Link>
            . Oh, and one more thing, if you feel like doing something kind
            today,{" "}
            <Link
              href="https://github.com/sponsors/developedbytoby"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              click here
            </Link>
            . I hope you&apos;re having an awesome day!
          </S>
        </div>
      </div>
    </div>
 */
