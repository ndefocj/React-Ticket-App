import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

const PublicHeader = () => (
  <header className="main-header">
    <div className="container">
      <Link to="/" className="logo">
        TicketApp
      </Link>
      <nav className="main-nav">
        <ul>
          <li>
            <Link to="/auth" className="btn btn-secondary">
              Login
            </Link>
          </li>
          <li>
            <Link to="/auth" className="btn btn-primary">
              Get Started
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export const Footer = () => (
  <footer className="main-footer">
    <div className="container">
      <p>&copy; 2025 TicketApp. HNG Stage 2 Task.</p>
    </div>
  </footer>
);

const PublicLayout = () => (
  <>
    <PublicHeader />
    <main>
      <Outlet />
    </main>
    <Footer />
  </>
);

export default PublicLayout;