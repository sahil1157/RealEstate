import React from 'react'
// import Navigation from './Components/NavBar/Navigation'
import NAVs from './Components/NavBar/NAVs'
import Footer1 from './Components/Footer/Footer1'


const App = () => {

  return (
    <div className='relative min-h-[100vh] flex flex-col'>
      <NAVs />
      <div className='mt-auto w-full'>
        <Footer1 />
      </div>
    </div>
  )
}

export default App
