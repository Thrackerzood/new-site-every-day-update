import React from 'react'
import Nav from './components/nav'
import Footer from './components/footer'


const App:React.FC<any> = () =>{
const isAuth:boolean = false
const router = Nav(isAuth)
return (<>
  {router}
  <main>

  </main>
  <Footer>

  </Footer>
</>)  
}


export default App;
