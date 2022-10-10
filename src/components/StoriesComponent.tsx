
import React, { useEffect, useRef, useState } from 'react'
import { TContent, TTypesContent } from '../types'
import { ImageComponent } from './ContentTypes/ImageComponent'
import { VideoComponent } from './ContentTypes/VideoComponent'
import { ProgressBar } from './ProgressBar'
import { useCount } from '../hook/useCount'
import { InnerComponent } from './ContentTypes/InnerComponent'
import TStoriesComponent from '../types/TStoriesComponent'
import styles from './StoriesComponent.module.css'

export const typeComponents: TTypesContent = {
    image: (storie: TContent) => <ImageComponent content={storie.url!} fullscreen={storie.fullscreen} />,
    youtube: (storie: TContent) => <iframe src={storie.url} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>,
    video: (storie: TContent, isPlay?: boolean) => <VideoComponent content={storie.url!} fullscreen={storie.fullscreen} isPlay={isPlay} />,
    jsx: (storie: TContent, isPlay?: boolean) => <InnerComponent storie={storie} isPlay={isPlay!} />,
}

export const StoriesComponent = ({ content, seconds, progress = true }: TStoriesComponent) => {
    let second = seconds * 10

    const { count, start, stop, reset, isPlay } = useCount(second)

    const [currentIndex, setCurrentIndex] = useState(0)
    const [storie, setstorie] = useState(content[currentIndex])

    const mouse = useRef<any>()

    useEffect(() => {
        if (count > second) {
            setCurrentIndex(currentIndex + 1)
            start()
            if (currentIndex === content.length - 1)
                setCurrentIndex(0)
        }
    }, [count, start]);

    useEffect(() => {
        setstorie(content[currentIndex])
    }, [currentIndex])

    const hadleClickLeft = (e: any) => {
        e.preventDefault()
        setCurrentIndex(currentIndex - 1)
        reset()
        if (currentIndex === 0)
            setCurrentIndex(0)
    }

    const hadleClickRight = (e: any) => {
        e.preventDefault()
        setCurrentIndex(currentIndex + 1)
        reset()
        if (currentIndex === content.length - 1)
            setCurrentIndex(0)
    }

    const pause = (e: React.MouseEvent | React.TouchEvent) => {
        e.preventDefault()
        mouse.current = setTimeout(() => {
            stop()
        }, 500)
    }

    const resume = (type: string) => (e: React.MouseEvent | React.TouchEvent) => {
        e.preventDefault()
        mouse.current && clearTimeout(mouse.current)
        if (!isPlay) {
            start()
        } else {
            type === 'left' ? hadleClickLeft(e) : hadleClickRight(e)
        }
    }
    return (
        <div className={styles.stories} style={{
            width: '360px',
            height: '640px',
        }}>
            <div className={`${styles.countprogressstories} ${!isPlay && progress ? styles.hiddenprogressstories : ''}`}>
                {
                    content.map((e, index: number) => {
                        return <ProgressBar key={index} tope={second} valor={
                            count
                        } active={
                            index === currentIndex ? 1 : (index < currentIndex ? 2 : 0)
                        } />
                    })
                }
            </div>
            <div className={styles.storiescontent}>
                {
                    typeComponents[storie.type](storie, isPlay)
                }
            </div>
            <div className={styles.storiesaction}>
                <div className={styles.storiesactionbutton}
                    onTouchStart={pause}
                    onTouchEnd={resume('left')}
                    onMouseDown={pause}
                    onMouseUp={resume('left')}
                    onMouseLeave={!isPlay ? resume('') : () => { }}
                ></div>
                <div className={styles.storiesactionbutton}
                    onTouchStart={pause}
                    onTouchEnd={resume('right')}
                    onMouseDown={pause}
                    onMouseUp={resume('right')}
                    onMouseLeave={!isPlay ? resume('') : () => { }}
                ></div>
            </div>
        </div>
    )
}