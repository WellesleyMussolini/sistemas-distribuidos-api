import React from "react";
import styles from "./styles.module.css";
import CloseIcon from '@mui/icons-material/Close';

const Modal = ({
    handleCloseModal,
    airportName,
    handleAirportName,
    city,
    handleCity,
    isoCountryCode,
    handleIsoCountryCode,
    iataCode,
    handleIataCode,
    handleSubmit,
    handleEdit,
    submitForm,
    editForm,
    longitude,
    latitude,
    height,
    handleLatitude,
    handleLongitude,
    handleHeight

}) => {
    return (
        <>
            {
                submitForm &&
                <div className={styles.container}>
                    <div className={styles.close} onClick={handleCloseModal}>
                        <CloseIcon />
                    </div>
                    <div className={styles.wrapper}>
                        <form onSubmit={handleSubmit}>
                            <p>NOME</p>
                            <input type="text"
                                onChange={handleAirportName}
                                value={airportName}
                            />
                            <p>CIDADE</p>
                            <input type="text"
                                onChange={handleCity}
                                value={city}
                            />
                            <p>CÓDIGO IATA</p>
                            <input type="text"
                                onChange={handleIataCode}
                                value={iataCode}
                                maxLength={3}
                            />
                            <p>CÓDIGO ISO</p>
                            <input type="text"
                                onChange={handleIsoCountryCode}
                                value={isoCountryCode}
                            />
                            <p>LONGITUDE</p>
                            <input type="number"
                                onChange={handleLongitude}
                                value={longitude}
                            />
                            <p>ALTITUDE</p>
                            <input type="number"
                                onChange={handleHeight}
                                value={height}
                            />
                            <p>LATITUDE</p>
                            <input type="number"
                                onChange={handleLatitude}
                                value={latitude}
                            />
                            <button type="submit">ENVIAR</button>
                        </form>
                    </div>
                </div >
            }
            {
                editForm &&
                <div className={styles.container}>
                    <div className={styles.close} onClick={handleCloseModal}>
                        <CloseIcon />
                    </div>
                    <div className={styles.wrapper}>
                        <form onSubmit={handleEdit}>
                            <p>Nome</p>
                            <input type="text"
                                onChange={handleAirportName}
                                value={airportName}
                            />
                            <p>CIDADE</p>
                            <input type="text"
                                onChange={handleCity}
                                value={city}
                            />
                            <p>CÓDIGO IATA</p>
                            <input type="text"
                                onChange={handleIataCode}
                                value={iataCode}
                            />
                            <p>CÓDIGO ISO</p>
                            <input type="text"
                                onChange={handleIsoCountryCode}
                                value={isoCountryCode}
                            />
                            <button type="submit"  disabled={!airportName || !city || !iataCode || !isoCountryCode}>ENVIAR</button>
                        </form>
                    </div>
                </div>
            }
        </>
    )
};

export default Modal;