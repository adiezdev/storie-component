import { useEffect, useState } from "react"



export const useRandomColor = () => {
    const [gradient, setGradient] = useState('red')

    useEffect(() => {
        const randomColor = () => {
            const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`
            const seconcolor = `#${Math.floor(Math.random() * 16777215).toString(16)}`
            const gradient = `linear-gradient(to right, ${color}, ${seconcolor})`
            setGradient(gradient)
        }
        randomColor()
    }, [])

    return gradient
}
