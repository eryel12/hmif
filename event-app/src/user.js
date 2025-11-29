import './user.css';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState} from 'react';

function User() {
    const navigate = useNavigate();
    const [events, setEvents] = useState([]);

    useEffect (() => {
        const saved = localStorage.getItem("events");
        if (saved) setEvents(JSON.parse(saved));
    }, []);

    const handleDaftar = (id) => {
        const updated = events.map((ev) =>
            ev.id === id && ev.quota > 0
                ?{ ...ev, quota: ev.quota - 1 }
                : ev
        );

        setEvents(updated);
        localStorage.setItem("events", JSON.stringify(updated))
    }

    return (
        <div className="main_container">

            <div className="container_button">
                <div className="container_button_left">
                Home
                </div>
                <div className="container_button_right"
                onClick={() => navigate('/admin')}>          
                Admin
                </div> 
            </div>

            <div className="container_heading">
                Welcome, User!
            </div>

            <div className="container_all_card">

                {events.map(ev => (   
                    <div className="container_card">
                        <div className="container_card_name">
                            {ev.name}
                        </div>
                        <div className="container_card_desc">
                            {ev.description}
                        </div>
                        <div className="container_card_date">
                            Date : {ev.date}
                        </div>
                        <div className="container_card_location">
                            Location : {ev.location}
                        </div>
                        <div className="container_card_quota">
                            <div className="container_card_quota_left">
                                Quota Left
                            </div>
                            <div className="container_card_quota_num">
                                {ev.quota}
                            </div>
                        </div>
                        <div className="container_card_press">
                            <div className="container_card_aplly"
                                style={{ opacity: ev.quota === 0 ? 0.5 : 1}} 
                                onClick={() => ev.quota > 0 && handleDaftar(ev.id)}
                            >
                                {ev.quota === 0 ? "Habis" : "Daftar"}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default User;