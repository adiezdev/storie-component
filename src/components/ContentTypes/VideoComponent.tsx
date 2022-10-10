import { useEffect, useRef } from 'react'
import { useRandomColor } from '../../hook/useRandomColor'

export const VideoComponent = ({ content, fullscreen = true, isPlay = true }: { content: string, fullscreen?: boolean, isPlay?: boolean }) => {
    const option = !fullscreen ? useRandomColor() : ''
    const video = useRef<HTMLVideoElement>(null)
    
    useEffect(() => {
        if (video.current) {
            if(!isPlay) {
                video.current.pause()
            }else{
                video.current.play()
            }
        }
    }, [isPlay])

    useEffect(() => {
        if (video.current)
            video.current.style.background = option
    }, [option , video])

    return (
        <video ref={video} className='video' autoPlay loop muted style={{
            objectFit: fullscreen ? 'cover' : 'contain',
        }} ><source src={content} /></video>
    )


}
