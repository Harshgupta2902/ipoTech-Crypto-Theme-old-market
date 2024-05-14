"use server"

// import { usePathname } from "next/navigation";
import React from "react";
// import TickerTape from "../crypto/home/TickerTape";
import NavBar from "./NavBar";

const Header = async () => {


    const fetchMenuData = async () => {
      try {
        const response = await fetch("http://localhost/ipo/Apis/getNav");
        if (response.ok) {
          const data = await response.json();
          if (data && data.result) {
            const sections = Object.values(data.result);
            return sections;
          } else {
            console.error("Invalid menu data format:", data);
          }
        } else {
          console.error("Failed to fetch menu data");
        }
      } catch (error) {
        console.error("Error fetching menu data:", error);
      }
    };

   const menuBarData = await fetchMenuData();
    
  // const isCryptoRoute = usePathname() === '/crypto';
  return (
    <div>
      {/* {isCryptoRoute && (
        <TickerTape />
      )} */}
      <header className="dark-bb">
        <nav className="navbar navbar-expand-lg center">
          <a className="navbar-brand" href="" >
            <img src="https://ipo.onlineinfotech.net/assets/img/logo-light.svg" alt="logo" />
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#headerMenu" aria-controls="headerMenu" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <NavBar menuBarData={menuBarData} />
        </nav>
      </header>
    </div>
  );
}

export default Header;
