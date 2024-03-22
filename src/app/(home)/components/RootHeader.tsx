import Link from "next/link";

interface RootHeaderProps {}

const RootHeader = ({}: RootHeaderProps) => {
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
          <li className="cursor-pointer">로그인</li>
        </ul>
      </div>
    </header>
  );
};

export default RootHeader;
