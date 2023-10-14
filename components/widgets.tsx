export default function Widget({
  children,
  className,
}: {
  children: any;
  className?: string;
}) {
  return (
    <div className={`bg-grey p-6 m-4 rounded-xl ${className}`}>{children}</div>
  );
}
