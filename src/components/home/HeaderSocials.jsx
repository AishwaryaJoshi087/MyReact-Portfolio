import React from 'react'

const HeaderSocials = () => {
  return (
    
      <div className="home__socials">
        <a href="https://www.instagram.com/aishwaryajoshi_31/" className="home__socials-link" target="_blank" rel="noopener noreferrer"> 
        <i class="fa-brands fa-instagram"></i>
        </a>

        <a href="https://www.linkedin.com/in/aishwarya-joshi-2b2b5324b" className="home__socials-link"  target="_blank"  rel="noopener noreferrer" > 
        <i class="fa-brands fa-linkedin"></i>
        </a>

        <a href="https://github.com/AishwaryaJoshi087" className="home__socials-link" target="_blank"  rel="noopener noreferrer">
        <i class="fa-brands fa-github"></i>
        </a>

        {/* <a href="" className="home__socials-link" target="_blank">
        <i class="fa-brands fa-twitter"></i>
        </a> */}

        <a href="mailto:aishwaryajoshi762@gmail.com" className="home__socials-link" target="_blank"  rel="noopener noreferrer">
        <i class="fa-regular fa-envelope"></i>
        </a>
      </div>
  
  )
}
export default HeaderSocials
