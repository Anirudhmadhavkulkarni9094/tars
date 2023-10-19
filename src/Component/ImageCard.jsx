import React , {useState} from 'react';
import './Assets/Stylesheet/card.css'
import {  motion } from 'framer-motion';
import Modal from './Modal';

function ImageCard({ data  , mode}) {
  const [modal , setModal] = useState(false);
  const handleModal = ()=>{
    setModal(!modal)
  }
  return (
    <div>
    <motion.div className="rounded-lg shadow-lg card rounded-xl m-5"
      initial = {{scale : 0.95}}
      onClick={handleModal}
      whileHover = {{rotate : "-2deg" , scale : 1}}
      transition={{
        duration : 1,
        type : "spring",
        damping : "2"
      }}
      >
      <img
        src={data.urls.thumb}
        alt={data.description || 'Image'}
        className="w-full h-auto rounded-lg"
        />
      <div className="m-1 flex justify-between items-center p-10">
        <div className='flex '>
          <img src={data.user.profile_image.small} className='rounded-full m-2'></img>
          <div className='text-sm'>
            <h1 className="text-lg font-semibold lg:text-md md:text-md break-words sm:text-sm">{data.user.name}</h1>
            <p className="text-gray-500 lg:text-lg md:text-md sm:text-sm break-words">@{data.user.username}</p>
          </div>
        </div>
        <div className='flex items-center w-5 gap-5'>
          <img src={!mode ? require('./Assets/Images/like.png') : require('./Assets/Images/like-dark.png')} className='like m-1 lg:text-lg md:text-md sm:text-sm'></img>
          <h1>{data.likes}</h1>
        </div>
      </div>
    </motion.div>
    {modal && 
    
    <motion.div className='modal'>
      <Modal data = {data} setModal = {setModal} modal={modal} mode = {mode}></Modal>
    </motion.div>}
      </div>
  );
}

export default ImageCard;
