import './App.css'
import Navbar from "./components/navbar";
import Main from './components/main';
import Trendy from "./components/trendy/trendy.jsx"
import background from "./assets/background.jpg"
import Selling from "./components/selling/selling.jsx"
import Customer from "./components/customer/customer.jsx"
import Best from './components/best/best.jsx';
import Footer from './components/footer.jsx';



function App() {


  return (
    <>
   
   <div className="h-[100vh]">
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
      <Best />

     <div className="relative bottom-410">
     <Footer />
     </div>

   </div>
  
   
     
      
      
     
     

    </>
  )
}

export default App
