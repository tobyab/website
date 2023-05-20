import { P } from "./design/typography";
import Image from "next/image";

import github from "../public/icons/github.svg";
import twitter from "../public/icons/twitter.svg";
import mail from "../public/icons/mail.svg";
import Link from "next/link";

export default function Nav() {
  return (
    <div className="grid justify-center place-items-center">
      <div className="bg-grey rounded-xl p-2 m-8 w-1/3 fixed bottom-0 opacity-75 bg-blur-lg flex justify-between">
        <div className="flex space-x-4">
          <Image src={github} alt="GitHub icon" />
          <Image src={twitter} alt="Twitter icon" />
          <Image src={mail} alt="Mail icon" />
        </div>
        <div className="flex space-x-4">
          <Link href="/">
            <P>Home</P>
          </Link>
          <Link href="/work">
            <P>Work</P>
          </Link>
          <Link href="/projects">
            <P>Projects</P>
          </Link>
          <Link href="/guestbook">
            <P>Guestbook</P>
          </Link>
        </div>
      </div>
    </div>
  );
}
