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
} from "@nextui-org/react";
import { GiDualityMask } from "react-icons/gi";

export default function Navigation() {
  return (
    <Navbar
      position="static"
      shouldHideOnScroll
      className="py-4 bg-gradient-to-b from-black/5"
    >
      <NavbarBrand>
        <GiDualityMask size={64} className="text-orange-50" />
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link
            color="foreground"
            href="/chat"
            className="text-xl border-b-2 border-orange-50 p-2 rounded-lg shadow-slate-400 italic"
          >
            CHAT
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link
            href="/location"
            aria-current="page"
            className="text-xl font-normal border-b-2 border-orange-50 p-2 rounded-lg shadow-slate-400 text-white italic"
          >
            LOCATIONS
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="#"
            className="text-xl border-b-2 border-orange-50 p-2 rounded-lg  shadow-slate-400 italic"
          >
            BLOGS
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="#"
            className="text-xl border-b-2 border-orange-50 p-2 rounded-lg  shadow-slate-400 italic"
          >
            RESOURCES
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="#"
            className="text-xl border-b-2 border-orange-50 p-2 rounded-lg shadow-slate-400 italic"
          >
            ABOUT
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent as="div" justify="end">
        <Dropdown placement="bottom-end">
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
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="team_settings">Team Settings</DropdownItem>
            <DropdownItem key="analytics">Analytics</DropdownItem>
            <DropdownItem key="system">System</DropdownItem>
            <DropdownItem key="configurations">Configurations</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}
