import { H2 } from "../components/typography";
import Guestbook from "../components/guestbook";
import { entries } from "../utils/entries";

export default function GuestbookArchive() {
  return (
    <div className="h-screen grid place-items-center mt-64">
      <div className="flex space-x-16">
        <H2 className="text-darkGrey">Guestbook Archive</H2>
        <Guestbook data={entries} />
      </div>
    </div>
  );
}
