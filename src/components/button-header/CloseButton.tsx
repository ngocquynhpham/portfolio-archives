import "./ButtonMenu.scss";
const CloseButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <a
      onClick={onClick}
      className="cursor-pointer"
      id="close-icon"
      title="Close-Menu"
    >
      <span className="line line-1"></span>
      <span className="line line-2"></span>
    </a>
  );
};

export default CloseButton;
