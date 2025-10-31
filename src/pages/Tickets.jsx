import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import TicketCard from "../components/TicketCard";
import TicketFormModal from "../components/TicketFormModal";

const Tickets = () => {
  const [tickets, setTickets] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTicket, setCurrentTicket] = useState(null); 
  const [loading, setLoading] = useState(true);

  const fetchTickets = async () => {
    setLoading(true);
    try {
      const response = await fetch("multi-framework-ticket-web-app-kam7.vercel.app/tickets");
      if (!response.ok) throw new Error("Failed to fetch");
      const data = await response.json();
      setTickets(data);
    } catch (error) {
      console.error("Failed to load tickets:", error);
      toast.error("Failed to load tickets.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  const handleOpenCreateModal = () => {
    setCurrentTicket(null);
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (ticket) => {
    setCurrentTicket(ticket);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentTicket(null);
  };

  const handleSaveTicket = async (ticketData) => {
    const isEditing = !!currentTicket;
    const url = isEditing
      ? `multi-framework-ticket-web-app-kam7.vercel.app/tickets/${currentTicket.id}`
      : "multi-framework-ticket-web-app-kam7.vercel.app/tickets";
    const method = isEditing ? "PUT" : "POST";

    try {
      const response = await fetch(url, {
        method: method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(ticketData),
      });
      if (!response.ok) throw new Error("Failed to save ticket");
      
      toast.success(
        `Ticket ${isEditing ? "updated" : "created"} successfully!`
      );
      fetchTickets(); 
      handleCloseModal();
    } catch (error) {
      console.error("Failed to save ticket:", error);
      toast.error("Failed to save ticket.");
    }
  };

  const handleDeleteTicket = async (ticketId) => {
    if (!window.confirm("Are you sure you want to delete this ticket?")) return;

    try {
      const response = await fetch(
        `multi-framework-ticket-web-app-kam7.vercel.app/tickets/${ticketId}`,
        { method: "DELETE" }
      );
      if (!response.ok) throw new Error("Failed to delete ticket");
      
      toast.success("Ticket deleted successfully!");
      fetchTickets();
    } catch (error) {
      console.error("Failed to delete ticket:", error);
      toast.error("Failed to delete ticket.");
    }
  };

  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Manage Tickets</h1>
          <button onClick={handleOpenCreateModal} className="btn btn-primary">
            Create New Ticket
          </button>
        </div>
      </div>

      <div className="container">
        {loading ? (
          <p>Loading tickets...</p>
        ) : (
          <div className="ticket-list">
            {tickets.map((ticket) => (
              <TicketCard
                key={ticket.id}
                ticket={ticket}
                onEdit={handleOpenEditModal}
                onDelete={handleDeleteTicket}
              />
            ))}
          </div>
        )}
      </div>

      {isModalOpen && (
        <TicketFormModal
          onClose={handleCloseModal}
          onSave={handleSaveTicket}
          ticket={currentTicket}
        />
      )}
    </>
  );
};

export default Tickets;