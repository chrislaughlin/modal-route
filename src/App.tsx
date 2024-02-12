import "./App.css";
import { Link, Outlet } from "react-router-dom";
import { users } from './users.consts';

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  );
}

export default App;
