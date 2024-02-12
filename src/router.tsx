import { Route, Routes, HashRouter as Router } from "react-router-dom";
import App from "./App";
import Messages from "./messages";
import Tasks from "./tasks";
import Modal from './modal';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="users/:id" element={<Modal />} />
          <Route path="messages" element={<Messages />} />
          <Route path="tasks" element={<Tasks />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
