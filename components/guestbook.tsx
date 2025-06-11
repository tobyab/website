import { H2, S } from "./typography";

export default function Guestbook({ data }: { data: Array<any> }) {
  return (
    <div className="space-y-4">
      {data.map((data) => <Entry key={data.id} data={data} />).reverse()}
    </div>
  );
}

function Entry({ data }: { data: { body: string; created_by: Date } }) {
  const body =
    data.body.length > 130 ? data.body.substring(0, 250) + "..." : data.body;

  return (
    <div className="space-y-2 max-w-xl">
      <H2>{body}</H2>
      <S className="text-darkGrey">— {data.created_by}</S>
    </div>
  );
}
