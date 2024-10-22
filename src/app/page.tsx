import { CasinoCard } from "@/core/components/organisms/Casino_Cards";

const casinoCardData: CasinoCard[] = [
  {
    logo: "Logo_Grosvenor",
    casino_name: "Grosvenor Casinos",
    rating: 5,
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
    <main className="p-6 lg:p-10 min-h-screen  flex flex-col items-start">
        <section aria-label="Casino List" className="w-full max-w-[min(100%,1148px)] mx-auto">
        <h1 className="text-2xl w-full font-bold text-primary-titles mb-3">
          BEST CASINOS 2024
        </h1>
          {casinoCardData.map((data, index) => (
            <article className="flex flex-col items-center" key={index}>
              <CasinoCard data={data} />
            </article>
          ))}
        </section>
    </main>
  );
}