import Header from "./components/header/Header";
import Wrapper from "./components/wrapper/Wrapper";
import Home from "./pages/Home/Home";
import "./theme/Theme.css";
import { Route, Routes } from "react-router-dom";
import Weather from "./pages/Weather/Weather";
import * as Routers from "./routes/routes";
import Airport from "./pages/Airport/Airport";
import { UseSearchContext } from "./context/context";

function App() {
  const {search, setSearch} = UseSearchContext("");
  return <Routes>
    <Route path={Routers.HOME} element={
      <>
        <Header show_seach_field={false} />
        <Wrapper content={<Home />}></Wrapper>
      </>
    } exact />

    <Route path={Routers.WEATHER} element={
      <>
        <Header show_seach_field={true} search={search} handleSearch={setSearch} />
        <Wrapper content={<Weather search={search} />}></Wrapper>
      </>
    } />
    
    <Route path={Routers.AIRPORT} element={
      <>
        <Header show_seach_field={true} />
        <Wrapper content={<Airport />}></Wrapper>
      </>
    } />
  </Routes>
}

export default App;