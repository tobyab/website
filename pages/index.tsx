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
    <div>
      <Transition ref={ref}>
        <div className="grid justify-center place-items-center h-screen mx-8">
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
            <Np href="https://hackclub.com" className="underline">
              Hack Club
            </Np>
            , a community for teenage hackers across the globe{" "}
            <Image
              src={globe}
              alt="Globe icon"
              className="h-8 w-8 object-cover inline self-center"
            />{" "}
            , and building{" "}
            <Np href="https://aretav.com" className="underline">
              Aretav
            </Np>
            , a tool for anyone to craft{" "}
            <Image
              src={pen}
              alt="Pen nib icon"
              className="h-8 w-8 object-cover inline self-center"
            />{" "}
            their own website as painlessly as possible.
          </H1>
        </div>
      </Transition>
      <Nav />
    </div>
  );
}
