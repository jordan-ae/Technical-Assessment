import { CasinoCard } from "@/core/components/organisms/Casino_Cards";

const casinoCardData: CasinoCard[] = [
  {
    logo: "Logo_Grosvenor",
    casino_name: "Grosvenor Casinos",
    rating: 4,
    bonus: {
      betAmount: "£10",
      bonusAmount: "£400"
    },
    cta: {
      label: "Bet Now",
      url: "https://example.com/"
    },
    background: "#03252B"
  },
  {
    logo: "Logo_Happy Spins",
    casino_name: "Happy Spins",
    rating: 5,
    bonus: {
      betAmount: "£10",
      bonusAmount: "£400"
    },
    cta: {
      label: "Bet Now",
      url: "https://example.com/"
    },
    background: "#43082F"
  },
  {
    logo: "image4",
    casino_name: "Hajper",
    rating: 5,
    bonus: {
      betAmount: "£10",
      bonusAmount: "£400"
    },
    cta: {
      label: "Bet Now",
      url: "https://example.com/"
    },
    background: "#123156"
  },
];

export default function Home() {
  return (
    <div className="p-6 lg:p-10 w-full min-h-screen flex flex-col items-center">
      <span className="">
        BEST CASINOS 2024
      </span>
      {casinoCardData.map((data, index) => (
        <CasinoCard key={index} data={data} />
      ))}
    </div>
  );
}
