"use client";
import React from "react";
import { useState } from "react";
import {
  Navbar as NextNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
  Input,
} from "@nextui-org/react";
import Image from "next/image";
import { IoMenu } from "react-icons/io5";
import { BiSearch } from "react-icons/bi";
import { Cart } from "./Cart";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const MenuIcon = (isOpen: boolean | undefined) => {
    return <IoMenu size={32} />;
  };

  return (
    <NextNavbar
      isBlurred={true}
      isBordered={true}
      onMenuOpenChange={setMenuOpen}
      maxWidth="2xl"
    >
      <NavbarContent justify="start">
        <NavbarMenuToggle
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="md:hidden"
          icon={MenuIcon}
        />

        <NavbarBrand>
          <Image src="/NavLogo2.png" alt="" width={90} height={90}></Image>
          <p className=" pr-24 font-bebas text-2xl sm:text-2xl md:text-4xl lg:text-4xl">
            Toronto Drip
          </p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden gap-4 md:flex" justify="start">
        <NavbarItem>
          <Link color="foreground" href="#">
            NEW RELEASES
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" aria-current="page">
            SNEAKERS
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            CONTACT
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent as="div" className="items-center" justify="end">
        <NavbarItem className="hidden md:flex">
          <Link href="#">LOGIN</Link>
        </NavbarItem>
        <NavbarItem className="hidden md:flex">
          <Button as={Link} color="secondary" href="#">
            <h1 className="font-extrabold">CREATE AN ACCOUNT</h1>
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Link>
            <Cart></Cart>
          </Link>
        </NavbarItem>
        {/* <Input
          classNames={{
            base: "max-w-full sm:max-w-[10rem] h-10 ",
            mainWrapper: "h-full",
            input: "text-small text-foreground bg-blackAccent-400",
            inputWrapper:
              "h-full font-normal text-foreground bg-blackAccent-400 ",
          }}
          placeholder="Type to search..."
          size="sm"
          startContent={<BiSearch size={18} />}
          type="search"
        /> */}
      </NavbarContent>
      <NavbarMenu>
        {" "}
        <NavbarMenuItem>
          <Link color="foreground" href="#">
            NEW RELEASES
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="#" aria-current="page">
            SNEAKERS
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link color="foreground" href="#">
            CONTACT
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="#">LOGIN</Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Button as={Link} color="secondary" href="#">
            <h1 className="font-extrabold">CREATE AN ACCOUNT</h1>
          </Button>
        </NavbarMenuItem>
      </NavbarMenu>
    </NextNavbar>
  );
};
