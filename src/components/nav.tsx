import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom'
import Home from '../components/home'
import New from '../components/new'
import Random from '../components/random'
import Auth from '../components/auth'
import Account from '../components/account'

const Nav:React.FC<any> = (isAuth: {}) =>{
if(!isAuth){
return (<Router>
<header>
<nav>
   <ul>
      <li><Link to="/">Главная</Link></li>
      <li><Link to="/new">Новинки</Link></li>
      <li><Link to="/random">Случайное</Link></li>
      <li><Link to="/auth">Войти</Link></li>
   </ul>
</nav>
</header>
<Switch>
   <Route path="/auth"> <Auth/>  </Route>
   <Route path="/new">  <New/>   </Route>
   <Route path="/random">  <Random/>   </Route>
   <Route path="/">  <Home/>  </Route>
</Switch>
</Router>)     
}
return (<Router>
<header>
<nav>
   <ul>
      <li><Link to="/">Главная</Link></li>
      <li><Link to="/new">Новинки</Link></li>
      <li><Link to="/random">Случайное</Link></li>
      <li><Link to="/account">Аккаунт</Link></li>
      <a href="/" >Выйти</a>
   </ul>
</nav>
</header>
<Switch>
   <Route path="/new">  <New/>   </Route>
   <Route path="/random">  <Random/>   </Route>
   <Route path="/account">  <Account/>  </Route>
   <Route path="/">  <Home/>  </Route>
   <Redirect to="/"/>
</Switch>

</Router>)
}

export default Nav;
