import React from 'react'

const Header = () => {

  const fuckUp = () => {
    document.getElementById('login').innerHTML = 'Fuck up'
  }

  return (
    <header>
      <div id="timer">00:00 left</div>
      <div id="login" onClick={fuckUp}>Log in/Sing up</div>
    </header>
  );
}
 
export default Header;