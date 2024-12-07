"use client";
import {
  NavbarItem,
  Button,
  Avatar,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";
import { useSession } from "next-auth/react";
import * as action from "@/actions";

function HeaderAuth() {
  const session = useSession();
  let authContent: React.ReactNode;

  if (session.status === "loading") {
    return null;
  } else if (session?.data?.user) {
    authContent = (
      <Popover placement="bottom">
        <PopoverTrigger>
          <div className="flex justify-center items-center gap-2">
            <Avatar
              src={session.data.user.image || "../../public/avatar.jpeg"}
            />
            <span className="text-sm font-bold">{session.data.user.name}</span>
          </div>
        </PopoverTrigger>
        <PopoverContent>
          <div className="p-4">
            <form action={action.signOut}>
              <Button type="submit">Sign out</Button>
            </form>
          </div>
        </PopoverContent>
      </Popover>
    );
  } else {
    authContent = (
      <>
        <NavbarItem>
          <form action={action.signIn}>
            <Button type="submit" color="secondary" variant="bordered">
              Sign in
            </Button>
          </form>
        </NavbarItem>
        <NavbarItem>
          <form action={action.signIn}>
            <Button type="submit" color="primary" variant="flat">
              Sign up
            </Button>
          </form>
        </NavbarItem>
      </>
    );
  }
  return authContent;
}

export default HeaderAuth;
