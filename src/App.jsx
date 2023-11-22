
import './App.css'
// import DaisyNav from './components/DaisyNav/DaisyNav'
import NavBer from './components/NavBer/NavBer'
import PriceOptions from './components/PriceOptions/PriceOptions'



function App() {
  

  return (
    <>
      <NavBer></NavBer>
      {/* <DaisyNav></DaisyNav> */}
      <h1 className='text-7xl font-bold bg-green-500'>React Concepts</h1>
      <PriceOptions></PriceOptions>
      
    </>
  )
}

export default App
