import './App.css'
import Navbar from "./components/navbar";
import Main from './components/main';
import Trendy from "./components/trendy/trendy.jsx"
import background from "./assets/background.jpg"
import Selling from "./components/selling/selling.jsx"
import Customer from "./components/customer/customer.jsx"



function App() {


  return (
    <>
   
   <div
      className="bg-cover bg-center min-h-screen"
      style={{ backgroundImage: `url(${background})` }}
    >
      <Navbar />
      <Main />
      <Trendy />
    </div>
     
      <Selling />
      <Customer />
    

         
    </>
  )
}

export default App
