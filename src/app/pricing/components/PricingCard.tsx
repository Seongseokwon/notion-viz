import clsx from "clsx";
import { FaRegCheckCircle } from "react-icons/fa";

interface PricingCardProps {
  plan: string;
  price: number;
  features: string[];
  btnName: string;
  onClick: () => void;
}

const PricingCard = ({
  plan,
  price,
  features,
  btnName,
  onClick,
}: PricingCardProps) => {
  const cardContainer = clsx(
    `
    flex
    flex-col
    justify-between
    gap-5
    border
    mx-5
    px-8
    py-10
    rounded-lg
    shadow-md
  `,
    plan === "기본" && "shadow-yellow-400 border-yellow-400"
  );
  return (
    <div className={cardContainer}>
      <div className="flex flex-col gap-2">
        <h3 className="text-3xl leading-6 font-semibold">{plan}</h3>
        <p>
          <span className="text-4xl font-bold">₩{price.toLocaleString()}</span>
          <span className="text-base font-medium text-gray-500">/월</span>
        </p>
      </div>
      <ul className="flex flex-col gap-1">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2">
            <FaRegCheckCircle className="text-green-500" />
            {feature}
          </li>
        ))}
      </ul>
      <button
        className="border rounded-2xl px-8 py-2"
        type="button"
        onClick={onClick}
      >
        {btnName}
      </button>
    </div>
  );
};

export default PricingCard;
