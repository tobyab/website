import { P } from "./design/typography";
import Image from "next/image";

import github from "../public/icons/github.svg";
import twitter from "../public/icons/twitter.svg";
import mail from "../public/icons/mail.svg";
import Link from "next/link";
import Np from "./np";

export default function Nav() {
  return (
    <div className="fixed z-20 p-8 top-0 w-screen bg-white">
      <div className="flex items-center justify-between mx-auto max-w-4xl">
        <P>Toby Brown</P>
        <div />
        <div className="flex space-x-4">
          <Link href="https://github.com/developedbytoby">GitHub</Link>
          <Link href="https://twitter.com/developedbytoby">Twitter</Link>
        </div>
      </div>
    </div>
  );
}
