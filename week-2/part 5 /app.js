// import React from 'react'
const { createRoot } = ReactDOM
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
  return (
    <div className='header'>
      {/* 左邊 */}
      <h1 className='logo'>
        <a href='#'>Website Title / logo</a>
      </h1>
      {/* 右邊 */}
      <ul className='nav'>
        <li className='nav_menu'>
          <span class='material-symbols-outlined'>menu</span>
        </li>
        <li className='nav_item'>
          <a href='#'>item1</a>
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
    </div>
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
  return (
    <div className='wrapper'>
      <h3 className='body_title'>Section Two</h3>
      <ul className='content_box_ul'>
        <li className='content_box'>Content Box1</li>
        <li className='content_box'>Content Box2</li>
        <li className='content_box'>Content Box3</li>
        <li className='content_box'>Content Box4</li>
      </ul>
      <a href='#' className='call_to_action'>
        Call to Action
      </a>
    </div>
  )
}

root.render(<MyApp />)
