import React from 'react'
import Lottie from 'lottie-react'
import Animation from '../assets/Animation.json'

export const Notfound = () => {
  return (
    <div>
       <Lottie className="w-full h-screen" animationData={Animation} loop={true} />
    </div>
  )
}
