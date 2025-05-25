import React, { useEffect, useState, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { stories } from '../public/stories'
import { ArrowLeft, Ellipsis } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const StoryPage = () => {
    const navigate = useNavigate()
    const { name } = useParams()
    const story = stories.find(story => story.name === name)
    const [currentIndex, setCurrentIndex] = useState(story.id)
    const [horizontalLine, setHorizontalLine] = useState(0)
    const timeoutRef = useRef(null)

    useEffect(() => {
        console.log(stories.length, currentIndex)
        if (timeoutRef.current) clearTimeout(timeoutRef.current)
        timeoutRef.current = setTimeout(() => {
            if (horizontalLine < 100) setHorizontalLine(horizontalLine + 10)
            if (currentIndex > stories.length) return navigate(`/`)
        }, 500)


        if (horizontalLine === 100 && currentIndex < stories.length) {
            handleNextStory()
        }
    }, [horizontalLine, currentIndex])


    const handleNextStory = () => {
        clearTimeout(timeoutRef.current)
        setHorizontalLine(0)
        navigate(`/story/${stories[currentIndex + 1].name}`)
        setCurrentIndex(currentIndex + 1)

    }
    const handlePreviousStory = () => {
        clearTimeout(timeoutRef.current)
        setHorizontalLine(0)
        navigate(`/story/${stories[currentIndex - 1].name}`)
        setCurrentIndex(currentIndex - 1)

    }

    const handleStory = (e) => {
        if (e.clientX > 100) handleNextStory()
        else handlePreviousStory()
    }


    return (
        <div className="flex flex-col items-center h-screen py-4 px-6">
            <div className="flex items-center justify-between w-full px-4">
                <button className="text-gray-500" onClick={() => navigate(`/`)}>
                    <ArrowLeft className="w-6 h-6" />
                </button>
                <div className="flex items-center gap-2">
                    <p className="text-lg font-bold">{story.name}</p>
                </div>
                <button className="text-gray-500">
                    <Ellipsis className="w-6 h-6" />
                </button>
            </div>

            <div className="w-full h-1 bg-gray-200 rounded-full">
                <div className="w-1/2 h-full bg-blue-500 rounded-full" style={{ width: `${horizontalLine}%` }}></div>
            </div>

            <img src={story.image} alt={story.name} onClick={handleStory} className="w-full h-[90%] object-cover" />
        </div>
    )
}

export default StoryPage