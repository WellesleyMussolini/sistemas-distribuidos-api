import React from "react";
import styles from "./styles.module.css";

const Modal = ({
    handleCloseModal,
    stationName,
    handleStationName,
    longitude,
    handleLongitude,
    height,
    handleHeight,
    latitude,
    handleLatitude,
    uf,
    handleUf,
    regionCode,
    handleRegionCode,
    wmoCode,
    handleWmoCode,
    foundationDate,
    handleFoundationDate,
    handleSubmit,
    handleEdit,
    submitForm,
    editForm,
}) => {
    return (
        <>
            {
                submitForm &&
                <div className={styles.container}>
                    <div className={styles.close} onClick={handleCloseModal}>X</div>
                    <div className={styles.wrapper}>
                        <form onSubmit={handleSubmit}>
                            <p>Nome</p>
                            <input type="text"
                                onChange={handleStationName}
                                value={stationName}
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
                            <p>UF</p>
                            <input type="text"
                                onChange={handleUf}
                                value={uf}
                            />
                            <p>CÓDIGO DE REGIÃO</p>
                            <input type="number"
                                onChange={handleRegionCode}
                                value={regionCode}
                            />
                            <p>CÓDIGO "WMO"</p>
                            <input type="number"
                                onChange={handleWmoCode}
                                value={wmoCode}
                            />
                            <p>DATA DE FUNDAÇÃO</p>
                            <input type="text"
                                onChange={handleFoundationDate}
                                value={foundationDate}
                            />
                            <button type="submit">ENVIAR</button>
                        </form>
                    </div>
                </div >
            }


{
                editForm &&
                <div className={styles.container}>
                    <div className={styles.close} onClick={handleCloseModal}>X</div>
                    <div className={styles.wrapper}>
                        <form onSubmit={handleEdit}>
                            <p>Nome</p>
                            <input type="text"
                                onChange={handleStationName}
                                value={stationName}
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
                            <p>UF</p>
                            <input type="text"
                                onChange={handleUf}
                                value={uf}
                            />
                            <p>CÓDIGO DE REGIÃO</p>
                            <input type="number"
                                onChange={handleRegionCode}
                                value={regionCode}
                            />
                            <p>CÓDIGO "WMO"</p>
                            <input type="number"
                                onChange={handleWmoCode}
                                value={wmoCode}
                            />
                            <p>DATA DE FUNDAÇÃO</p>
                            <input type="text"
                                onChange={handleFoundationDate}
                                value={foundationDate}
                            />
                            <button type="submit">ENVIAR</button>
                        </form>
                    </div>
                </div >
            }
        </>
    )
};

export default Modal;