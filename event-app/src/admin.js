import logo from './logo.svg';
import './admin.css';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  return (

    
    <div className="container">

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
            <div className="container_heading_event_right">
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

        

        

        <div className="container_edit">
        
        </div>

        <div className="container_delete">

        </div>
    </div>
  );
}

export default App;
