'use client';

import { VerticalLayout } from "./utilities";
import "./styles/header.css";
import { useEffect, useRef, useState } from "react";

const WINDOW_WIDTH_FOR_HAMBURGUER_MENU = 683;

function Buttons() {
    return [
        <a href="/">HOME</a>,
        <a href="/projects/">PROJECTS</a>,
        <a href="/contact/">CONTACT</a>,
        <a href="/certs/">CERTIFICATES</a>
    ];
}

function HamburguerMenu() {

    const menuContainer = useRef(null);


    function closeHamburguerMenu() {
        menuContainer.current.classList.remove("visible");
    }

    function openHamburguerMenu() {
        menuContainer.current.classList.add("visible");
    }

    return (
        <div>

            <button onClick={openHamburguerMenu} style={{
                height: "100%",
                aspectRatio:"1"
            }}>
                <img src="/icons/menu.svg" style={{
                    objectFit: "contain",
                    width: "100%",
                    height: "100%",
                    padding: "12px"
                }}/>
            </button>

            <div onClick={closeHamburguerMenu} className="hamburguer-menu-background" ref={menuContainer}>
                <VerticalLayout className="hamburguer-menu" spacing="0">
                    <button className="close-button" onClick={closeHamburguerMenu}>
                        <img src="/icons/arrow_back.svg" style={{height:"100%"}}></img>
                    </button>
                    {Buttons()}
                </VerticalLayout>
            </div>
        </div>


    );
}

export default function MainRootHeader() {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);


    const handleResize = () => {
        setWindowWidth(window.innerWidth);
        setWindowHeight(window.innerHeight);
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (

        <div className="main-root-header" style={{ backgroundColor:"var(--background)", padding:"0", display:"flex", justifyContent:"space-between"}}>

            <img style={{ width:"200px", objectFit:"contain" }}>
            
            </img>
            

            {

                (windowWidth > WINDOW_WIDTH_FOR_HAMBURGUER_MENU)
                    ?

                    <div className="header-buttons-container" style={{
                    
                        display: "flex",
                        overflowY: "hidden",
                        overflowX: "auto",
                        textWrap: "nowrap",
                    }}>


                        {Buttons()}


                    </div>
                
                    :
                
                    <HamburguerMenu></HamburguerMenu>
                    
            }


        </div>
    );
}