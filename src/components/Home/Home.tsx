import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import DropDown, { Breed } from './dropdown/Dropdown';
import { breeds } from '../../data/breeds';

const Home = () => {
  const apiKey = 'live_CSt5mccR05NCebfAkLzp8yvQGcgw1WxQf5jWDcrNHrupajoTn6El9yMAvgM2FDgG'

  const [filters, setFilters] = useState<Breed[]>([])

  const handleFilterChange = (value: Breed) => {
    const newFilters = filters.findIndex(f => f.breed === value.breed) !== -1
    ? filters.filter((d) => d.breed !== value.breed) 
    : [...filters, value];  

  setFilters(newFilters);
  };

  return (
    <div className='flex flex-col'>
      <header className='flex flex-row justify-center gap-5 p-4 border-b'> 
        <Link to='images' className='block border-solid border-black border rounded-md p-5'>Images</Link>
        <Link to='Favorite' className='block border-solid border-black border rounded-md p-5'>Favorite</Link>
      </header>  
      <div className=' flex-1 pt-5 px-5'> 
        <div>
          <DropDown 
            list={breeds}
            onChange={handleFilterChange}
            selectedValue={filters}
          />
        </div>
        <Outlet/>
      </div>  
    </div>
  );
};

export default Home;