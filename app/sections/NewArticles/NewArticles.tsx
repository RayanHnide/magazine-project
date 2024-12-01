"use client"
import SectionsHeader from "@/components/Sections Header";
import { newArticles } from "@/app/data";
import Card from "@/components/Card";
import Image from "next/image";
 import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { TiMinus } from "react-icons/ti";




const NewArticles = () => {
        const [showMore,setShowMore] = useState(false);
    const sliceArticles = showMore ? newArticles : newArticles.slice(0, 3);
    return (
        <>

            <SectionsHeader  title="المقالات الحديثة" isRtl={true} />

            <div className="bg-primary py-20 mt-[20vh] relative">
                <div className="container mx-auto ">
                    <div className="bg-offWhite  relative z-10 rounded-lg p-2 -mt-32">
                        <div className="grid lg:grid-cols-3  px-4 sm:px-10 md:px-20 container mx-auto gap-20 mb-20">
                            {
                                sliceArticles.map((article, index) => (
                                    <Card image={article.image} isNew={true} key={index} title={article.title} link={article.link} time={article.time} date={article.date} description={article.description} />
                                ))
                            }
                           
                            <div className="flex items-center gap-2 cursor-pointer" onClick={()=>{
                                setShowMore(!showMore)
                            }} >
                            {showMore ? <TiMinus className="text-gold text-3xl" /> : <FaPlus className="text-gold text-3xl" />}
                            <span className="text-black">
                             {showMore ? "عرض المقالات القديمة" : "عرض المزيد من المقالات"}
                             </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute  bottom-0 left-0">
                      <Image src='/Shape-rev.png' alt="finance" width={400} height={400} /> 
                </div>
            </div>
          

        </>
    )
}

export default NewArticles;