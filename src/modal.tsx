import { useParams, useNavigate, Outlet } from "react-router-dom";
import { users } from "./users.consts";
import "./modal.css";

const Modal = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <dialog id="my-dialog" open>
      <h2 className="dialog-title">
        My Modal Title: {users.find((user) => user.id === id)?.name}
      </h2>
      <div className="dialog-tabs">
        <button 
            className="tab active" 
            data-tab="tab1"
            onClick={() => navigate(`/users/${id}`)}
        >
          Tab 1
        </button>
        <button 
            className="tab" 
            data-tab="tab2"
            onClick={() => navigate(`/users/${id}/other`)}
        >
          Tab 2
        </button>
      </div>
      <div className="dialog-content-container">
        <div className="dialog-content active">
          <Outlet/>
        </div>
      </div>
      <div className="dialog-actions">
        <button 
            className="dialog-button primary"
            onClick={() => navigate('/')}
            >
            Close
        </button>
      </div>
    </dialog>
  );
};

export default Modal;
