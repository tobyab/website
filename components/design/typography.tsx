export function H1({ className, children }: any) {
  return <h1 className={`text-3xl font-medium ${className}`}>{children}</h1>;
}

export function P({ className, children }: any) {
  return <p className={`text-lg ${className}`}>{children}</p>;
}

export function S({ className, children }: any) {
  return <p className={`text-darkGrey ${className}`}>{children}</p>;
}
