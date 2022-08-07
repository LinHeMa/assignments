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
  const navClass = { open: 'nav show', close: 'nav' }
  const [isShow, setIsShow] = useState(false)
  const [show, setShow] = useState(navClass.close)
  const showMenuHandler = () => {
    if (isShow) {
      setShow(navClass.close)
      setIsShow(false)
    }
    if (!isShow) {
      setShow(navClass.open)
      setIsShow(true)
    }
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
        <NavList class={show} showMenuHandler={showMenuHandler} />
      </div>
    </div>
  )
}

const NavList = (props) => {
  // const closeMenuHandler = () => {
  //   const navList = document.querySelector('.nav')
  //   navList.classList.remove('show')
  // }
  return (
    <ul className={props.class}>
      <li className='nav_item first'>
        <a href='#'>item1</a>
        <a href='#' className='cross' onClick={props.showMenuHandler}>
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
  const [title, setTitle] = useState(true)
  const handleTitleChange = () => {
    title ? setTitle(false) : setTitle(true)
  }

  return (
    <div className='banner'>
      {title ? (
        <h2 className='banner_title' onClick={handleTitleChange}>
          Welcome Message
        </h2>
      ) : (
        <h2 className='banner_title' onClick={handleTitleChange}>
          Have a Good Time
        </h2>
      )}
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
