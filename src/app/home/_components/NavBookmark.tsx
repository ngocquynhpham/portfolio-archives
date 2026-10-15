export default function NavBookmark({ active }: { active: boolean }) {
  return (
    <span
      className={`hidden md:block w-1.5 h-3 bg-text-black shrink-0 transition-all duration-300 ${
        active ? "opacity-100 scale-100" : "opacity-0 scale-75"
      }`}
      aria-hidden
    />
  );
}
