"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";

interface RootHeaderProps {}

const RootHeader = ({}: RootHeaderProps) => {
  return (
    <header className="flex items-center justify-between px-8 py-6">
      Root Header
      <button onClick={() => signIn("google")}>로그인</button>
    </header>
  );
};

export default RootHeader;
