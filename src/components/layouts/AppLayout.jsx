import { Outlet, Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { Footer } from "./PublicLayout";

const AppHeader = () => {
  const { logout } = useAuth();

  return (
    <header className="main-header">
      <div className="container">
        <Link to="/dashboard" className="logo">
          TicketApp
        </Link>
        <nav className="main-nav">
          <ul>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/tickets">Manage Tickets</Link>
            </li>
            <li>
              <button onClick={logout} className="btn btn-secondary">
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

const AppLayout = () => (
  <>
    <AppHeader />
    <main>
      <Outlet />
    </main>
    <Footer />
  </>
);

export default AppLayout;