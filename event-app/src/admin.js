import './admin.css';
import './index.css';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import { Modal, Button, Label, TextInput } from "flowbite-react";

function Admin() {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);

  const [events, setEvents] = useState(() => {
    const saved = localStorage.getItem("events");
    return saved ? JSON.parse(saved) : [];
  });

  const [selectedEvent, setSelectedEvent] = useState(null);
  const [form, setForm] = useState({
    name: '',
    description: '',
    date: '',
    location: '',
    quota: ''
  });

  useEffect(() => {
    localStorage.setItem("events",JSON.stringify(events));
  },[events]);

  const openAddModal = () => {
    setSelectedEvent(null);
    setForm({ name: '', description: '', date: '', location: '', quota: '' });
    setOpenModal(true);
  };

  const handleEdit = (ev) => {
    setSelectedEvent(ev);
    setForm(ev);
    setOpenModal(true);
  };

  const handleDelete = (id) => {
    const updated = events.filter((ev) => ev.id !== id);
    setEvents(updated);
  };

  const handleSave = () => {
    if (!form.name || !form.date || !form.location || !form.quota) {
      alert('Harap lengkapi datanya')
      return;
    }
    // ADD EVENT
    if (!selectedEvent) {
      const newEvent = {
        id: Date.now(),
        ...form,
        quota: Number(form.quota)
      }
      setEvents([...events, newEvent]);
    }
    // EDIT EVENT
    else {
      const updated = events.map((ev) =>
        ev.id === selectedEvent.id ? { ...form, id: ev.id, quota: Number(form.quota) } : ev
      );
      setEvents(updated);
    }
    setOpenModal(false);
  };

  return (

    <div className="main_containers">

        <div className="container_button">
          <div className="container_button_left">
            Home
          </div>
          <div className="container_button_right"
              onClick={() => navigate('/user')} >          
            User
          </div>
        </div>

        <div className="container_heading">
          <div className="container_heading_greet">
            Welcome, Admin!
          </div>
          <div className="container_heading_event">
            <div className="container_heading_event_left">
              Event
            </div>
            <div className="container_heading_event_right"
              onClick={openAddModal} >
            Add Event
            </div>
          </div>
        </div>
          
        <div className="container_table">
          <div className="container_table_num">
            #
          </div>
          <div className="container_table_title">
            Event Name
          </div>
          <div className="container_table_title">
            Description
          </div>
          <div className="container_table_title">
            Date
          </div>
          <div className="container_table_title">
            Location
          </div>
          <div className="container_table_title">
            Quota
          </div>
          <div className="container_table_action">
            Action
          </div>
        </div> 

        {/* rows from backend */}
        {events.length === 0 && (
          <div style={{ color: '#ffffff', marginLeft: 94 }}>No events found.</div>
        )}

        {events.map((ev, idx) => (
          <div className="container_table" key={ev.id} >
            <div className="container_table_nums" >
              {idx + 1}
            </div>
            <div className="container_table_data" >
              {ev.name}
            </div>
            <div className="container_table_data" >
              {ev.description}
            </div>
            <div className="container_table_data" >
              {ev.date}
            </div>
            <div className="container_table_data" >
              {ev.location}
            </div>
            <div className="container_table_data" >
              {ev.quota}
            </div>
            <div className="container_table_btn" style={{ display: 'flex', gap: 8 }}>
              <button className="btn_save" onClick={() => handleEdit(ev)}>Edit</button>
              <button className="btn_cancel" onClick={() => handleDelete(ev.id)}>Delete</button>
            </div>
          </div>
        ))}

        {/* MODAL*/}
      {openModal && (
        <div className="modal-backdrop">
          <div className="modal-content">
            <h2 style={{ marginBottom: 12 }}>
              {selectedEvent ? 'Edit Event' : 'Add New Event'}
            </h2>

            <div className="modal-field">
              <label>Event Name</label>
              <input
                className="modal-input"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Masukkan nama event"
              />
            </div>

            <div className="modal-field">
              <label>Description</label>
              <input
                className="modal-input"
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
                placeholder="Masukkan deskripsi"
              />
            </div>

            <div className="modal-field">
              <label>Date</label>
              <input
                className="modal-input"
                type="date"
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
              />
            </div>

            <div className="modal-field">
              <label>Location</label>
              <input
                className="modal-input"
                value={form.location}
                onChange={(e) => setForm({ ...form, location: e.target.value })}
                placeholder="Masukkan lokasi"
              />
            </div>

            <div className="modal-field">
              <label>Quota</label>
              <input
                className="modal-input"
                type="number"
                value={form.quota}
                onChange={(e) => setForm({ ...form, quota: e.target.value })}
                placeholder="quota"
              />
            </div>

            <div style={{ display: 'flex', gap: 8, marginTop: 16 }}>
              <button className="btn_save" onClick={handleSave}>
                Save
              </button>
              <button
                className="btn_cancel"
                onClick={() => setOpenModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default Admin;
