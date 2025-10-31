import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Dashboard = () => {
  const [stats, setStats] = useState({ total: 0, open: 0, resolved: 0 });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch("multi-framework-ticket-web-app-kam7.vercel.app/tickets");
        if (!response.ok) throw new Error("Failed to fetch tickets");
        const tickets = await response.json();

        setStats({
          total: tickets.length,
          open: tickets.filter((t) => t.status === "open").length,
          resolved: tickets.filter((t) => t.status === "closed").length,
        });
      } catch (error) {
        console.error("Failed to load dashboard stats:", error);
        toast.error("Failed to load dashboard stats.");
      }
    };
    fetchStats();
  }, []);

  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Dashboard</h1>
          <Link to="/tickets" className="btn btn-primary">
            Go to Tickets
          </Link>
        </div>
      </div>

      <div className="container">
        <div className="stats-grid">
          <div className="card-box stat-card">
            <h3>Total Tickets</h3>
            <p className="stat-number">{stats.total}</p>
          </div>
          <div className="card-box stat-card">
            <h3>Open Tickets</h3>
            <p className="stat-number">{stats.open}</p>
          </div>
          <div className="card-box stat-card">
            <h3>Resolved Tickets</h3>
            <p className="stat-number">{stats.resolved}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;