import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <>
      <div className="circle circle-1"></div>

      <section className="hero">
        <div className="hero-content container">
          <h1>Manage Your Support Tickets Seamlessly</h1>
          <p>
            The all-in-one solution for tracking, managing, and resolving
            customer support tickets across multiple frameworks.
          </p>
          <div className="hero-actions">
            <Link to="/auth" className="btn btn-primary btn-lg">
              Get Started Now
            </Link>
            <Link to="/auth" className="btn btn-secondary btn-lg">
              Login
            </Link>
          </div>
        </div>
        <div className="hero-wave">
          <img
            src="/wave-hero.svg"
            alt="wavy background"
            style={{ width: "100%", display: "block" }}
          />
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2>Why Choose TicketApp?</h2>
          <div className="features-grid">
            <div className="card-box">
              <h3>Multi-Framework</h3>
              <p>
                Built in React, Vue, and Twig to demonstrate full mastery of
                modern web technologies.
              </p>
            </div>
            <div className="card-box">
              <h3>Full CRUD</h3>
              <p>
                Create, Read, Update, and Delete tickets with a seamless,
                validated user interface.
              </p>
            </div>
            <div className="card-box">
              <h3>Secure Auth</h3>
              <p>
                Protected routes and session management keep your data safe and
                secure.
              </p>
            </div>
          </div>
          <div className="circle circle-2"></div>
        </div>
      </section>
    </>
  );
};

export default Landing;