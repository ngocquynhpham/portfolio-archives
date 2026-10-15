export default function AboutSection() {
  return (
    <section
      id="about"
      className="grid grid-cols-1 md:grid-cols-2 border-b border-border-gray"
    >
      <div className="p-8 md:p-20 border-r border-border-gray border-b md:border-b-0 bg-white">
        <h2 className="text-sm font-mono uppercase mb-8 tracking-widest text-accent-gray">
          The Pragmatic Approach
        </h2>
        <div className="space-y-6 text-lg leading-relaxed font-light">
          <p>
            With over 4 years of hands-on experience in Frontend Development, I
            am currently transitioning into a{" "}
            <span className="font-serif italic text-xl">
              Product Owner and Fullstack
            </span>{" "}
            role.
          </p>
          <p>
            My professional philosophy is grounded in stoicism and minimalism:
            delivering solutions that are{" "}
            <strong>&apos;Simple, Beautiful, and Smooth&apos;</strong>. I do not
            merely write code; I architect user-centric products.
          </p>
          <p>
            Currently, I am mastering Python and FastAPI to build robust backend
            systems, while developing the MVP for a practical business—Lean Cafe
            Take-away.
          </p>
        </div>
      </div>
      <div className="p-8 md:p-20 flex flex-col justify-center">
        <blockquote className="text-3xl md:text-4xl leading-snug font-serif italic">
          &quot;I architect digital products that are simple on the surface, but
          robust under the hood.&quot;
        </blockquote>
      </div>
    </section>
  );
}
