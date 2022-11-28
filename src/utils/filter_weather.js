export const filter_weather = (inputSearch, array) => {
    return !inputSearch ? array : array.filter(e => e.stationName.toLowerCase().includes(inputSearch.toLowerCase()));
}