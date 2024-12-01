import { GlobalProps } from "@/app/types/types"
  
const SectionsHeader = ({title,isRtl}:GlobalProps) => {
    return (
        <>
          <div className="mt-20 mb-10">
          <h1 className=" responsive-text">
            {title}
          </h1>

          <div className={`w-1/2 h-[8px] bg-gold/50 mt-2 ${isRtl ? 'ml-0 mr-auto' : 'mr-0 ml-auto'}`}>

          </div>
          </div>

       
        
          
           
                
        </>
    )
}

export default SectionsHeader;