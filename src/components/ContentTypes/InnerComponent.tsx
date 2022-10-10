import { TContent } from "../../types"
import styles from '../StoriesComponent.module.css'

export const InnerComponent = ({ storie, isPlay }: { storie: TContent, isPlay: boolean }) => {
    const InnerComponent = storie.content!
    return (<div style={storie.styles!} className={styles.jsx}>
        <InnerComponent isPlay={isPlay} />
    </div>)
}
