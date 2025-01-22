import { useEffect, useRef } from 'react'
import { useRandomColor } from '../../hook/useRandomColor'

export const VideoComponent = ({ content, fullscreen = true, isPlay = true, muted=false }: { content: string, fullscreen?: boolean, isPlay?: boolean, muted?: boolean }) => {
    const randomBackground = useRandomColor();
    const background = !fullscreen ? randomBackground : "";
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
      if (video.current) {
        video.current.style.background = background;
      }
    }, [content, video, background]);


    return (
        <video key={content} ref={video} className='video' autoPlay loop muted={muted} style={{
            objectFit: fullscreen ? 'cover' : 'contain',
        }} ><source src={content} /></video>
    )


}
