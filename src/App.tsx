import FilterTab from './components/FilterTab'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className='bg-gray h-screen w-full relative flex flex-col items-center'>
      <div className='absolute w-full'>
        <Navbar />
      </div>
      <div className='relative z-0 top-20 w-[70%] '>
        <FilterTab />
      </div>
    </div>
  )
}

export default App
