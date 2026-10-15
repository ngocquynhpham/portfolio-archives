type TagProps = {
  children: string;
};

/** Small uppercase label (e.g. skills on the experience section). */
export default function Tag({ children }: TagProps) {
  return (
    <span className="px-3 py-1 bg-primary border border-primary rounded text-xs font-bold uppercase text-white shadow-sm shadow-primary/25">
      {children}
    </span>
  );
}
