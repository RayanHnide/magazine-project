
import FlagIcon from "react-flagkit";

import VoteModal from "./VoteModal";
import { CitySelectorProps } from "@/app/types/types";
import { Input } from "./ui/input";


const CitySelector: React.FC<CitySelectorProps> = ({
  search,
  setSearch,
  selectedCity,
  setSelectedCity,
  filteredCities,
  cityToCountryCode,
}) => {
 
 
  return (
    <div className="p-10 bg-primary flex justify-center items-center relative">
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl clip-path relative">
      <h2 className="text-center text-xl font-bold mb-4">اختر المدينة</h2>
      <Input
        type="text"
        placeholder="ابحث عن اسم المدينة"
        className="w-full p-2 mb-4 border rounded"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {filteredCities.length === 0 ? (
        <p className="text-center text-red-500">لم يتم العثور على مدينة مطابقة</p>
      ) : (
        <div className="grid grid-cols-2 gap-4">
          {filteredCities.map((city) => {
            const countryCode = cityToCountryCode[city] || "un";
            return (
              <label key={city} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="city"
                  value={city}
                  checked={selectedCity === city}
                  onChange={() => setSelectedCity(city)}
                  className="form-radio mx-3"
                />
                {countryCode && countryCode !== "un"  ? (
                  <FlagIcon country={countryCode.toUpperCase()} size={24} />
                ) : (
                  <span className="text-red-500">علم غير متوفر</span>
                )}
                <span>{city}</span>
              </label>
            );
          })}
        </div>
      )}
      <VoteModal selectedCity={selectedCity} disabled={!selectedCity} />
    </div>
  </div>
  );
};

export default CitySelector;
