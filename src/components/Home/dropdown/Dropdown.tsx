import React, { useState } from "react";

export interface Breed {
  breed: string; 
  id: string;
}

interface DropDownButtonProps {
  list: Breed[];        
  selectedValue: Breed[]; 
  onChange: (value: Breed) => void;
  placeholder?: string;           
  label?: string;                 
}

const DropDown: React.FC<DropDownButtonProps> = ({
  list,
  selectedValue,
  onChange,
  placeholder = "Select an option",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="relative inline-block text-left">
        <h2>select the breeds to filter</h2>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          {selectedValue.length > 0
            ? `Selected (${selectedValue.length})`
            : "Select an option"}
        </button>

        {isOpen && (
          <div className="absolute h-80 left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
            
            <div className="py-1 h-80 overflow-y-auto">
              {list.map((item) => (
                <label
                  key={item.id}
                  className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  <input
                    type="checkbox"
                    className="mr-2"
                    checked={selectedValue.some((f) => f.breed === item.breed)}
                    onChange={() => onChange(item)}
                  />
                  {item.breed}
                </label>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default DropDown;