export interface GlobalProps {
    title: string;
    isRtl?:boolean;
    onClick?:()=>void;
    className?:string;
    disabled?:boolean;
}

export interface CardProps extends GlobalProps {
    link: string;
    isNew?: boolean;
    time: string;
    date: string;
    description:string;
    image:string;

}


export interface CitySelectorProps {
    
    search: string;
    setSearch: (value: string) => void;
    selectedCity?: string;
    setSelectedCity: (city: string) => void;
    filteredCities: string[];
    cityToCountryCode: { [key: string]: string };
  }

export interface VoteModalProps {
    selectedCity?: string;
    disabled?: boolean;
}