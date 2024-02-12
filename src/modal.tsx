import { useParams, useNavigate } from "react-router-dom";
import { users } from "./users.consts";
import './modal.css';

const Modal = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <dialog id="my-dialog" open>
      <h2 className="dialog-title">My Modal Title</h2>
      <p className="dialog-content">
        Greetings, {users.find((user) => user.id === id)?.name}!
      </p>
      <div className="dialog-actions">
        <button
          className="dialog-button secondary"
          onClick={() => navigate("/")}
        >
          Close
        </button>
      </div>
    </dialog>
  );
};

export default Modal;
