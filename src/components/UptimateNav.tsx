import { FC, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../assets/css/nav.css"

import Logo from "../assets/img/logo.png"
import Menu from "../assets/img/menu.svg"
import Close from "../assets/img/close.svg"
import Search_Img from "../assets/img/search.png";
import Search_Img_Selected from "../assets/img/search_select.png"

export const UptimateNav:FC = () => {
    const linkRefSearch = useRef<HTMLImageElement>(null)
    const menuRef = useRef<HTMLImageElement>(null)
    const location = useLocation();

    useEffect(()=> {
        if(linkRefSearch.current && menuRef.current) {
            if(location.pathname == "/search") {
                linkRefSearch.current.src = Search_Img_Selected
            } else {
                linkRefSearch.current.src = Search_Img
            }
            if(location.pathname == "/menu") {
                menuRef.current.src = Close
            } else {
                menuRef.current.src = Menu
            }
        }
    }, [linkRefSearch, menuRef, location])
    return (
        <nav>
       <Link to="/">
         <img id="logo" src={Logo} alt="Логотип" />
        </Link> 
        <div id="search_button">
            <Link  to="/search">
        <img ref={linkRefSearch} id="search_img" src={Search_Img} alt="Поиск" />
            </Link>
        <Link to="/menu">
            <img ref={menuRef} id="menu" src={Menu} alt="Меню" />
        </Link> 
        </div>
    
        </nav>
    )
}