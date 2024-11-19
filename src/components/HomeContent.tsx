import React from 'react'

const HomeContent = () => {
  return (
    <div>
      <section className="hero"  style={{backgroundImage: "url(background.jpg)"}}>
        <div>
            <h1 className="fade-in">Welcome to WristWonders</h1>
            <p>Your one-stop shop for the best Watches</p>
            <button>Shop Now</button>
        </div>
      </section>
    </div>
  )
}

export default HomeContent

