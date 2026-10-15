import type { ReactNode } from "react";

type ModalWrapProps = {
  id: string;
  active: boolean;
  onClose: () => void;
  children: ReactNode;
};

export default function ModalWrap({
  id,
  active,
  onClose,
  children,
}: ModalWrapProps) {
  return (
    <div
      id={id}
      className={`modal-wrap${active ? " active" : ""}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="presentation"
    >
      <div className="modal-inner">{children}</div>
    </div>
  );
}
