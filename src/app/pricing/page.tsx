"use client";

import { Fragment } from "react";
import PricingCard from "./components/PricingCard";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";

interface PricingPageProps {}

const PricingPage = ({}: PricingPageProps) => {
  const router = useRouter();
  const session = useSession();

  const startFreePlan = () => {
    if (session.status !== "authenticated") {
      signIn("google", {
        redirect: true,
        callbackUrl: "http://localhost:3000/auth/google",
      });
      return;
    }

    router.push("dashboard");
  };

  const startSubscribe = () => {
    //현재 사용자가 구독중일 때와 아닐때로 나눈다.
    // 구독중이라면 -> user/settings/subscribe 페이지로 이동하여 구독정보 확인 할 수 있고
    // 아닐 경우 결제 화면으로 전환
  };
  return (
    <Fragment>
      <main className="flex flex-col items-center justify-center h-full gap-5">
        {/* title section */}
        <section className="flex flex-col gap-5 ">
          <h2 className="text-5xl text-center font-bold">가격 정책</h2>
          <div>
            <p className="text-lg text-center font-light">
              무료로 2개의 차트 생성가능
            </p>
            <p className="text-lg text-center font-light">
              요구에 맞는 요금제를 선택해보세요
            </p>
          </div>
        </section>
        {/* Price Card Section */}
        <section className="mt-10 grid grid-cols-2">
          <PricingCard
            plan="무료"
            price={0}
            features={[
              "차트 2개 생성",
              "노션 연결",
              "색상 커스터마이징",
              "레코드 500개",
              "제한없는 임베드",
            ]}
            btnName="무료로 시작하기"
            onClick={startFreePlan}
          />
          <PricingCard
            plan="기본"
            price={5900}
            features={["차트 10개 생성", "레코드 1000개"]}
            btnName="구독하기"
            onClick={startSubscribe}
          />
        </section>
      </main>
    </Fragment>
  );
};

export default PricingPage;
