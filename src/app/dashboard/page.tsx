"use client";

import { useRouter } from "next/navigation";
import { Fragment } from "react";
import { FaPlus } from "react-icons/fa";

interface DashboardPageProps {}

const DashboardPage = ({}: DashboardPageProps) => {
  const router = useRouter();
  const moveCreateChart = () => {
    router.push("/chart/create");
  };
  return (
    <div className="flex">
      <aside>
        <button
          className={`
          flex
          items-center
          gap-2
          border
          border-gray-400
          rounded-lg
          py-2
          px-6
          `}
          type="button"
          onClick={moveCreateChart}
        >
          <FaPlus />
          차트 생성하기
        </button>
      </aside>
      <main>
        차트 리스트 보여주기 없으면 생성 및 설명 페이지 이동 할 수 있도록
      </main>
    </div>
  );
};

export default DashboardPage;
