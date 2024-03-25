"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

interface HeaderProps {}

const Header = ({}: HeaderProps) => {
  const session = useSession();
  const router = useRouter();
  const pathName = usePathname();

  const handleMoveRoot = () => {
    if (
      session.status === "authenticated" &&
      !pathName.includes("/dashboard")
    ) {
      router.push("/dashboard");
    }
  };
  return (
    <header className="flex justify-between px-8 py-5">
      <div>
        <button type="button" onClick={handleMoveRoot}>
          로고
        </button>
      </div>

      <div>
        <ul className="flex gap-5">
          <li className="cursor-pointer">
            {session.status === "authenticated" ? (
              <button
                type="button"
                onClick={() =>
                  signOut({
                    callbackUrl: process.env.NEXT_PUBLIC_APP_URL,
                  })
                }
              >
                로그아웃
              </button>
            ) : (
              <button
                type="button"
                onClick={() =>
                  signIn("google", {
                    callbackUrl: `${process.env.NEXT_PUBLIC_APP_URL}/auth/google`,
                  })
                }
              >
                로그인
              </button>
            )}
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
