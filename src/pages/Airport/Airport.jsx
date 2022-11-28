import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import PageSwitcher from "../../components/pagination/Pagination";
import Modal from "../../components/modal/airport/Modal"
import { filter_airport } from "../../utils/filter_api";

const Airport = ({ search }) => {
    const [submitModal, setSubmitModal] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const [airportName, setAirportName] = useState("");
    const [iataCode, setIataCode] = useState("");
    const [city, setCity] = useState("");
    const [isoCountryCode, setIsoCountryCode] = useState("");
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    const [height, setHeight] = useState("");

    const [api, setApi] = useState([]);
    const [data, setData] = useState([]);
    const [pageSwitch, setPageSwitch] = useState(1);
    useEffect(() => {
        fetch(`https://airport-una.herokuapp.com/api/v1/aeroportos?page=${pageSwitch}&size=${10}`)
            .then(response => response.json()).then(result => {
                setApi(result.content)
                setData(result);
                console.log(result)
            });
    }, [pageSwitch, setApi]);

    const filter_api = filter_airport(search, api);

    const HandlePageSwitch = (event, index) => {
        return setPageSwitch(index);
    };

    const handleSubmit = () => {
        const API_POST = {
            airportName: airportName,
            iataCode: iataCode,
            city: city,
            isoCountryCode: isoCountryCode,
            latitude: latitude,
            longitude: longitude,
            height: height,
        }
        fetch("https://airport-una.herokuapp.com/api/v1/aeroportos/", {
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

    const handleEdit = (e) => {
        console.log(e)
        const API_PUT = {
            airportName: airportName,
            iataCode: iataCode,
            city: city,
            isoCountryCode: isoCountryCode,
        };
        fetch(`https://airport-una.herokuapp.com/api/v1/aeroportos/${e}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(API_PUT)
        }).then((response) => response).catch(err => console.log(err));
        return;
    }

    const handleDelete = (e) => {
        fetch(`https://airport-una.herokuapp.com/api/v1/aeroportos/${e}`, {
            method: 'DELETE',
        }).then((response) => response);
        const remove_item = api.filter(item => item.iataCode !== e);
        return setApi(remove_item);
    };
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
                                    <p>ID</p>
                                    <p>CÓDIGO IATA</p>
                                    <p>NOME</p>
                                    <p>LONGITUDE</p>
                                    <p>ALTITUDE</p>
                                    <p>LATITUDE</p>
                                    <p>CIDADE</p>
                                    <p>CÓDIGO ISO</p>
                                </tr>
                                <tr>
                                    <p>{item.airportId}</p>
                                    <p>{item.iataCode}</p>
                                    <p>{item.airportName}</p>
                                    <p>{item.longitude}</p>
                                    <p>{item.height}</p>
                                    <p>{item.latitude}</p>
                                    <p>{item.city}</p>
                                    <p>{item.isoCountryCode}</p>
                                </tr>
                                <button className={styles.edit} onClick={() => {
                                    setEditModal(!editModal);
                                }}>EDITAR</button>
                                <button className={styles.delete} onClick={() => handleDelete(item.iataCode)}>DELETAR</button>
                            </li>
                        )
                    })
                }
                {
                    filter_api.map((item, index) => {
                        return (
                            <div className={styles.modal} key={index}>
                                <Modal handleCloseModal={() => {
                                    setSubmitModal(false);
                                    setEditModal(false);
                                    return;
                                }}
                                    submitForm={submitModal}
                                    editForm={editModal}
                                    handleEdit={() => {
                                        handleEdit(item.iataCode);
                                    }}
                                    handleSubmit={handleSubmit}
                                    airportName={airportName}
                                    longitude={longitude}
                                    height={height}
                                    latitude={latitude}
                                    city={city}
                                    iataCode={iataCode}
                                    isoCountryCode={isoCountryCode}
                                    handleAirportName={(e) => setAirportName(e.target.value)}
                                    handleLatitude={(e) => setLatitude(e.target.value)}
                                    handleLongitude={(e) => setLongitude(e.target.value)}
                                    handleHeight={(e) => setHeight(e.target.value)}
                                    handleCity={(e) => setCity(e.target.value)}
                                    handleIataCode={(e) => setIataCode(e.target.value)}
                                    handleIsoCountryCode={(e) => setIsoCountryCode(e.target.value)}
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
            </ul>
        </div>
    )
}

export default Airport;