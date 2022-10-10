import { TContent } from './types/TContent'
import './App.css'
import StoriesComponent from 'storie-component'

const array: Array<TContent> = [
  {
    type: 'image',
    url: 'https://images.unsplash.com/photo-1654524145280-576480eec479?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1976&q=80',
  },
  {
    type: 'video',
    url: 'https://cdn.cloudflare.steamstatic.com/steam/apps/256860561/movie480_vp9.webm?t=1646817716#t=15'
  },
  {
    type: 'jsx',
    content: ({ isPlay }) => {
      return <div >
        <h1>Hi Im Adiezdev👋</h1>
        <p>I am a web developer👨🏻‍💻</p>
        <p>Press</p>
        <p>state: {isPlay ? 'Play' : 'Paused'}</p>
      </div>
    },
    styles: {
      backgroundColor: '#252525',
      color: '#fff',
    }
  },
  {
    type: 'video',
    url: 'https://cdn.akamai.steamstatic.com/steam/apps/256742997/movie480.webm?t=1550167436',
    fullscreen: false,
  }
]

function App() {

  return (
    <div className="App">
      <div className='component'>
      <StoriesComponent content={array} seconds={14}/>
      </div>
    </div>
  )
}

export default App
