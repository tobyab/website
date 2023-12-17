import { P } from "./design/typography";
import Image from "next/image";
import { Tooltip } from "react-tooltip";
import Np from "./np";

import github from "../public/icons/github.svg";
import x from "../public/icons/x.svg";
import cv from "../public/icons/cv.svg";
import mail from "../public/icons/mail.svg";

export default function Nav() {
  return (
    <div className="fixed z-20 p-8 top-0 w-screen bg-white">
      <Tooltip
        id="mail"
        style={{
          backgroundColor: "#000",
          color: "#fff",
          borderRadius: "12px",
          paddingLeft: "8px",
          paddingRight: "8px",
          paddingTop: "4px",
          paddingBottom: "4px",
        }}
      />
      <Tooltip
        id="gh"
        style={{
          backgroundColor: "#000",
          color: "#fff",
          borderRadius: "12px",
          paddingLeft: "8px",
          paddingRight: "8px",
          paddingTop: "4px",
          paddingBottom: "4px",
        }}
      />
      <Tooltip
        id="twitter"
        style={{
          backgroundColor: "#000",
          color: "#fff",
          borderRadius: "12px",
          paddingLeft: "8px",
          paddingRight: "8px",
          paddingTop: "4px",
          paddingBottom: "4px",
        }}
      />
      <Tooltip
        id="cv"
        style={{
          backgroundColor: "#000",
          color: "#fff",
          borderRadius: "12px",
          paddingLeft: "8px",
          paddingRight: "8px",
          paddingTop: "4px",
          paddingBottom: "4px",
        }}
      />
      <div className="flex items-center justify-between mx-auto max-w-4xl">
        <P>Toby Brown</P>
        <div />
        <div className="flex space-x-3 justify-center place-items-center">
          <Np
            href="mailto:hi@tobyb.dev"
            dataTooltipId="mail"
            dataTooltipContent="Email me"
          >
            <Image src={mail} alt="Email" height={24} width={24} />
          </Np>
          <Np
            href="https://github.com/developedbytoby"
            dataTooltipId="gh"
            dataTooltipContent="@developedbytoby"
          >
            <Image src={github} alt="GitHub" height={24} width={24} />
          </Np>
          <Np
            href="https://twitter.com/developedbytoby"
            dataTooltipId="twitter"
            dataTooltipContent="@developedbytoby"
          >
            <Image src={x} alt="X - formerly Twitter" height={30} width={30} />
          </Np>
          <Np
            href="https://read.cv/tobyab"
            dataTooltipId="cv"
            dataTooltipContent="CV"
          >
            <Image src={cv} alt="X - formerly Twitter" height={28} width={28} />
          </Np>
        </div>
      </div>
    </div>
  );
}
