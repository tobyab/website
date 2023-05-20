import { H1, P, S } from "../components/design/typography";
import Nav from "../components/nav";
import Link from "next/link";
import Transition from "../components/transition";
import React from "react";

type WorkPageRef = React.ForwardedRef<HTMLDivElement>;

export default function Work(ref: WorkPageRef) {
  return (
    <div className="grid justify-center place-items-center">
      <Transition ref={ref}>
        <div className="flex mt-32 space-x-16">
          <H1 className="max-w-2xl">
            Work -{" "}
            <span className="text-darkGrey">
              The awesome places that I&apos;ve worked at!
            </span>
          </H1>
          <div className="w-full space-y-4">
            <Widget
              start="2022"
              end=""
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
    <Link href={link} className="flex max-w-2xl justify-between">
      <P className="flex">
        {company} <S className="ml-2">{title}</S>
      </P>
      <S className="font-mono self-center">
        {start}-{end}
      </S>
    </Link>
  );
}
