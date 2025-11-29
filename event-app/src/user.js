import './user.css';
import { useNavigate } from 'react-router-dom';

function User() {
    return (

        <div className="main_container">

            <div className="container_button">
                <div className="container_button_left">
                Home
                </div>
                <div className="container_button_right">          
                Admin
                </div> 
            </div>

            <div className="container_heading">
                Welcome, User!
            </div>

            <div className="container_card">
                <div className="container_card_name">
                    PPIF
                </div>
                <div className="container_card_desc">
                    Orientasi Mahasiswa Baru
                </div>
                <div className="container_card_date">
                    Date : 26/11/2025
                </div>
                <div className="container_card_location">
                    Location : Lecture Hall
                </div>
                <div className="container_card_quota">
                    <div className="container_card_quota_left">
                        Quota Left
                    </div>
                    <div className="container_card_quota_num">
                        300
                    </div>
                </div>
                <div className="container_card_press">
                    <div className="container_card_aplly">
                        Daftar
                    </div>
                </div>
            </div>

        </div>
    );
}
export default User;