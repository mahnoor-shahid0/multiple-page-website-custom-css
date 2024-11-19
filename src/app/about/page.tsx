import React from 'react'

const About = () => {
  return (
    <div>
      <section className="about" style={{ backgroundImage: "url(aboutbackground.jpg)"}}>
        <div className="about-content">
          <h2 className="fade-in">About Us</h2>
          <p>Welcome to WristWonders, where we believe a watch is more than just
             an accessory it is a statement of style, precision, and craftsmanship.
             Our mission is to bring you a diverse selection of premium timepieces
             from around a globe, each chosen for its quality and unique design.
             whether you are a connoissuer or simply appreciate the beauty of a 
             well-made watch, we are here to help you find the perfect piece to 
             complement your personality and elevate your look.</p>
        </div>
      </section>
    </div>
  )
}

export default About
