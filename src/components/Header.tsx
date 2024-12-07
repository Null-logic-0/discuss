import { Suspense } from "react";
import Link from "next/link";
import {
  Navbar,
  NavbarItem,
  NavbarContent,
  NavbarBrand,
} from "@nextui-org/react";

import HeaderAuth from "./HeaderAuth";
import SearchInput from "./SearchInput";

async function Header() {
  return (
    <Navbar className="shadow mb-6">
      <NavbarBrand>
        <Link href="/" className="font-bold text-3xl">
          Discuss
        </Link>
      </NavbarBrand>
      <NavbarContent justify="center">
        <NavbarItem>
          <Suspense>
            <SearchInput />
          </Suspense>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <HeaderAuth />
      </NavbarContent>
    </Navbar>
  );
}

export default Header;
