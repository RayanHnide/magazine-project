'use client'
import GlobalButton from "@/components/GlobalButton";
import { useState } from "react";
import { useEffect } from "react";

// Advertisement component to display rotating messages
const Advertisement = () => {
    // Array of message objects with title and description
    const messages = [
        {
            title: "اكتشف أحدث عروضنا في عالم الأعمال والتمويل!",
            description: "لا تفوت الفرصة للحصول على أفضل العروض والصفقات الحصرية. ابدأ الآن وحقق النجاح!"
        },
        {
            title: "انضم إلى مجتمعنا وابدأ رحلتك نحو النجاح!",
            description: "استفد من العروض الحصرية والفرص المميزة المتاحة لك الآن."
        },
       
    ];

    // State to track the current message index
    const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

    // useEffect hook to set up an interval for rotating messages
    useEffect(() => {
        // Set an interval to update the current message index every 6 seconds
        const interval = setInterval(() => {
            // Update the index to the next message, looping back to the start if necessary
            setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
        }, 6000);  

        // Cleanup function to clear the interval when the component unmounts
        return () => clearInterval(interval);
    }, [messages.length]);
    
    return (
        <>
            {/* Main container with background image and styling */}
            <div className="relative bg-[url('/adv.png')] h-[500px] bg-cover bg-center text-white py-16 px-8 md:px-16 lg:px-32 ">
                {/* Overlay to darken the background image */}
                <div className="bg-black/60 absolute inset-0 ]">

                    {/* Centered content container */}
                    <div className="container mx-auto flex items-center justify-center h-full">
                        <div className="flex-1 text-right text-white text-center p-4">
                            {/* Display the current message title */}
                            <h2 className="text-3xl md:text-5xl font-bold mb-4">
                                {messages[currentMessageIndex].title}
                            </h2>
                            {/* Display the current message description */}
                            <p className="mb-8 text-lg md:text-xl">
                                {messages[currentMessageIndex].description}
                            </p>
                            {/* Call-to-action button */}
                            <GlobalButton
                            className="bg-gold text-black text-2xl px-8 py-6 rounded-lg"
                            title="ابدأ الآن"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Advertisement;