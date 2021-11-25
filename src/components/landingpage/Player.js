// import React from 'react'
// import Vimeo from '@u-wave/react-vimeo';
// function Player() {
//     return (
//         <div className='w-full h-full'>
//      <Vimeo
//       video="649955654"
//        autoplay
//      />
//         </div>
//     )
// }

// export default Player
import React from "react"
import ReactPlayer from "react-player"

function Player() {
  return (
    <div className='w-full p-4  bg-gray-50 flex justify-center'
     style={{
          minHeight: "80vh",
        }}
    >
   
      <ReactPlayer
      className=''
  
       width='100%'
          height='100%'
        url="https://vimeo.com/649955654"
      />
    </div>
  )
}

export default Player
