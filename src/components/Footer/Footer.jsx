import React from 'react'
import "./footer.css"
import {AiFillTwitterCircle} from "react-icons/ai"
import {BsWhatsapp} from "react-icons/bs"
import {SiGmail} from "react-icons/si"
const Footer = () => {
  return (
    <footer>
    <div>

      Ishank Pathak
    </div>
      <div className='footer-icon'>
      
      <a href='https://twitter.com' target='_blank'>
        <AiFillTwitterCircle/>
      </a>

      <a href='https://whatsapp.com' target='_blank'>
        <BsWhatsapp/>
      </a>

      <a href='https://gmail.com' target='_blank'>
        <SiGmail/>
      </a>

      </div>
    </footer>
  )
}

export default Footer
