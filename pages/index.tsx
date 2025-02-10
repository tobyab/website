import { H2 } from "../components/design/typography";
import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid place-items-center min-h-screen bg-[#f5f5f5]">
      <div className="max-w-2xl space-y-4 m-12">
        <H2>
          Toby Brown is an inventor in London. He is the founder of a company
          called <Np href="https://beem.computer">Beem</Np>. Their mission is to
          define how people will be interacting with their computers in the
          future.
        </H2>
        <H2>
          Toby thinks a lot about computer interaction, and how we can make our
          computers more human. He&apos;s spoken about this{" "}
          <Np href="https://www.youtube.com/watch?v=dHkD91vYau8">on TV</Np>, and{" "}
          <Np href="https://www.thetimes.com/business-money/entrepreneurs/article/the-16-year-old-swapping-gcses-for-silicon-valley-and-his-1m-start-up-00cptjxqh">
            in the papers
          </Np>
          .
        </H2>
        <H2>
          Toby&apos;s most active on{" "}
          <Np href="https://x.com/developedbytoby">X</Np>. Here&apos;s his{" "}
          <Np href="https://read.cv/tobyab">CV</Np>. If you want to chat, you
          can email him at{" "}
          <Np href="mailto:toby@beem.computer">toby@beem.computer</Np>
        </H2>
      </div>
    </div>
  );
}

function Np({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="underline underline-offset-2" target="_blank">
      {children}
    </Link>
  );
}
