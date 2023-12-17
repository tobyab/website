import Link from "next/link";

export default function Np({
  children,
  href,
  className,
  dataTooltipId,
  dataTooltipContent,
}: any) {
  return (
    <Link
      href={href}
      className={className}
      target="_blank"
      data-tooltip-id={dataTooltipId}
      data-tooltip-content={dataTooltipContent}
    >
      {children}
    </Link>
  );
}
