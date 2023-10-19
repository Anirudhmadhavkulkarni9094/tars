import React from 'react'

function Modal({data , setModal , modal}) {
  return (
    <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true" onClick={()=>setModal(!modal)}>
  <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

  <div class="fixed inset-0 z-10 w-full overflow-y-auto">
    <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
      
      <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
        <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
          <div class="sm:flex sm:items-start">
            <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
              <div class="mt-2">
                <img src={data.urls.full}></img>
              </div>
            </div>
            <div className='flex flex-col justify-center items-center'>
            <div className='m-5 flex'>
                <img src={data.user.profile_image.small} className='rounded-full mr-1'></img>
                {data.user.username}
            </div>
            <div className='flex'>
                <img src={require('./Assets/Images/like.png')} className='like'></img><span>{data.likes}</span>
            </div>
            <a href={`${data.user.portfolio_url}`} className='bg-slate-800 px-3 py-2  m-5 rounded-xl text-white'>Portfolio</a>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</div>
  )
}

export default Modal