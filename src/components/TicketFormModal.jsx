import { useState, useEffect } from "react";

const TicketFormModal = ({ onClose, onSave, ticket }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "open",
  });
  const [errors, setErrors] = useState({});

  const isEditing = !!ticket;

  useEffect(() => {
    if (isEditing) {
      setFormData(ticket);
    }
  }, [ticket, isEditing]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    if (errors[id]) {
      setErrors({ ...errors, [id]: null });
    }
  };

  const validate = () => {
    const newErrors = {};
    const validStatus = ["open", "in_progress", "closed"];

    if (!formData.title.trim()) {
      newErrors.title = "Title is mandatory.";
    }
    if (!formData.status) {
      newErrors.status = "Status is mandatory.";
    } else if (!validStatus.includes(formData.status)) {
      newErrors.status = "Invalid status value.";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    onSave(formData);
  };

  return (
    <div className="modal-overlay" style={{ visibility: "visible", opacity: 1 }}>
      <div className="modal-content">
        <div className="card-box">
          <div className="modal-header">
            <h2>{isEditing ? "Edit Ticket" : "Create New Ticket"}</h2>
            <button onClick={onClose} className="modal-close">
              &times;
            </button>
          </div>
          <form className="modal-form" onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                value={formData.title}
                onChange={handleChange}
                required
              />
              {errors.title && <p className="error-message">{errors.title}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                rows="4"
                value={formData.description}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="status">Status</label>
              <select
                id="status"
                value={formData.status}
                onChange={handleChange}
                required
              >
                <option value="open">Open</option>
                <option value="in_progress">In Progress</option>
                <option value="closed">Closed</option>
              </select>
              {errors.status && (
                <p className="error-message">{errors.status}</p>
              )}
            </div>
            <button type="submit" className="btn btn-primary">
              Save Ticket
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TicketFormModal;