import IconArrowUp from "../../assets/icons/IconArrowUp";
import "./BackToTop.scss";

const STAMP_LABEL = "Back To Top Back To Top ";

interface Props {
  onClick: () => void;
}

const BackToTop = ({ onClick }: Props) => {
  return (
    <a id="quynhptn-back-to-top" onClick={onClick}>
      <span className="quynhptn-back-to-top-icon">
        <span className="quynhptn-stamp quynhptn--init">
          <span className="quynhptn-m-text" data-count={STAMP_LABEL.length}>
            {STAMP_LABEL.split("").map((char, index) => (
              <span key={index} className="quynhptn-m-character">
                {char}
              </span>
            ))}
          </span>
          <span className="quynhptn-m-centred-icon">
            <IconArrowUp />
          </span>
        </span>
      </span>
    </a>
  );
};

export default BackToTop;
