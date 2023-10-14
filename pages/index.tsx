import { H1, P } from "../components/design/typography";
import Np from "../components/np";
import Image from "next/image";
import { age } from "../utils/time";
import Nav from "../components/nav";
import Transition from "../components/transition";
import React from "react";
import Widget from "../components/widgets";

import checkin from "../public/checkin.png";
import social from "../public/social.png";

type IndexPageRef = React.ForwardedRef<HTMLDivElement>;

export default function Home(ref: IndexPageRef) {
  return (
    <div>
      <Transition ref={ref}>
        <Nav />
        <div className="justify-center place-items-center grid">
          <div className="grid max-w-7xl m-32">
            <div className="flex">
              <div>
                <Widget className="max-w-md">
                  <H1>
                    Toby Brown
                    <span className="text-[#B0B0B0]"> — big computer nerd</span>
                  </H1>
                  <div className="mt-8 space-y-4">
                    <P>
                      Hey, I’m Toby. I’m a full stack web developer and
                      interface designer from London.
                    </P>
                    <P>
                      Right now, I’m REDACTED at Hack Club. Oh, I’m also
                      building this tool called Aretav on the side as well.
                    </P>
                    <P>
                      I’ve been writin’ code & designing for a while now. I also
                      happen to be running out of things to say, so please enjoy
                      this final sentence.
                    </P>
                  </div>
                </Widget>
                <Widget className="pb-0">
                  <Image
                    src={checkin}
                    alt="Check in"
                    height={700}
                    width={700}
                  />
                </Widget>
              </div>
              <div>
                <Widget className="w-full h-max">
                  <H1>
                    Toby Brown
                    <span className="text-[#B0B0B0]"> — big computer nerd</span>
                  </H1>
                  <div className="mt-8 space-y-4">
                    <P>
                      Hey, I’m Toby. I’m a full stack web developer and
                      interface designer from London.
                    </P>
                    <P>
                      Right now, I’m REDACTED at Hack Club. Oh, I’m also
                      building this tool called Aretav on the side as well.
                    </P>
                    <P>
                      I’ve been writin’ code & designing for a while now. I also
                      happen to be running out of things to say, so please enjoy
                      this final sentence.
                    </P>
                  </div>
                </Widget>
                <Widget className="w-max">
                  <Image src={social} alt="Concept social app" height={700} />
                </Widget>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  );
}
