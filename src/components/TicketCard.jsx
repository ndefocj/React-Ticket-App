const TicketCard = ({ ticket, onEdit, onDelete }) => {
  const statusClass = `status-tag status-${ticket.status.toLowerCase()}`;

  return (
    <div className="card-box ticket-card">
      <div className="ticket-header">
        <h3>{ticket.title}</h3>
        <p className="ticket-id">#TKT-00{ticket.id}</p>
      </div>
      <p className="ticket-desc">{ticket.description}</p>
      <div className="ticket-footer">
        <span className={statusClass}>{ticket.status.replace("_", " ")}</span>
        <div className="ticket-actions">
          <a href="#" onClick={() => onEdit(ticket)}>
            Edit
          </a>
          <button onClick={() => onDelete(ticket.id)}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;