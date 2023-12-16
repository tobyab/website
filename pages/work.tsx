import { H1, P, S } from "../components/design/typography";
import Nav from "../components/nav";
import Transition from "../components/transition";
import React from "react";
import Np from "../components/np";

type WorkPageRef = React.ForwardedRef<HTMLDivElement>;

export default function Work(ref: WorkPageRef) {
  return (
    <div className="grid justify-center place-items-center mx-8">
      <Transition ref={ref}>
        <div className="md:flex mt-32 md:space-x-16 space-y-8 md:space-y-0">
          <H1 className="max-w-2xl">
            Work -{" "}
            <span className="text-darkGrey">
              The awesome places that I&apos;ve worked at.
            </span>
          </H1>
          <div className="w-full space-y-4">
            <Widget
              start="2023"
              end=""
              title="Storytelling"
              company="Hack Club"
              link="https://hackclub.com"
            />
            <Widget
              start="2022"
              end="2023"
              title="Community Engineer"
              company="Hack Club"
              link="https://hackclub.com"
            />
            <Widget
              start="2022"
              end=""
              title="Founding Developer"
              company="Aretav"
              link="https://aretav.com"
            />
          </div>
        </div>
      </Transition>
      <Nav />
    </div>
  );
}

function Widget({ start, end, title, link, company }) {
  return (
    <Np href={link} className="flex max-w-2xl justify-between">
      <P className="flex">
        {company} <S className="ml-2">{title}</S>
      </P>
      <S className="font-mono self-center">
        {start}-{end}
      </S>
    </Np>
  );
}
