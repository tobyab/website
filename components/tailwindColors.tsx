// I know this file looks weird, but Tailwind really freaks out about custom colors.
// As far as I know, this is the only way you can actually get them to work reliably.

export default function Colors() {
  return (
    <div>
      <p className="text-red">Red</p>
      <p className="text-blue">Blue</p>
      <p className="text-yellow">Yellow</p>
    </div>
  );
}
