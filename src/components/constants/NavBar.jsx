"use client"
import React from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";

const Header = ({ menuBarData }) => {
  console.log('menuBarData NavBar', menuBarData);
  return (
    <div className="" id="headerMenu">
      <Menubar>
        {menuBarData.map((section, index) => (
            // <h1>{section[0].nav}</h1>
          <MenubarMenu key={index}>
            <MenubarTrigger>{section[0].nav}</MenubarTrigger>
            <MenubarContent>
              {section.map((item, itemIndex) => (
                <a href={item.url} key={itemIndex}>
                  <MenubarItem>{item.subnav}</MenubarItem>
                </a>
              ))}
            </MenubarContent>
          </MenubarMenu>
        ))}
      </Menubar>
    </div>
  );
};

export default Header;
