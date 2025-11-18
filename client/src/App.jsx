 import React from 'react'
 import Routes from 'react-router-dom'
 import navbar from './component/navbar'
 import result from './page/result'
 import buycredit from './page/buycredit'
 import footer from './components/footer'

 
 const App = () => {
   return (
     <div className = 'px-4 sm :px-10 md :px14 lg:px-28 min-h-screen bg-gradient-to-b from-teal-50 to-pink-50'>

       <routes>
        <route path = '/' element = {<home />} />
        <route path = '/result' element = {<result />} />
        <route path = '/buy' element = {<buycredit />} />
       </routes>
       <footer/>
     </div>
   )  
 }
 
 export default App;
 