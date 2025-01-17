import { Store } from '@/app/types';
import { FaLocationArrow } from 'react-icons/fa';
import { MdPhoneInTalk } from 'react-icons/md';

interface OutletCardProps {
  key: number;
  outlet: Store;
}

const OutletCard: React.FC<OutletCardProps> = ({ outlet = {} }) => {
  console.log(outlet);
  return (
    <div className='w-full border bg-secondary text-center text-white pb-5'>
      <h1 className=' text-2xl font-semibold p-5'>{outlet?.storeName}</h1>
      <p className='px-5 py-2 font-medium'>{outlet?.location?.address}</p>
      <button className='mx-auto flex gap-2 items-center bg-yellow-400 hover:bg-yellow-500 active:bg-yellow-600 text-black font-bold py-2 px-4 rounded-lg border border-yellow-500 transition duration-200 ease-in-out'>
        <MdPhoneInTalk className='text-2xl' />

        <span>Call Now</span>
      </button>
      <button className='mx-auto my-2 flex gap-2 items-center bg-lime-400 hover:bg-lime-500 active:bg-lime-600 text-black font-bold py-2 px-4 rounded-lg border border-lime-500 transition duration-200 ease-in-out'>
        <FaLocationArrow />

        <span>View On Map</span>
      </button>
    </div>
  );
};

export default OutletCard;
