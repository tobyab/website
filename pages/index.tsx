import { H1, H2, P, S } from "../components/design/typography";
import Image from "next/image";
import { age, message } from "../utils/time";
import Nav from "../components/nav";
import Transition from "../components/transition";
import React, { useState } from "react";
import Np from "../components/np";
import prisma from "../utils/prisma";

import trees from "../public/trees.jpeg";
import aretav from "../public/aretav.png";
import hc from "../public/hc.png";
import numbers from "../public/numbers.png";
import sinerider from "../public/sinerider.png";
import outernet from "../public/outernet.png";
import reversegpt from "../public/reversegpt.png";
import plus from "../public/icons/plus.svg";
import { signIn, useSession } from "next-auth/react";
import { Button } from "../components/design/button";
import { Form, FormState } from "../utils/states";
import { toast } from "sonner";

type IndexPageRef = React.ForwardedRef<HTMLDivElement>;

export default function Home({ data }, ref: IndexPageRef) {
  const [form, setForm] = useState<FormState>({ state: Form.Initial });
  const [entry, setEntry] = useState("");
  const { data: session } = useSession();

  const leaveEntry = async (e: any) => {
    e.preventDefault();
    setForm({ state: Form.Loading });

    const response = await fetch("/api/guestbook", {
      body: JSON.stringify({
        body: entry,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await response.json();

    console.log("response: " + error);
    if (error) {
      setForm({ state: Form.Error });
      toast("Uh oh. Something's gone wrong.");
    } else {
      setForm({
        state: Form.Success,
      });
      toast("Thanks for signing my guestbook!");
    }
  };

  return (
    <div>
      <Nav />
      <div className="grid justify-center place-items-center m-8">
        <Transition ref={ref}>
          <div className="max-w-4xl mt-16">
            <Image
              src={trees}
              alt="asdasd"
              className="rounded-2xl object-cover w-full max-h-full sm:h-[32rem]"
            />
            <H1 className="sm:mt-16 mt-8">
              Toby Brown is a <>{age}</> year old full-stack web developer &
              designer in London{" "}
              <span className="text-darkGrey">
                — currently working as a Storyteller at Hack Club.
              </span>
            </H1>
            <div className="sm:flex sm:mt-24 mt-12 sm:space-x-8 sm:space-y-0 space-y-8 text-darkGrey">
              <S>
                Right from the beginning, he was interested in very nerdy
                things; such as alarm systems, and showed a strong interest in
                how things worked. He discovered how things worked - generally
                through brute force, and would sit looking for patterns on
                circuit boards of his newly destroyed things. This interest
                turned to code, where Toby built his first website at 7 years
                old. This vanilla HTML website took him many days to complete,
                and looked terrible; but he was hooked.
              </S>
              <S>
                Toby continued to build, and in September 2021, discovered the
                community that changed his life: Hack Club. In Summer of 2022,
                Toby attended their summer event called Assemble in San
                Francisco. Then, in November of 2022; Toby was hired as a
                Community Engineer at Hack Club, where he worked with an awesome
                team to make the Hack Club community the coolest place to be as
                a teenage programmer. In November 2023, Toby moved on to become
                a Storyteller at Hack Club, where he designs and builds websites
                for Hack Club.
              </S>
            </div>
            <div className="mt-16 grid sm:grid-cols-2 gap-8">
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
                type="Contributer"
                desc="I helped build the SineRider Twitter bot, which tweets out a new SineRider puzzle every day."
                link="https://sinerider.com"
                img={sinerider}
              />
              <Thing
                name="Outernet"
                type="Contributer"
                desc="I played a small part in creating an oasis for teenage hackers in Vermont."
                link="https://outernet.hackclub.com/"
                img={outernet}
              />

              <Thing
                name="Numbers"
                type="Personal"
                desc="A tiny utility that displays the emergency numbers of the country you're in. It's simple, but it's one of my favourites."
                link="https://numbers.tobyb.dev/"
                img={numbers}
              />
              <Thing
                name="ReverseGPT"
                type="Personal"
                desc="A reverse version of ChatGPT that asks YOU the questions. How the tables have turned!"
                link="https://github.com/developedbytoby/reversegpt"
                img={reversegpt}
              />
            </div>
            <div className="sm:space-x-8 sm:space-y-0 space-y-8 md:flex mt-32">
              {((data as Array<any>).slice(0, 4) || []).map((data) => (
                <Entry key={data.id} data={data} />
              ))}
            </div>
            <div className="mt-8">
              {!session ? (
                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    signIn("github");
                  }}
                >
                  Leave an entry
                </Button>
              ) : (
                <form onSubmit={leaveEntry} className="flex space-x-4">
                  <input
                    className="bg-grey p-2 px-4 rounded-xl max-w-sm w-full placeholder-darkGrey outline-none"
                    onChange={(e) => setEntry(e.target.value)}
                    placeholder="Your message..."
                    required
                  />
                  <Button type="submit">
                    {form.state === Form.Loading ? (
                      <P>Signing...</P>
                    ) : (
                      <>Sign</>
                    )}
                  </Button>
                </form>
              )}
            </div>
            <S className="text-darkGrey mt-16">
              Thank you for visiting my website. I hope you enjoy the rest of
              your {message}!<br />
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
