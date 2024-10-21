import Link from "next/link";
import { Button } from "../../atoms/button";
import Image from "next/image";
import StarRating from "../../atoms/star_rating";

export interface CasinoCard {
    logo: string;
    background: string;
    casino_name: string;
    rating: number;
    bonus: {
        betAmount: string;
        bonusAmount: string;
    };
    cta: {
        label: string;
        url: string;
    };
}

export function CasinoCard({ data }: { data: CasinoCard }) {
    return (
        <div className="w-full p-4 bg-white shadow-sm rounded lg:flex lg:justify-between lg:pr-8 lg:items-center text-nowrap max-w-[1220px] min-w-[280px] mb-3 xl:p-0 xl:pr-16 lg:gap-6">
            <div className="w-full flex flex-col items-center sm:flex-row md:flex-col sm:gap-6 lg:flex-row lg:p-2">
                <div style={{background: data.background}} className={`h-[133px] w-full mb-6 flex justify-center sm:w-[300px] sm:h-[162px] sm:mb-0 md:w-full lg:h-[103px] lg:w-72`}>
                    <Image className="items-center aspect-video" src={`/${data.logo}.webp`} width={133} height={133} alt="casino_logo" />
                </div>

                <div className="sm:flex sm:flex-col sm:gap-2 lg:flex-row lg:justify-evenly lg:w-full lg:gap-4">
                    <div className="flex items-center flex-col sm:items-start md:items-center lg:flex lg:flex-col lg:justify-center lg:items-start lg:gap-4">
                        <Link href='' className="text-xl mb-6 underline lg:mb-0 sm:mb-4">{data.casino_name}</Link>
                        <span className="mb-6 lg:mb-0"><StarRating rating={data.rating} /></span>
                    </div>

                    <div className="flex flex-col items-center sm:items-start md:items-center">
                        <span className="text-xl font-semibold">Bonus</span>
                        <div className="flex flex-col items-center md:min-w-[303px]flex md:flex-row md:gap-2 lg:flex-col lg:items-center sm:flex-row sm:gap-2">
                            <span className="text-3xl font-normal">Bet {data.bonus.betAmount}</span>
                            <span className="text-3xl font-normal">Get {data.bonus.bonusAmount}</span>
                        </div>
                    </div>
                </div>
            </div>
            <Button className="lg:min-w-[180px] lg:max-w-[303px] text-sm font-bold">{data.cta.label}</Button>
        </div>
    )
}