"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

interface RootHeaderProps {}

const RootHeader = ({}: RootHeaderProps) => {
  const session = useSession();

  return (
    <header className="flex justify-between px-8 py-5">
      <div>
        <Link href="/">로고</Link>
      </div>

      <div>
        <ul className="flex gap-5">
          <li className="cursor-pointer">예시</li>
          <li className="cursor-pointer">
            <Link href="/pricing">가격</Link>
          </li>
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

export default RootHeader;
