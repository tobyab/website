import { H1, P, S } from "../components/design/typography";
import Image from "next/image";
import { age } from "../utils/time";
import Nav from "../components/nav";
import Transition from "../components/transition";
import React from "react";
import Np from "../components/np";

import trees from "../public/trees.jpeg";
import aretav from "../public/aretav.png";
import numbers from "../public/numbers.png";

type IndexPageRef = React.ForwardedRef<HTMLDivElement>;

export default function Home(ref: IndexPageRef) {
  return (
    <div className="grid justify-center place-items-center m-8">
      <Transition ref={ref}>
        <div className="max-w-4xl sm:mt-16">
          <Image
            src={trees}
            alt="asdasd"
            className="rounded-2xl object-cover w-full max-h-full sm:h-[32rem]"
          />
          <H1 className="mt-8">
            Toby Brown is a <>{age}</> year old web developer & designer in
            London{" "}
            <span className="text-darkGrey">
              — currently working as a Storyteller at Hack Club.
            </span>
          </H1>
          <div className="flex mt-16 space-x-8">
            <P>
              Pariatur in consectetur reprehenderit minim velit cupidatat
              consectetur. Cillum ex id amet minim non non. Tempor labore non
              velit Lorem irure veniam eu anim est nisi eiusmod laborum sunt.
              Dolore ad est anim sit consequat.
            </P>
            <P>
              Pariatur in consectetur reprehenderit minim velit cupidatat
              consectetur. Cillum ex id amet minim non non. Tempor labore non
              velit Lorem irure veniam eu anim est nisi eiusmod laborum sunt.
              Dolore ad est anim sit consequat.
            </P>
          </div>
          <div className="mt-16">
            <div className="flex justify-between space-x-8">
              <Thing
                name="Aretav"
                type="Work"
                link="https://numbers.tobyb.dev/"
                img={aretav}
              />
              <Thing
                name="Numbers"
                type="Personal"
                link="https://numbers.tobyb.dev/"
                img={numbers}
              />
            </div>
          </div>
        </div>
      </Transition>
      <Nav />
    </div>
  );
}

function Thing({ type, name, link, img }) {
  return (
    <Np href={link} className="space-y-4 w-full">
      <Image
        src={img}
        alt="asdasd"
        className="rounded-2xl object-cover w-full max-h-full h-64 border"
      />
      <div className="space-y-1">
        <S
          className={`text-[${
            type === "Work" ? "#ff3e00" : type === "Personal" && "#3A86FF"
          }]`}
        >
          {type}
        </S>
        <P className="text-black">{name}</P>
      </div>
    </Np>
  );
}
