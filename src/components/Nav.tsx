import { FC, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

import { Login } from "./Login";

import Logo from "../assets/img/logo.png";
import Search_Img from "../assets/img/search.png";
import Search_Img_Selected from "../assets/img/search_select.png"

import "../assets/css/nav.css"

export const Nav:FC = () => {
  let location = useLocation();

  const linkRefOne = useRef<HTMLAnchorElement>(null);
  const linkRefTwo = useRef<HTMLAnchorElement>(null);
  const linkRefThree = useRef<HTMLAnchorElement>(null);
  const linkRefFour = useRef<HTMLAnchorElement>(null);
  const linkRefSearch = useRef<HTMLImageElement>(null);

  useEffect(() => {
      if(linkRefOne.current && linkRefTwo.current && linkRefThree.current && linkRefFour.current && linkRefSearch.current) {
          if(location.pathname == "/") {
              linkRefOne.current.className = "main_a";
              linkRefTwo.current.className = "nomain_a";
              linkRefThree.current.className = "nomain_a";
              linkRefFour.current.className = "nomain_a";
              linkRefSearch.current.src = Search_Img
          } else if(location.pathname == "/client-registration") {
              linkRefOne.current.className = "nomain_a";
              linkRefTwo.current.className = "main_a";
              linkRefThree.current.className = "nomain_a";
              linkRefFour.current.className = "nomain_a";
            linkRefSearch.current.src = Search_Img
          } else if(location.pathname == "/advisors") {
              linkRefOne.current.className = "nomain_a";
              linkRefTwo.current.className = "nomain_a";
              linkRefThree.current.className = "main_a";
              linkRefFour.current.className = "nomain_a";
              linkRefSearch.current.src = Search_Img
          } else if(location.pathname == "/register") {
            linkRefOne.current.className = "nomain_a";
            linkRefTwo.current.className = "nomain_a";
            linkRefThree.current.className = "nomain_a";
            linkRefFour.current.className = "main_a";
            linkRefSearch.current.src = Search_Img
          } else if(location.pathname == "/search") {
            linkRefOne.current.className = "nomain_a";
            linkRefTwo.current.className = "nomain_a";
            linkRefThree.current.className = "nomain_a";
            linkRefFour.current.className = "nomain_a";
            linkRefSearch.current.src = Search_Img_Selected
          }
      }
  })
    return (
      <nav>
        <Link to="/">
        <img id="logo" src={Logo} alt="Логотип" />
        </Link>
       
        <div id="a">
        <Link ref={linkRefOne} to="/">Home</Link>
        <Link ref={linkRefTwo} to="/client-registration">Client Registration</Link>
        <Link ref={linkRefThree} to="/advisors">Advisors</Link>
        <Link ref={linkRefFour} to="/register">Register</Link>
        </div>
          <div id="search_button">
            <Link to="/search">
            <img ref={linkRefSearch} id="search_img" src={Search_Img} alt="Поиск" />
            </Link>
        <Login />
          </div>
      </nav>
    )
}