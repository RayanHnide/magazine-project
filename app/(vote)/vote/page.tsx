"use client"
import CitySelector from "@/components/CitySelector"
import Image from "next/image"
import { useState } from "react"
import { cityToCountryCode, cities } from "@/app/data"
 
const VotePage = () => {
  
 
  const [search, setSearch] = useState("");
     const [selectedCity, setSelectedCity] = useState("");

  const filteredCities = cities.filter((city) => city.toLowerCase().includes(search.toLowerCase()));
  
    return <>
          
          <h1  className="responsive-text pt-10">
          اجعل صوتك يُحدِث الفرق – صوّت الآن لتتوج أفضل مدينة عربية
          </h1>

          <div className="flex justify-center items-center">
              <Image src={"/map.png"} alt="vote" width={1000} height={1000} /> 
          </div>

          <CitySelector 
           
          search={search}
          setSearch={setSearch}
          selectedCity={selectedCity}
          setSelectedCity={setSelectedCity}
          filteredCities={filteredCities}
          cityToCountryCode={cityToCountryCode}
          
          />
    
    </>
}

export default VotePage