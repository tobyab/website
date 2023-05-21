export function Button({ children, onClick, className, type }: any) {
  return (
    <button
      className={`bg-gradient-to-t from-gray-50 to-white border-2 py-1 px-4 rounded-lg hover:bg-gradient-to-t hover:from-gray-50 hover:to-gray-50 ${className}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
