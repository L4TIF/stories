import React from 'react'
import Story from './Story'
import { stories } from '../../public/stories'

const StoriesBar = () => {
  return (
    <div className="flex gap-4 overflow-x-auto p-4 scrollbar-hide">
      {stories.map((story, index) => (
        <Story  key={index} image={story.image} name={story.name} />
      ))}
    </div>
  )
}

export default StoriesBar