import { useEffect, useState } from "react";
import { Form, FormState } from "../utils/states";
import { signIn, useSession } from "next-auth/react";
import { P, S } from "./design/typography";
import { Button } from "./design/button";
import { toast } from "sonner";

export default function Guestbook({ data }: { data: Array<any> }) {
  const [form, setForm] = useState<FormState>({ state: Form.Initial });
  const [entry, setEntry] = useState("");

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setNumEntriesToShow(4);
    } else {
      data && setNumEntriesToShow(data.length);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [numEntriesToShow, setNumEntriesToShow] = useState(4);

  return (
    <div id="guestbook">
      <div className="sm:flex sm:space-x-8 sm:space-y-0 space-y-4 sm:mt-32 mt-16 sm:overflow-x-auto">
        {((data as Array<any>) || []).slice(0, numEntriesToShow).map((data) => (
          <Entry key={data.id} data={data} />
        )).reverse()}
      </div>
      <div className="mt-8 flex space-x-2">
        <S className="text-darkGrey">Guestbook archive</S>
        {data && numEntriesToShow < data.length && (
          <Button onClick={() => setNumEntriesToShow(data.length)}>
            Show all entries
          </Button>
        )}
      </div>
    </div>
  );
}

function Entry({ data }) {
  data.body =
    data.body.length > 130 ? data.body.substring(0, 250) + "..." : data.body;
  return (
    <div className="bg-grey p-4 rounded-xl border justify-center place-items-center flex-shrink-0 grid">
      <div className="space-y-2 max-w-sm">
        <P>{data.body}</P>
        <S className="text-darkGrey">— {data.created_by}</S>
      </div>
    </div>
  );
}
