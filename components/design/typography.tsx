export function H2({ className, children }: any) {
  return (
    <h2 className={`text-[1.625rem] font-light ${className}`}>{children}</h2>
  );
}

export function S({ className, children }: any) {
  return <p className={`${className}`}>{children}</p>;
}
