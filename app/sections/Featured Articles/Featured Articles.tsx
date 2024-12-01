 import { featuredArticles } from "@/app/data";
import Card from "@/components/Card";
import SectionsHeader from "@/components/Sections Header";
 

const FeaturedArticles = () => {
    return (
        <>
            
            <div className="relative mt-[100px]">
            <div className="absolute top-[-100px] right-[-6px]">
                  
                </div>
                <SectionsHeader title="المقالات المميزة" />

                <div className="bg-[url('/finance.jpg')] bg-cover bg-center bg-no-repeat w-full h-[800px] mt-20 sm:h-[600px] md:h-[700px] lg:h-[800px]">
                  <div className="bg-black/50 w-full h-full flex items-center">
                    <div className="px-4 sm:px-10 md:px-20">
                        <h1 className="text-lg sm:text-xl md:text-2xl text-white font-normal hover:text-gold transition-all duration-300">
                        استكشاف <span className="text-gold">|</span> تمويل 
                        </h1>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-extrabold mt-4 sm:mt-6 md:mt-10">
                     تمويل المشروعات الصغيرة والتحديات المرتبطة بها
                     </h1>

                     <p className="text-white mt-4 sm:mt-6 md:mt-10 text-sm sm:text-base md:text-lg w-full sm:w-3/4 md:w-1/2">
                     مقال يناقش التحديات التي تواجه المشروعات الصغيرة مثل نقص رأس المال، وكيفية التغلب عليها من خلال الاستراتيجيات المالية المناسبة. يعرض أيضًا بعض الأفكار لمشاريع صغيرة مربحة مثل مكتبات متنقلة أو تصنيع منتجات يدوية. يمكنك قراءة المزيد عن هذا الموضوع في مجلة رواد الأعمال
                     </p>
                    </div>
                  </div>
               </div>
           

             <SectionsHeader  title="  أبرز المقالات  المميزة"   />

               <div className="grid lg:grid-cols-3  px-4 sm:px-10 md:px-20 container mx-auto gap-20 mb-20">
              {
                featuredArticles.map((article,index)=>(
                  <Card image={article.image} key={index} title={article.title} link={article.link} time={article.time} date={article.date} description={article.description} />
                ))
              }

                

               </div>

            </div>
         
        </>
    )
}

export default FeaturedArticles;