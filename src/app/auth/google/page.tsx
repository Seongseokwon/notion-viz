"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface GoogleAuthPageProps {}

const GoogleAuthPage = ({}: GoogleAuthPageProps) => {
  const router = useRouter();
  const session = useSession();

  useEffect(() => {
    if (session.status === "authenticated") router.push("/dashboard");
  }, [session?.status]);
  return <div>구글 로그인 진행중</div>;
};

export default GoogleAuthPage;
