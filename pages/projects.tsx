import { H1, P, S } from "../components/design/typography";
import Nav from "../components/nav";
import Transition from "../components/transition";
import React from "react";
import Np from "../components/np";

type ProjectsPageRef = React.ForwardedRef<HTMLDivElement>;

export default function ProjectsPage(ref: ProjectsPageRef) {
  return (
    <div className="grid justify-center place-items-center mx-8">
      <Transition ref={ref}>
        <div className="md:flex mt-32 md:space-x-16 space-y-8 md:space-y-0">
          <H1 className="max-w-2xl">
            Projects -{" "}
            <span className="text-darkGrey">
              Here&apos;s some things that I&apos;ve built.
            </span>
          </H1>
          <div className="w-full space-y-4">
            <Widget
              creationDate="2023"
              name="Numbers"
              link="https://numbers.tobyb.dev/"
            />
            <Widget
              creationDate="2023"
              name="ReverseGPT"
              link="https://github.com/developedbytoby/reversegpt"
            />
            <Widget
              creationDate="2023"
              name="SineRider's Twitter Bot"
              link="https://twitter.com/SineRiderBot"
            />
            <Widget
              creationDate="2023"
              name="Personal Website"
              link="https://github.com/developedbytoby/website"
            />
            <Widget
              creationDate="2022"
              name="Conifer"
              link="https://conifer.tobyb.dev"
            />
            <Widget
              creationDate="2022"
              name="Tilde"
              link="https://github.com/developedbytoby/tilde"
            />
            <Widget
              creationDate="2022"
              name="Grooovy"
              link="https://github.com/developedbytoby/grooovy"
            />
            <Widget
              creationDate="2021"
              name="Pluto"
              link="https://github.com/developedbytoby/pluto"
            />
          </div>
        </div>
      </Transition>
      <Nav />
    </div>
  );
}

function Widget({ creationDate, name, link }) {
  return (
    <Np href={link} className="flex max-w-2xl justify-between">
      <P>{name}</P>
      <S className="font-mono self-center">{creationDate}</S>
    </Np>
  );
}
