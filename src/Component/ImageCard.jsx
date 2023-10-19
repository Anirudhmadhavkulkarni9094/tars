import React , {useState} from 'react';
import './Assets/Stylesheet/card.css'
import {  motion } from 'framer-motion';
import Modal from './Modal';

function ImageCard({ data }) {
  const [modal , setModal] = useState(false);
  const handleModal = ()=>{
    setModal(!modal)
  }
  return (
    <div>
    <motion.div className="p-4 rounded-lg shadow-lg card rounded-xl m-5"
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
      <div className="mt-2 flex justify-between items-center">
        <div className='flex'>
          <img src={data.user.profile_image.small} className='rounded-full m-2'></img>
          <div className='text-sm'>
            <h1 className="text-lg font-semibold">{data.user.name}</h1>
            <p className="text-gray-500">@{data.user.username}</p>
          </div>
        </div>
        <div className='flex items-center w-5'>
          <img src={require('./Assets/Images/like.png')} className='like'></img>
          <h1>{data.likes}</h1>
        </div>
      </div>
    </motion.div>
    {modal && <div className='modal'>
      <Modal data = {data} setModal = {setModal} modal={modal}></Modal>
    </div>}
      </div>
  );
}

export default ImageCard;
