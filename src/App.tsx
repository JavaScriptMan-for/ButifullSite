import { FC, useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import { Nav } from "./components/Nav";
import { UptimateNav } from "./components/UptimateNav";

import Main from "./pages/Main";
import Client_Register from "./pages/Client-register";
import { Advisors } from "./pages/Advisors";
import { Register } from "./pages/Register";
import { Search } from "./pages/Search";
import { MenuBar } from "./pages/Menu";

const App:FC = ()=> {
  const [isWidthStandart, setIsWidthStandart] = useState<boolean>(false);

  useEffect(()=> {
    setInterval(()=> {
      if(window.innerWidth <= 500) {
        setIsWidthStandart(false)
      } else {
        setIsWidthStandart(true)
      }
    },100)

  }, [window, isWidthStandart])
  return (
    <>
    {isWidthStandart ? <Nav /> : <UptimateNav />}  
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/client-registration" element={<Client_Register />}/>
        <Route path="/advisors" element={<Advisors />}/>
        <Route path="/register" element={<Register />}/> 
        <Route path="/search" element={<Search />}/>
        <Route path="/menu" element={<MenuBar />}/>    
      </Routes>
    </>
  )
}
export default App;