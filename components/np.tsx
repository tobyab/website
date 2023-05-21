import Link from "next/link";

export default function Np({ children, href }) {
  return (
    <Link href={href} className="underline" target="_blank">
      {children}
    </Link>
  );
}
