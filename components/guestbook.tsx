import { H2, S } from "./design/typography";

export default function Guestbook({ data }: { data: Array<any> }) {
  return (
    <div className="space-y-4">
      {((data as Array<any>) || [])
        .map((data) => <Entry key={data.id} data={data} />)
        .reverse()}
    </div>
  );
}

function Entry({ data }) {
  data.body =
    data.body.length > 130 ? data.body.substring(0, 250) + "..." : data.body;
  return (
    <div className="space-y-2 max-w-xl">
      <H2>{data.body}</H2>
      <S className="text-darkGrey">— {data.created_by}</S>
    </div>
  );
}
