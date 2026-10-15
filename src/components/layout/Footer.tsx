import IconArrowLink from "@/assets/icons/IconArrowLink";
import { footerContent } from "@/data/mock/site";

const Footer = ({ full = false }: { full?: boolean }) => {
  const { contactMessage, links } = footerContent;

  return (
    <div
      id="contact"
      className={`py-8 md:py-12 ${
        full
          ? "flex flex-col items-center justify-center gap-4 w-full"
          : "flex justify-between items-start max-w-[700px]"
      }`}
    >
      <p className="text-[26px] max-sm:text-base text-text-primary">{contactMessage}</p>

      <div
        className={`flex flex-wrap ${
          full ? "gap-[8dvw] max-sm:gap-[2dvw]" : "gap-4 justify-around"
        }`}
      >
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 text-text-primary no-underline transition-colors duration-200 hover:text-primary"
          >
            <span className="max-sm:text-xs">{l.label}</span>
            <span className="flex items-center h-3 max-sm:h-2">
              <IconArrowLink />
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Footer;
