import { currentUser } from "@clerk/nextjs/server";
import MaxWidthWrapper from "../../components/MaxWidthWrapper";
import Link from "next/link";
import {
  ClerkLoaded,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import { Button, buttonVariants } from "../../components/ui/button";
import { cn } from "@/lib/utils";
import BalanceButton from "./BalanceButton";

const Navbar = async () => {
  const user = await currentUser();

  return (
    <nav className="sticky z-[100] h-14 inset-x-0 top-4 w-full">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between">
          <Link href="/" className="flex z-40 font-semibold">
            Case <span className="text-yellow-400">Paradise</span>
          </Link>
          <div>
            <Link
              href="/"
              className={cn(
                buttonVariants({
                  size: "sm",
                  variant: "ghost",
                })
              )}
            >
              Cases
            </Link>
            <Link
              href="/"
              className={cn(
                buttonVariants({
                  size: "sm",
                  variant: "ghost",
                })
              )}
            >
              Case battle
            </Link>
          </div>
          <div className="h-full flex items-center space-x-4">
            {/* TODO: Add ClerkLoading to prevent layout changes while loading current user. */}
            <ClerkLoaded>
              {user ? (
                <>
                  <BalanceButton />
                  <UserButton />
                </>
              ) : (
                <>
                  <SignUpButton>
                    <Button size="sm" variant="ghost">
                      Sign up
                    </Button>
                  </SignUpButton>
                  <SignInButton>
                    <Button size="sm" variant="ghost">
                      Login
                    </Button>
                  </SignInButton>
                </>
              )}
            </ClerkLoaded>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
