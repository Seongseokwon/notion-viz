"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect } from "react";

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
              <button type="button" onClick={() => signOut()}>
                로그아웃
              </button>
            ) : (
              <button type="button" onClick={() => signIn("google")}>
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
