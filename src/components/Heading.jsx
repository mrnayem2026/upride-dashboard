import Image from 'next/image';
import ViewBookingImage from '../assest/icons/booking.png'

const Heading = () => {
    return (
        <div className='pl-10 py-10 flex gap-4'>
            <h1 className='text-3xl font-bold'>View Bookings</h1>
            <Image src={ViewBookingImage} alt='ViewBookingImage'></Image>
        </div>
    );
};

export default Heading;