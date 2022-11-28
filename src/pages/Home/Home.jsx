import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import DoorFrontIcon from '@mui/icons-material/DoorFront';
import DoorBackIcon from '@mui/icons-material/DoorBack';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';

const Home = () => {
    const [weatherDoor, setWeatherDoor] = useState(false);
    const [airportDoor, setAirportDoor] = useState(false);
    const navigate = useNavigate();
    return (
        <div className={styles.container}>
            <h1>SELECIONE UMA PÁGINA ABAIXO</h1>
            <div className={styles.pageOptions}>
                <div onClick={() => navigate("/weather")} onMouseEnter={() => setWeatherDoor(true)} onMouseLeave={() => setWeatherDoor(false)}>
                    {
                        weatherDoor ?
                            <>
                                <h2>WEATHER API</h2>
                                <MeetingRoomIcon />

                            </>
                            :
                            <>
                                <h2>WEATHER API</h2>
                                <DoorFrontIcon />
                            </>
                    }

                </div>
                <div onClick={() => navigate("/airport")} onMouseEnter={() => setAirportDoor(true)} onMouseLeave={() => setAirportDoor(false)}>
                    {
                        airportDoor
                            ?
                            <>

                                <h2>AIRPORT API</h2>
                                <MeetingRoomIcon />
                            </>
                            :
                            <>
                                <h2>AIRPORT API</h2>
                                <DoorFrontIcon />
                            </>
                    }
                </div>
            </div>
        </div>
    )
}

export default Home;