'use client'
import GlobalButton from "@/components/GlobalButton";
import   {useRouter}  from "next/navigation";
 

const VotingSection = () => {
    const router = useRouter();
    
    return (
        <>
            <div className="container mx-auto mt-28 sm:mb:0 md:mb-16 sm:overflow-hidden md:overflow-visible flex justify-center items-center">
                <div className="md:bg-gray sm:bg-transparent rounded-lg w-full h-96 md:rotate-[4deg] p-2">
                    <div className="flex flex-col items-center justify-center bg-primary/90 py-8 px-4 sm:py-16 sm:px-8 md:px-16 lg:px-32 rounded-lg md:-rotate-[4deg]">
                        <h2 className="text-2xl text-center text-white sm:text-3xl md:text-5xl font-bold mb-2 sm:mb-4">
                            &quot; مدينتك المفضلة تستحق صوتك – صوّت الآن ! 
                        </h2>
                        <h2 className="text-2xl text-center text-white sm:text-3xl md:text-5xl font-bold mb-2 sm:mb-4">
                            لأفضل مدينة عربية  &quot;
                        </h2>
                        <GlobalButton className="text-lg px-20 py-7 mt-4 md:mt-4 lg:mt-8" onClick={() => router.push('/vote')} title="صوّت الآن" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default VotingSection;