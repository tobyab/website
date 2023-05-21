import Link from "next/link";

export default function Np({ children, href, className }: any) {
  return (
    <Link href={href} className={`${className}`} target="_blank">
      {children}
    </Link>
  );
}
