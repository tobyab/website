import { H2 } from "../components/design/typography";
import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid place-items-center min-h-screen bg-[#f5f5f5]">
      <div className="max-w-2xl space-y-4 m-12">
        <H2>
          Toby Brown is an inventor in London. He is the founder of a company
          called{" "}
          <Link
            href="https://beem.computer"
            className="underline underline-offset-2"
            target="_blank"
          >
            Beem
          </Link>
          . Their mission is to define how people will be interacting with their
          computers in the future.
        </H2>
        <H2>
          Toby thinks a lot about computer interaction, and how we can make our
          computers more human. He&apos;s spoken about this{" "}
          <Link
            href="https://www.youtube.com/watch?v=dHkD91vYau8"
            className="underline underline-offset-2"
            target="_blank"
          >
            on TV
          </Link>
          , and{" "}
          <Link
            href="https://www.thetimes.com/business-money/entrepreneurs/article/the-16-year-old-swapping-gcses-for-silicon-valley-and-his-1m-start-up-00cptjxqh"
            className="underline underline-offset-2"
            target="_blank"
          >
            in the papers
          </Link>
          .
        </H2>
        <H2>
          Toby&apos;s most active on{" "}
          <Link
            href="https://x.com/developedbytoby"
            className="underline underline-offset-2"
            target="_blank"
          >
            X
          </Link>
          . Here&apos;s his{" "}
          <Link
            href="https://read.cv/tobyab"
            className="underline underline-offset-2"
            target="_blank"
          >
            CV
          </Link>
          . If you want to chat, you can email him at{" "}
          <Link
            href="mailto:toby@beem.computer"
            className="underline underline-offset-2"
            target="_blank"
          >
            toby@beem.computer
          </Link>
        </H2>
      </div>
    </div>
  );
}
