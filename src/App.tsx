import React from 'react'
import { TContent } from './types/TContent'
import './App.css'
import { StoriesComponent } from './components/StoriesComponent';

const array: Array<TContent> = [
  {
    type: 'image',
    url: 'https://images.unsplash.com/photo-1519241678948-28f18681ce14?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    type: 'youtube',
    url: 'https://www.youtube.com/embed/SbAKYgfYET8',
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
    url: 'https://video-ssl.itunes.apple.com/itunes-assets/Video115/v4/5f/36/04/5f36047c-bdd8-a09b-061c-83e3ddb3853e/mzvf_4552267264981247503.640x356.h264lc.U.p.m4v',
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
        <StoriesComponent content={array} seconds={14} />
      </div>
    </div>
  )
}

export default App
