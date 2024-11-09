import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
  Button,
} from "@nextui-org/react";
import { GiDualityMask } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { app } from "../util/firebaseConfig";

export default function Navigation() {
  const navigate = useNavigate();
  const auth = getAuth(app);

  const handleUserLogOut = () => {
    auth.signOut();
    navigate("/");
  };

  return (
    <Navbar
      position="static"
      shouldHideOnScroll
      className="py-4 bg-gradient-to-b from-black/5"
    >
      <NavbarBrand>
        <Button
          isIconOnly
          size="lg"
          variant="bordered"
          className="p-2 rounded-full"
          onPress={() => navigate("/")}
        >
          <GiDualityMask size={64} className="text-orange-50" />
        </Button>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-2">
        <NavbarItem>
          <Button variant="light" className="p-0 border-white border-2">
            <Link
              color="foreground"
              href="/chat"
              className="text-xl border-orange-50 rounded-full shadow-slate-400"
            >
              CHAT
            </Link>
          </Button>
        </NavbarItem>
        <Button variant="light" className="p-2 border-white border-2">
          <NavbarItem isActive>
            <Link
              href="/location"
              aria-current="page"
              className="text-xl font-normal border-orange-50 rounded-full shadow-slate-400 text-white "
            >
              LOCATIONS
            </Link>
          </NavbarItem>
        </Button>
        <Button variant="light" className="p-2 border-white border-2">
          <NavbarItem>
            <Link
              color="foreground"
              href="#"
              className="text-xl border-orange-50  rounded-lg  shadow-slate-400 "
            >
              BLOGS
            </Link>
          </NavbarItem>
        </Button>
        <Button variant="light" className="p-2 border-white border-2">
          <NavbarItem>
            <Link
              color="foreground"
              href="#"
              className="text-xl border-orange-50  rounded-lg  shadow-slate-400 "
            >
              RESOURCES
            </Link>
          </NavbarItem>
        </Button>
        <Button variant="light" className="p-2 border-white border-2">
          <NavbarItem>
            <Link
              color="foreground"
              href="#"
              className="text-xl border-orange-50   rounded-lg shadow-slate-400 "
            >
              ABOUT
            </Link>
          </NavbarItem>
        </Button>
      </NavbarContent>

      <NavbarContent as="div" justify="end">
        <Dropdown
          placement="bottom-end"
          className="bg-black/60 border-2 border-white"
        >
          <DropdownTrigger>
            <Avatar
              as="button"
              className="transition-transform"
              color="#D7F8FE"
              name="Jason Hughes"
              size="lg"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Profile Actions"
            variant="flat"
            className="text-white"
          >
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="system">System</DropdownItem>
            <DropdownItem
              key="logout"
              color="danger"
              onClick={() => handleUserLogOut()}
            >
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}
