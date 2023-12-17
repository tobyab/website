import { H1, H2, P, S } from "../components/design/typography";
import Image from "next/image";
import { age } from "../utils/time";
import Nav from "../components/nav";
import Transition from "../components/transition";
import React from "react";
import Np from "../components/np";
import prisma from "../utils/prisma";

import trees from "../public/trees.jpeg";
import aretav from "../public/aretav.png";
import hc from "../public/hc.png";
import numbers from "../public/numbers.png";
import sinerider from "../public/sinerider.png";
import plus from "../public/icons/plus.svg";

type IndexPageRef = React.ForwardedRef<HTMLDivElement>;

export default function Home({ data }, ref: IndexPageRef) {
  return (
    <div>
      <Nav />
      <div className="grid justify-center place-items-center m-8 mb-32">
        <Transition ref={ref}>
          <div className="max-w-4xl sm:mt-16">
            <Image
              src={trees}
              alt="asdasd"
              className="rounded-2xl object-cover w-full max-h-full sm:h-[32rem]"
            />
            <H1 className="mt-16">
              Toby Brown is a <>{age}</> year old full-stack web developer &
              designer in London{" "}
              <span className="text-darkGrey">
                — currently working as a Storyteller at Hack Club.
              </span>
            </H1>
            <div className="sm:flex mt-24 sm:space-x-8 sm:space-y-0 space-y-8 text-darkGrey">
              <S>
                Pariatur in consectetur reprehenderit minim velit cupidatat
                consectetur. Cillum ex id amet minim non non. Tempor labore non
                velit Lorem irure veniam eu anim est nisi eiusmod laborum sunt.
                Dolore ad est anim sit consequat.
              </S>
              <S>
                Pariatur in consectetur reprehenderit minim velit cupidatat
                consectetur. Cillum ex id amet minim non non. Tempor labore non
                velit Lorem irure veniam eu anim est nisi eiusmod laborum sunt.
                Dolore ad est anim sit consequat.
              </S>
            </div>
            <div className="mt-16 space-y-8">
              <div className="md:flex justify-between sm:space-x-8 sm:space-y-0 space-y-8">
                <Thing
                  name="Aretav"
                  type="Work"
                  desc="Aretav is a company that I founded in 2022 that aims to make the internet a better place."
                  link="https://numbers.tobyb.dev/"
                  img={aretav}
                />
                <Thing
                  name="Hack Club"
                  type="Work"
                  desc="I started working at Hack Club in 2021 as a Community Engineer, and now I'm a Storyteller."
                  link="https://numbers.tobyb.dev/"
                  img={hc}
                />
              </div>
              <div className="md:flex justify-between sm:space-x-8 sm:space-y-0 space-y-8">
                <Thing
                  name="SineRider"
                  type="Contributer"
                  desc="I helped build the SineRider Twitter bot, which tweets out a new SineRider puzzle every day."
                  link="https://twitter.com/SineRiderBot"
                  img={sinerider}
                />
                <Thing
                  name="Numbers"
                  type="Personal"
                  desc="A tiny utility that displays the emergency numbers of the country you're currently in."
                  link="https://numbers.tobyb.dev/"
                  img={numbers}
                />
              </div>
              <div className="md:flex justify-between sm:space-x-8 sm:space-y-0 space-y-8">
                <Thing
                  name="Numbers"
                  type="Personal"
                  desc="A tiny utility that displays the emergency numbers of the country you're currently in."
                  link="https://numbers.tobyb.dev/"
                  img={numbers}
                />
                <Thing
                  name="Hack Club"
                  type="Personal"
                  desc="I started working at Hack Club in 2022 as a Community Engineer, and now I'm a Storyteller."
                  link="https://numbers.tobyb.dev/"
                  img={aretav}
                />
              </div>
            </div>
            <div className="sm:space-x-8 sm:space-y-0 space-y-8 md:flex mt-16">
              <div className="bg-grey w-full p-4 rounded-xl border h-48 justify-center place-items-center grid">
                <H2 className="flex">
                  Add your own entry{" "}
                  <span className="ml-2">
                    <Image src={plus} alt="Plus icon" className="self-center" />
                  </span>
                </H2>
              </div>
              {((data as Array<any>).slice(0, 3) || []).map((data) => (
                <Entry key={data.id} data={data} />
              ))}
            </div>
          </div>
        </Transition>
      </div>
    </div>
  );
}

function Thing({ type, name, link, img, desc }) {
  return (
    <Np href={link} className="space-y-4 w-full">
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
                : type === "Contributer" && "yellow"
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

function Entry({ data }) {
  return (
    <div className="bg-grey w-full p-4 rounded-xl border h-48 justify-center place-items-center grid">
      <div className="space-y-2">
        <P className="text-black">{data.body}</P>
        <S className="text-darkGrey">— {data.created_by}</S>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const data = await prisma.guestbook.findMany({
    orderBy: {
      created_at: "desc",
    },
  });

  const serializedData = data.map((data) => {
    return {
      ...data,
      id: data.id.toString(),
      created_at: data.created_at.toISOString(),
    };
  });

  return {
    props: {
      data: serializedData,
    },
  };
}
