import { FC, useState } from "react";
import User from "../assets/img/user.png";

import "../assets/css/login-button.css"

export const Login:FC = () => {
    const [isLogin, setIsLogin] = useState<boolean>(false);
    const [name, setName] = useState<string>("Пользователь");
    return (
        <>
    {
        !isLogin ? <button>Login</button> : 

        <div id="log">
             <img id="user" src={User} alt="Пользователь" />
            <h3>{name}</h3> <br />
        </div>
    }
        </>
    )
}