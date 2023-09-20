import { BiSearch } from 'react-icons/bi';
import { AiOutlinePlus } from 'react-icons/ai';
import profile from '../assest/icons/profile.png'
import emoji from '../assest/icons/emoji.png'
import Image from 'next/image';


const Searchbookings = () => {
  return (
    <div className="pl-9 py-4 flex gap-[800px]" >

      <div className='flex gap-5'>
        {/* Search bookings Start */}
        <div  className='relative'>
          <input
            type="search"
            placeholder="Search bookings"
            className=" input input-bordered rounded-full placeholder:font-semibold placeholder:text-lg  placeholder:text-gray-300 focus:outline-none  pl-5 w-[331px] h-11 max-w-xs shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
          />
          <BiSearch type='submit' className='absolute top-[4px] right-1 searchIcon w-9 h-9 p-2 rounded-full text-white cursor-pointer'></BiSearch>
        </div>
        {/* Search bookings end */}

        {/* New Booking Start  */}
        <div className='cursor-pointer newBookingBg flex justify-center items-center rounded-full gap-3 text-white w-[173px] h-11 shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
            <AiOutlinePlus className='font-semibold text-white w-4 h-4'></AiOutlinePlus>
            <span className='text-lg font-semibold'>New Booking</span>
        </div>
        {/* New Booking End */}
      </div>

      {/* profile section start  */}
        <div className='rounded-full w-[168px] h-11 flex justify-center items-center gap-2 shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
            <Image src={profile}></Image>
            <span className='text-base font-normal'>Hello Lokesh!</span>
            <Image src={emoji}  className='w-3 h-3'></Image>
        </div>
      {/* profile section end  */}
    </div>
  );
};

export default Searchbookings;
