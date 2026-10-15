import IconArrowUp from "../../assets/icons/IconArrowUp";
import "./BackToTop.scss";

/** Circular stamp label — 24 slots match SCSS nth-child rotations (-90° + 15° step). */
const STAMP_CHARACTERS = ("Back To Top ").repeat(2).split("");

type BackToTopProps = {
  onClick: () => void;
};

export default function BackToTop({ onClick }: BackToTopProps) {
  return (
    <button
      type="button"
      id="quynhptn-back-to-top"
      className="quynhptn-back-to-top-btn"
      onClick={onClick}
      aria-label="Back to top"
    >
      <span className="quynhptn-back-to-top-icon">
        <span
          className="quynhptn-shortcode quynhptn-m quynhptn-stamp quynhptn--appear quynhptn--init"
          data-appearing-delay="0"
        >
          <span className="quynhptn-m-text" data-count={STAMP_CHARACTERS.length}>
            {STAMP_CHARACTERS.map((char, index) => (
              <span key={index} className="quynhptn-m-character" aria-hidden>
                {char}
              </span>
            ))}
          </span>
          <span className="quynhptn-m-centred-icon quynhptn-icon-arrow-up" aria-hidden>
            <IconArrowUp />
          </span>
        </span>
      </span>
    </button>
  );
}
