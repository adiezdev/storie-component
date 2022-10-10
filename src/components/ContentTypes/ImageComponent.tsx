
import { useCallback, useEffect, useState } from 'react'
import { useRandomColor } from '../../hook/useRandomColor';
import { Spinner } from '../Spinner';
export const ImageComponent = ({ content, fullscreen = true }: { content: string, fullscreen?: boolean }) => {
    const [bg, setBg] = useState('')
    const [imgSrc, setImgSrc] = useState('')

    const background = useRandomColor()

    useEffect(() => {
        if (!fullscreen)
            setBg(background)
    }, [content])


    const onLoad = useCallback(() => {
        setImgSrc(content);
    }, [content]);

    useEffect(() => {
        const img = new Image()
        img.src = content
        img.addEventListener('load', onLoad)

        return () => {
            img.removeEventListener('load', onLoad)
        }
    }, [content])

    if (imgSrc !== '') return (<img src={imgSrc} alt="image" style={{
        objectFit: fullscreen ? 'cover' : 'contain',
        background: bg,
    }} />)

    return (<Spinner />)
}
