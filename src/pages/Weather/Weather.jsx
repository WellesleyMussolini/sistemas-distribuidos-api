import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import PageSwitcher from "../../components/pagination/Pagination";
import Modal from "../../components/modal/Modal";
import { filter_weather } from "../../utils/filter_weather";

const Weather = ({ search }) => {
    const [submitModal, setSubmitModal] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const [stationName, setStationName] = useState("");
    const [regionCode, setRegionCode] = useState("");
    const [uf, setUF] = useState("");
    const [wmoCode, setWmoCode] = useState("");
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    const [height, setHeight] = useState("");
    const [foundationDate, setFoundationDate] = useState("");

    const [api, setApi] = useState([]);
    const [data, setData] = useState([]);
    const [pageSwitch, setPageSwitch] = useState(1);
    useEffect(() => {
        fetch(`https://weather-station-una.herokuapp.com/api/v1/estacoes?page=${pageSwitch}&size=${10}`)
            .then(response => response.json()).then(result => {
                setApi(result.content)
                setData(result);
                console.log(result)
            });
    }, [pageSwitch, setApi]);

    const filter_api = filter_weather(search, api);

    const HandlePageSwitch = (event, index) => {
        return setPageSwitch(index);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const API_POST = {
            stationName: stationName,
            regionCode: regionCode,
            uf: uf,
            wmoCode: wmoCode,
            latitude: latitude,
            longitude: longitude,
            height: height,
            foundationDate: foundationDate,
        }
        fetch("https://weather-station-una.herokuapp.com/api/v1/estacoes/", {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Acess-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(API_POST)
        }).then((response) => {
            console.log(response);
            return setApi(prevState => [...prevState, response])
        }).catch(error => console.log(error));
        setSubmitModal(false);
        window.location.reload();
        return;
    };

    const handleDelete = (e) => {
        fetch(`https://weather-station-una.herokuapp.com/api/v1/estacoes/${e}`, {
            method: 'DELETE',
        }).then((response) => response);
        const remove_item = api.filter(item => item.stationId !== e);
        return setApi(remove_item);
    };

    const handleEdit = (e) => {
        console.log(e)
        const API_PUT = {
            stationName: stationName,
            regionCode: regionCode,
            uf: uf,
            wmoCode: wmoCode,
            latitude: latitude,
            longitude: longitude,
            height: height,
            foundationDate: foundationDate,
        };

        fetch(`https://weather-station-una.herokuapp.com/api/v1/estacoes/${e}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(API_PUT)
        }).then((response) => response).catch(err => console.log(err));
    }
    return (
        <div className={styles.container}>
            <div className={styles.button}>
                <button onClick={() => {
                    setSubmitModal(!submitModal);
                }}>NOVO CADASTRO</button>
            </div>
            <ul className={styles.table}>
                {
                    filter_api.map((item, index) => {
                        return (
                            <li key={index}>
                                <tr>
                                    <p>NOME</p>
                                    <p>LONGITUDE</p>
                                    <p>ALTITUDE</p>
                                    <p>LATITUDE</p>
                                    <p>DATA DE FUNDAÇÃO</p>
                                    <p>UF</p>
                                </tr>
                                <tr>
                                    <p>{item.stationName}</p>
                                    <p>{item.longitude}</p>
                                    <p>{item.height}</p>
                                    <p>{item.latitude}</p>
                                    <p>{item.foundationDate}</p>
                                    <p>{item.uf}</p>
                                </tr>
                                <button className={styles.edit} onClick={() => {
                                    setEditModal(!editModal);
                                }}>EDITAR</button>
                                <button className={styles.delete} onClick={() => handleDelete(item.stationId)}>DELETAR</button>
                            </li>
                        )
                    })
                }
                {
                    filter_api.map((item) => {
                        return (
                            <div className={styles.modal}>
                                <Modal handleCloseModal={() => {
                                    setSubmitModal(false);
                                    setEditModal(false);
                                    return;
                                }}
                                    submitForm={submitModal}
                                    editForm={editModal}
                                    handleEdit={() => {
                                        handleEdit(item.stationId)
                                    }}
                                    handleSubmit={handleSubmit}
                                    stationName={stationName}
                                    longitude={longitude}
                                    height={height}
                                    latitude={latitude}
                                    uf={uf}
                                    regionCode={regionCode}
                                    wmoCode={wmoCode}
                                    foundationDate={foundationDate}
                                    handleStationName={(e) => setStationName(e.target.value)}
                                    handleLatitude={(e) => setLatitude(e.target.value)}
                                    handleLongitude={(e) => setLongitude(e.target.value)}
                                    handleHeight={(e) => setHeight(e.target.value)}
                                    handleUf={(e) => setUF(e.target.value)}
                                    handleRegionCode={(e) => setRegionCode(e.target.value)}
                                    handleWmoCode={(e) => setWmoCode(e.target.value)}
                                    handleFoundationDate={(e) => setFoundationDate(e.target.value)}
                                />
                            </div>
                        )
                    })
                }
                {
                    data.length !== 0
                    &&
                    <PageSwitcher
                        TotalPages={data.totalPages}
                        Pages={pageSwitch}
                        HandleCurrentPage={HandlePageSwitch}
                    />
                }
                <h1> PÁGINA: {pageSwitch}</h1>
            </ul>
        </div>
    )
};

export default Weather;