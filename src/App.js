import Header from './components/UI-Layout/Header'
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import { useState } from 'react'


const App = () => {

  const [ cartVisible, setCartVisible] = useState(false)

  const showCartHandler = () => {
    setCartVisible(true)
  }

  const hideCartHandler = () => {
    setCartVisible(false)
  }

  return (

    <>

    { cartVisible && <Cart onClose={hideCartHandler}/>}
     <Header onShowCart={showCartHandler}/>
     <main>
     <Meals/>
     </main>
   

    </>

  );
}

export default App;
