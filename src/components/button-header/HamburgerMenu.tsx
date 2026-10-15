import "./ButtonMenu.scss";
const HamburgerMenu = ({
  onClick,
}: {
  onClick: () => void;
}) => {
  return (
    <a
      onClick={onClick}
      className="cursor-pointer"
      id="hamburger-icon"
      title="Open-Menu"
    >
      <span className="line line-1"></span>
      <span className="line line-2"></span>
      <span className="line line-3"></span>
    </a>
  );
};

export default HamburgerMenu;
