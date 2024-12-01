"use client"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import GlobalButton from "./GlobalButton";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { VoteModalProps } from "@/app/types/types";

const VoteModal: React.FC<VoteModalProps> = ({ selectedCity, disabled }) => {
    const router = useRouter();
    const isButtonDisabled = disabled || !selectedCity; // Ensure button is disabled if no city is selected

    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className="cursor-pointer">
                    <GlobalButton 
                        className="disabled:bg-gray-400 disabled:text-white text-lg mt-4 md:mt-4 lg:mt-8 px-10 py-7" 
                        title="صوت" 
                        disabled={isButtonDisabled} // Use the new condition
                    />  
                </div>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader className="flex flex-col items-center justify-center p-4 mb-4">
                    <DialogTitle className="text-center text-2xl font-bold">
                        <Image className="mb-4" src={"/done-vote.png"} alt="check" width={120} height={120} />
                    </DialogTitle>
                    <DialogTitle className="text-center text-2xl font-bold">
                        تم تسجيل صوتك بنجاح
                    </DialogTitle>
                    <DialogDescription className="text-center text-sm md:text-base">
                        شكرًا لمشاركتك! لقد تم تسجيل اختيارك {selectedCity || "للمدينة"} بنجاح. نحن نقدر مساهمتك في اختيار أفضل مدينة عربية على الإطلاق.
                    </DialogDescription>
                    <DialogFooter>
                        <GlobalButton onClick={() => router.push("/votingResults")} className="text-lg px-8 py-6" title="رؤية نتائج التصويت" />
                    </DialogFooter>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export default VoteModal;