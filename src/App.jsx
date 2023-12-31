
import './App.css'
import LineChart from './components/LineChart/LineChart'
// import DaisyNav from './components/DaisyNav/DaisyNav'
import NavBer from './components/NavBer/NavBer'
import Phones from './components/Phones/Phones'
import PriceOptions from './components/PriceOptions/PriceOptions'



function App() {
  

  return (
    <>
      <NavBer></NavBer>
      {/* <DaisyNav></DaisyNav> */}
      <h1 className='text-7xl font-bold bg-green-500'>React Concepts</h1>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <Phones></Phones>
    </>
  )
}

export default App
