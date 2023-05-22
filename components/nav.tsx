import { P } from "./design/typography";
import Image from "next/image";

import github from "../public/icons/github.svg";
import twitter from "../public/icons/twitter.svg";
import mail from "../public/icons/mail.svg";
import Link from "next/link";
import Np from "./np";

export default function Nav() {
  return (
    <div className="flex justify-center items-center fixed bottom-0 left-0 w-full">
      <div className="bg-grey rounded-xl p-2 my-8 md:space-x-32 space-x-8 opacity-75 backdrop-blur-lg flex justify-between">
        <div className="flex space-x-4 self-center">
          <Np href="https://github.com/developedbytoby">
            <Image src={github} alt="GitHub" />
          </Np>
          <Np href="https://twitter.com/developedbytoby">
            <Image src={twitter} alt="Twitter" />
          </Np>
          <Np href="mailto:hi@tobyb.dev">
            <Image src={mail} alt="Mail" />
          </Np>
        </div>
        <div className="flex space-x-4 self-center">
          <Link href="/">
            <P className="md:text-lg text-sm">Home</P>
          </Link>
          <Link href="/work">
            <P className="md:text-lg text-sm">Work</P>
          </Link>
          <Link href="/projects">
            <P className="md:text-lg text-sm">Projects</P>
          </Link>
          <Link href="/guestbook">
            <P className="md:text-lg text-sm">Guestbook</P>
          </Link>
        </div>
      </div>
    </div>
  );
}
