// import React from 'react'
const { createRoot } = ReactDOM
const { useState, useEffect } = React
const container = document.getElementById('root')
const root = createRoot(container)

function MyApp() {
  return (
    <div className='container'>
      <Header />
      <Banner />
      <Body />
    </div>
  )
}

// nav bar
const Header = () => {
  const showMenuHandler = () => {
    const navList = document.querySelector('.nav')
    navList.classList.add('show')
  }

  return (
    <div className='header'>
      {/* 左邊 */}
      <h1 className='logo'>
        <a href='#'>Website Title / logo</a>
      </h1>
      {/* 右邊 */}
      <div>
        <button className='nav_menu' onClick={showMenuHandler}>
          <span className='material-symbols-outlined'>menu</span>
        </button>
        <NavList />
      </div>
    </div>
  )
}

const NavList = () => {
  const closeMenuHandler = () => {
    const navList = document.querySelector('.nav')
    navList.classList.remove('show')
  }
  return (
    <ul className='nav'>
      <li className='nav_item first'>
        <a href='#'>item1</a>
        <a href='#' className='cross' onClick={closeMenuHandler}>
          X
        </a>
      </li>
      <li className='nav_item'>
        <a href='#'>item2</a>
      </li>
      <li className='nav_item'>
        <a href='#'>item3</a>
      </li>
      <li className='nav_item'>
        <a href='#'>item4</a>
      </li>
    </ul>
  )
}

//banner
const Banner = () => {
  return (
    <div className='banner'>
      <h2 className='banner_title'>Welcome Message</h2>
    </div>
  )
}

//body
const Body = () => {
  const [show, setShow] = useState(false)
  const showHandler = () => {
    show ? setShow(false) : setShow(true)
  }
  return (
    <div className='wrapper'>
      <h3 className='body_title'>Section Two</h3>
      <Box />
      <button href='#' className='call_to_action' onClick={showHandler}>
        Call to Action
      </button>
      {show ? <Box /> : ''}
    </div>
  )
}

//content box
const Box = () => {
  return (
    <ul className='content_box_ul'>
      <li className='content_box'>Content Box1</li>
      <li className='content_box'>Content Box2</li>
      <li className='content_box'>Content Box3</li>
      <li className='content_box'>Content Box4</li>
    </ul>
  )
}

root.render(<MyApp />)
