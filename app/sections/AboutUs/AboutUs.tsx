import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const AboutUs = () => {
    return (
        <>

            <div className="container mx-auto mt-24 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <h1 className="text-4xl mx-2     text-right md:text-5xl xl:text-6xl text-gold text-center  font-bold mb-2 sm:mb-4 border-r-2 border-gold pb-2 p-2">
                        مجلة   نبض الاقتصاد
                    </h1>
                </div>
                <div className="text-right pr-3">
                    <Tabs defaultValue="about"  >
                        <TabsList>
                            <TabsTrigger value="goals" className="bg-transparent data-[state=active]:bg-gold text-gray-500 lg:text-2xl text-sm hover:text-gold transition-all duration-300 mx-3">الأهداف</TabsTrigger>
                            <TabsTrigger value="message" className="bg-transparent data-[state=active]:bg-gold text-gray-500 lg:text-2xl text-sm hover:text-gold transition-all duration-300 mx-3">الرسالة</TabsTrigger>
                            <TabsTrigger value="vision" className="bg-transparent data-[state=active]:bg-gold text-gray-500 lg:text-2xl text-sm hover:text-gold transition-all duration-300 mx-3">الرؤية</TabsTrigger>
                            <TabsTrigger value="about" className="bg-transparent data-[state=active]:bg-gold text-gray-500 lg:text-2xl text-sm hover:text-gold transition-all duration-300 ">عن المجلة</TabsTrigger>


                        </TabsList>
                        <TabsContent value="about">مجلة أعمال وتمويل دولية محكمة تصدر عن بيت المشورة للاستشارات المالية، وتهتم بنشر الأبحاث المتخصصة في مجالات إدارة الأعمال، التمويل التقليدي والإسلامي، وريادة الأعمال. تصدر المجلة مرتين سنويًا، وتهدف إلى توفير منصة علمية للباحثين والمتخصصين لتحكيم ونشر أعمالهم العلمية (باللغتين العربية والإنجليزية) من بحوث ودراسات متعمقة.

                            كما تسعى المجلة إلى تعزيز الوعي الثقافي والاقتصادي من خلال توفير هذه البحوث والدراسات للجمهور عبر وسائط النشر الورقية والإلكترونية، مما يتيح الوصول إليها بسهولة من قبل الأكاديميين، المهنيين، وصانعي القرار.</TabsContent>
                        <TabsContent value="vision">أن تكون مجلة علمية دولية رائدة في مجال الصناعة المالية  .</TabsContent>
                        <TabsContent value="message">نشر البحوث العلمية المحكمة في الصناعة المالية الإسلامية، وفق المعايير العالمية المعتمدة.

                        </TabsContent>
                        <TabsContent value="goals">
                            نشر البحوث العلمية المحكمة في الصناعة المالية . وفق المعايير العالمية المعتمدة.


                        </TabsContent>
                    </Tabs>
                </div>
            </div>

        </>
    )
}

export default AboutUs;