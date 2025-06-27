import { H2 } from "../components/typography";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div className="grid place-items-center min-h-screen bg-[#f5f5f5]">
      <div className="max-w-lg space-y-4 m-12 text-center">
        <H2>Toby Brown is a founder in San Francisco.</H2>
        <H2>
          He is the founder of a company called{" "}
          <Np href="https://beem.computer">Beem</Np>. Their mission is to define
          how people will be interacting with their computers in the future.
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
          Toby&apos;s most active on <Np href="https://x.com/tobyab_">X</Np>. If
          you want to chat, you can email him at{" "}
          <Np href="mailto:toby@beem.computer">toby@beem.computer</Np>
        </H2>
      </div>
    </div>
  );
}

function Np({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="hover:text-opacity-75 transition-opacity duration-200 underline"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </Link>
  );
}
