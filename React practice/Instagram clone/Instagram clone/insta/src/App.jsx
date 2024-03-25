import Sidebar from './Components/Sidebar/Sidebar'
import './App.css'
import Feed from '../src/Components/Feed/Feed'
import User from './Components/Messages/User'

function App() {

  return (
    <>
    <div className='bg-black text-white flex flex-rew gap-4'>
      <div className='w-[18%] h-screen border-slate-700  border-x-2'><Sidebar/></div>
      <div className='w-[52%]'><Feed/></div>
      <div className='w-[30%]'><User/></div>
    </div>

    </>
  )
}

export default App
