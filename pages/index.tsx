import { H1, P, S } from "../components/design/typography";
import Image from "next/image";
import { age, message } from "../utils/time";
import Nav from "../components/nav";
import React from "react";
import Np from "../components/np";
import Guestbook from "../components/guestbook";

import trees from "../public/toby.jpeg";
import aretav from "../public/aretav.png";
import beem from "../public/beem.png";
import hc from "../public/hc.png";
import sinerider from "../public/sinerider.png";
import outernet from "../public/outernet.png";
import reversegpt from "../public/reversegpt.png";
import { entries } from "../utils/entries";

export default function Home({ data }) {
  return (
    <div>
      <Nav />
      <div className="grid justify-center place-items-center m-8">
        <div className="max-w-4xl mt-16">
          <Image
            src={trees}
            alt="asdasd"
            className="rounded-2xl object-cover w-full max-h-full sm:h-[26rem]"
          />
          <H1 className="sm:mt-16 mt-8">
            Toby Brown is an inventor in London{" "}
            <span className="text-darkGrey">
              — currently defining the next generation of computing at Beem.
            </span>
          </H1>
          <div className="grid sm:grid-cols-2 sm:mt-24 mt-12 sm:space-x-8 sm:space-y-0 space-y-8 text-darkGrey">
            <S>
              Toby was always interested in very nerdy things; like alarm
              systems, and showed a strong interest in how things worked. He
              would discover how these things worked generally through brute
              force, and would sit looking for patterns on circuit boards of his
              newly destroyed things. This interest turned to code, where Toby
              built his first website at 7 years old. This vanilla HTML website
              took him many days to complete, and looked terrible; but he was
              hooked.
            </S>
            <S>
              Toby continued building, and in September 2021, discovered Hack
              Club. In the Summer of 2022, Toby attended their summer event
              called Assemble, in SF. Then, in November of 2022; Toby was hired
              as a Community Engineer at Hack Club, where he worked with an
              awesome team to make the Hack Club community the coolest place to
              be as a teenage programmer. In November 2023, Toby became a
              Storyteller at Hack Club, where he designs and builds websites.
            </S>
          </div>
          <div className="mt-16 grid sm:grid-cols-2 gap-8">
            <Thing
                name="Beem"
                type="Work"
                desc="A personal thinking machine that's made for humans and learns and adapts for you."
                link="https://beem.computer/"
                img={beem}
            />
            <Thing
              name="Aretav"
              type="Work"
              desc="I started Aretav to allow anyone to build their own website, without any code."
              link="https://aretav.com/"
              img={aretav}
            />
            <Thing
              name="Hack Club"
              type="Work"
              desc="I started working at Hack Club in 2021 as a Community Engineer, and now I'm a Storyteller."
              link="https://hackclub.com/"
              img={hc}
            />
            <Thing
              name="SineRider"
              type="Contributor"
              desc="I helped build the SineRider Twitter bot, which tweets out a new SineRider puzzle every day."
              link="https://sinerider.com"
              img={sinerider}
            />
            <Thing
              name="Outernet"
              type="Contributor"
              desc="I played a small part in creating an oasis for teenage hackers in Vermont."
              link="https://outernet.hackclub.com/"
              img={outernet}
            />
            {/*<Thing
              name="Numbers"
              type="Personal"
              desc="A tiny utility that displays the emergency numbers of the country you're in. It's simple, but it's one of my favourites."
              link="https://numbers.tobyb.dev/"
              img={numbers}
            />*/}
            <Thing
              name="ReverseGPT"
              type="Personal"
              desc="A reverse version of ChatGPT that asks YOU the questions. How the tables have turned!"
              link="https://github.com/developedbytoby/reversegpt"
              img={reversegpt}
            />
          </div>
          <Guestbook data={entries} />
          <S className="text-darkGrey mt-16">
            Thank you for visiting my website. I hope you enjoy the rest of your{" "}
            {message}!<br />
            P.S{" "}
            <Np
              href="https://github.com/developedbytoby/website"
              className="underline"
            >
              here&apos;s the code
            </Np>
            , if you&apos;re interested :)
          </S>
        </div>
      </div>
    </div>
  );
}

function Thing({ type, name, link, img, desc, className }: any) {
  return (
    <Np href={link} className={`space-y-4 w-full ${className}`}>
      <Image
        src={img}
        alt="asdasd"
        className="rounded-2xl object-cover w-full max-h-full h-64 border"
      />
      <div className="space-y-1">
        <p
          className={`text-xs font-medium text-${
            type === "Work"
              ? "red"
              : type === "Personal"
                ? "blue"
                : type === "Contributor" && "yellow"
            
          }`}
        >
          {type}
        </p>
        <P>{name}</P>
        <S className="text-darkGrey">{desc}</S>
      </div>
    </Np>
  );
}
