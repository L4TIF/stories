import React from 'react'
import { Link } from 'react-router-dom'

const Story = ({ image, name }) => {
  return (
    <Link to={`/story/${name}`}>
      <div className="flex flex-col items-center gap-2">
        <div id="story-image" className="w-20 p-0.5 h-20 rounded-full bg-conic/decreasing from-violet-700 via-lime-300 to-violet-700">
          <img src={image} alt={name} className="w-full h-full object-cover rounded-full" />
        </div>
        <p className="text-sm text-gray-500">{name}</p>
      </div>
    </Link>
  )
}

export default Story