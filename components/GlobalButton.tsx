import { Button } from "@/components/ui/button"
import { GlobalProps } from "@/app/types/types"

const GlobalButton = ({title,onClick,className,disabled}:GlobalProps) => {
    return (
        <>
            <Button onClick={onClick} className={`${className} ${disabled ? "bg-gray text-white" : "bg-gold text-black"}  rounded-md hover:bg-gold/90 `}>
            {title}
            </Button>
        </>
    )
}

export default GlobalButton;