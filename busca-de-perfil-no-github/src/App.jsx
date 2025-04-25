import './assets/styles/App.css'
import GithubContainer from './components/GithubContainer'

function App() {
  return (
    <div className="relative overflow-hidden flex items-center justify-center w-screen h-screen bg-[#1F1F1F] font-nunito">
      <div
        className="absolute top-0 right-0 w-[700px] h-[700px] z-0"
        style={{
          background:
            "radial-gradient(circle at top right, rgba(0,92,255,0.4) 0%, rgba(0,92,255,0.1) 30%, transparent 70%)",
        }}
      ></div>
      <div
        className="absolute bottom-0 left-0 w-[700px] h-[700px] z-0"
        style={{
          background:
            "radial-gradient(circle at bottom left, rgba(0,92,255,0.4) 0%, rgba(0,92,255,0.1) 30%, transparent 70%)",
        }}
      ></div>

      <div className="absolute top-4 left-4 grid grid-cols-15 gap-1 z-0">
        <img src="./src/assets/img/Camada_1.png" alt="GitHub" className="w-[239px] h-[225px]" />
      </div>
      <GithubContainer />
    </div>
  )
}

export default App