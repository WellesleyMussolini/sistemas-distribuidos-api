export const filter_weather = (inputSearch, array) => {
    // return !inputSearch ? array : array.filter(e => e.stationName.toLowerCase().includes(inputSearch.toLowerCase()));
    return !inputSearch ? array : array.filter(e => e.stationId.includes(inputSearch));
}

export const filter_airport = (inputSearch, array) => {
    return !inputSearch ? array : array.filter(e => e.airportName.toLowerCase().includes(inputSearch.toLowerCase()));
}