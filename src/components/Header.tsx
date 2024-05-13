"use client"
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar"

import { usePathname } from "next/navigation";
import React from "react";
import TickerTape from "./crypto/TickerTape";


const menuBarData = [
  {
    title: 'File',
    items: [
      { name: 'New Tab', route: 'route' },
      { name: 'New Window', route: 'route' },
      { name: 'New Incognito Window', route: 'route' },
      { name: 'Print...', route: 'route' }
    ]
  },
  {
    title: 'File',
    items: [
      { name: 'New Tab', route: 'route' },
      { name: 'New Window', route: 'route' },
      { name: 'New Incognito Window', route: 'route' },
      { name: 'Print...', route: 'route' }
    ]
  },
  {
    title: 'File',
    items: [
      { name: 'New Tab', route: 'route' },
      { name: 'New Window', route: 'route' },
      { name: 'New Incognito Window', route: 'route' },
      { name: 'Print...', route: 'route' }
    ]
  },
  {
    title: 'File',
    items: [
      { name: 'New Tab', route: 'route' },
      { name: 'New Window', route: 'route' },
      { name: 'New Incognito Window', route: 'route' },
      { name: 'Print...', route: 'route' }
    ]
  },


];


const Header = () => {
  const isCryptoRoute = usePathname() === '/crypto';
  return (
    <div>
      {isCryptoRoute && (
        <TickerTape />
      )}
      <header className="dark-bb">
        <nav className="navbar navbar-expand-lg center">
          <a className="navbar-brand" href="https://ipo.onlineinfotech.net/" >
            <img src="https://ipo.onlineinfotech.net/assets/img/logo-light.svg" alt="logo" />
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#headerMenu" aria-controls="headerMenu" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="headerMenu">
            <Menubar>
              {menuBarData.map((section, index) => (
                <MenubarMenu key={index}>
                  <React.Fragment >
                    <MenubarTrigger key={index}>{section.title}</MenubarTrigger>
                    <MenubarContent>
                      {section.items.map((item, itemIndex) => (
                        <a href={item.route}key={itemIndex} ><MenubarItem key={itemIndex}>
                          {item.name}
                        </MenubarItem></a>
                      ))}
                    </MenubarContent>
                  </React.Fragment>
                </MenubarMenu>

              ))}
            </Menubar>
          </div>
        </nav>
      </header>
    </div>
  );
}


export default Header;
