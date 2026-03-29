import { GiCheckMark } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { FunctionsCart } from "../../context/cartContext";

const ElouraModal = () => {
  const { modalData, hideModal } = FunctionsCart();
  if (!modalData) return null;
  return (
    <div className="eloura-modal p-4">
      <div className="modal-icon mt-3">
        <GiCheckMark />
      </div>
      <p className="m-0 mt-3">{modalData}</p>
      <span className="close-icon" onClick={hideModal}>
        <FaTimes />
      </span>
      <div className="progress-bar"></div>
    </div>
  );
};

export default ElouraModal;