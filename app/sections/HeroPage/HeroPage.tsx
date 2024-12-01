"use client"
import GlobalButton from "@/components/GlobalButton";
import Image from "next/image";
import { useRouter } from "next/navigation";

const HeroPage = () => {
    const router = useRouter();
    return (
        <>
            <div className="w-full h-screen bg-[url('/Unionbg.png')] flex justify-center items-center bg-cover bg-center bg-no-repeat relative">

                <div className="absolute top-0 right-0">
                    <Image 
                        src={'/Shape.svg'} 
                        alt="logo" 
                        className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px]" 
                        width={1000} 
                        height={1000}
                    />
                </div>

                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
                    <div className=" text-center md:text-right mb-4 md:mb-0">
                        <h1 className="text-white text-3xl md:text-4xl lg:text-6xl font-bold w-full">
                            نافذتك إلى عالم المال والأعمال.  
                        </h1>
                        <h1 className="text-white text-3xl md:text-4xl lg:text-6xl font-bold  mt-4 md:mt-4 lg:mt-8">
                        رؤى وتحليلات تعزز نجاحك
                        </h1>
                        <GlobalButton onClick={() => router.push('/vote')} className="text-xl md:text-2xl lg:text-3xl px-12 mt-4 md:mt-4 lg:mt-8 py-7" title="صوت لأفضل مدينة عربية" />
                    </div>
                    <div className="flex justify-center md:justify-end lg:pt-28 md:pt-0">
                        <Image 
                        src={'/hero.png'} 
                        alt="logo" 
                        width={900} 
                        height={900}
                        />
                    </div>
                </div>

            </div>
        </>
    )
};

export default HeroPage;