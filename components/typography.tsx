export function H2({ className, children }: any) {
  return (
    <h2 className={`text-[1.325rem] font-light text-[#333] ${className}`}>
      {children}
    </h2>
  );
}

export function S({ className, children }: any) {
  return <p className={`${className}`}>{children}</p>;
}
