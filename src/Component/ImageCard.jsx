import React, { useState } from 'react';
import './Assets/Stylesheet/card.css';
import { motion, AnimatePresence } from 'framer-motion';

function ImageCard({ data, mode }) {
  const [Modal, setModal] = useState(false);
  const openModal = () => {
    setModal(!Modal);
  };

  return (
    <>
      
      <motion.div className='border-4 border-black card' onClick={openModal} initial={{ scale: 0.95 }} whileHover={{ scale: 1.05, rotate: '-2deg' }} transition={{ duration: 0.5, type: 'spring', damping: 6 }} >
        <img src={data.urls.thumb} alt='Thumbnail' className='w-full' />
        <div className='flex justify-between items-center'>
          <div className='flex gap-5 items-center'>
            <img src={data.user.profile_image.small} className='rounded-full profile' alt='profile'></img>
            <div className='pl-2'>
              <h1>{data.user.name}</h1>
              <i>@{data.user.username}</i>
            </div>  
          </div>
          
          <div className='flex likes gap-2'>
            <h1 className='text-xl'>&#128077;</h1>
            <h1 className='text-xl'>{data.likes}</h1>
          </div>
        
        </div>
        
      </motion.div>

      <AnimatePresence>
  {Modal && (
    <motion.div
      className='modal'
      onClick={openModal}
      exit={{ rotate: '360deg', scale: 0 }}
    >
      <div className='modal-content flex gap-10'>
        <img
          src={data.urls.regular}
          alt='fullsize'
          className='w-full h-64 md:w-64 object-cover full-img'
        />
        <div className='info flex flex-col md:w-44'>
          <div className='user-info'>
            <div className='flex gap-5'>
              <img src={data.user.profile_image.small} alt='UserAvatar' className='w-10 h-10 rounded-full' />
              <h1 className='username text-lg'>{data.user.username}</h1>
            </div>
            <h1 className='name text-lg'>
              {data.user.name} {data.user.lastname}
            </h1>
          </div>
          <p className='description '>{data.description}</p>
          <p className='created-at'>Created: {data.created_at}</p>
          <a href={data.links.download} className='download mt-4'>
            <i className='fas fa-download mr-1'></i> Download
          </a>
          <a
            className='px-3 py-2 bg-slate-500 text-white mt-2'
            href={`${data.user.portfolio_url}`}
          >
            Portfolio
          </a>
        </div>
      </div>
    </motion.div>
  )}
</AnimatePresence>

    </>
  );
}

export default ImageCard;
