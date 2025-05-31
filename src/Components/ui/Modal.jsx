import { forwardRef, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";

const Modal = forwardRef(function Modal({ children, isOpen, onClose }, ref) {
  const dialog = useRef();

  useEffect(() => {
    if (isOpen) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [isOpen]);

  const handleBackdropClick = (e) => {
    if (e.target === dialog.current) {
      onClose();
    }
  };

  return createPortal(
    <dialog
      ref={(node) => {
        dialog.current = node;
        if (typeof ref === "function") ref(node);
        else if (ref) ref.current = node;
      }}
      className="w-min-[32.5rem] h-min-[32rem] w-max-[59rem] rounded-3xl backdrop:bg-gray-900/30 backdrop:backdrop-blur-sm shadow-md p-10
      flex flex-col items-stretch justify-between"
      style={{
        background: "var(--background-color)",
      }}
      onClick={handleBackdropClick}
    >
      {children}
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
