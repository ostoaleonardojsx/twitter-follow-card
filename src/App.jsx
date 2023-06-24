import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
  {
    name: "Martin Garrix",
    userName: "MartinGarrix",
    isFollowing: true
  },
  {
    name: "Avicii",
    userName: "Avicii",
    isFollowing: true
  },
  {
    name: "Lost Frequencies",
    userName: "LFrequencies",
    isFollowing: false
  },
  {
    name: "AREA21",
    userName: "AREA21",
    isFollowing: true
  },
  {
    name: "Kygo",
    userName: "KygoMusic",
    isFollowing: false
  }
]

function App() {
  return (
    <section className="card-follow">
      <span className='title-cardfollow'>A quién seguir</span>
      {
        users.map(user => {
          const { userName, name, isFollowing } = user
          return (
            <TwitterFollowCard
              key={userName}
              userName={userName}
              initialIsFollowing={isFollowing}>
              {name}
            </TwitterFollowCard>
          )
        })
      }
    </section>
  )
}

export default App
