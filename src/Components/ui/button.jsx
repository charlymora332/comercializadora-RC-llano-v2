export function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`px-6 py-3 flex items-center justify-center rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
