import React from 'react'

const AboutBox = () => {
  return (
    <div className="about__boxes grid">
        <div className="about__box">
            <i className="about__icon icon-bulb"></i>
            <div>
                <h3 className="about__title">Inquisitive</h3>
                {/* <span className="about__subtitle">project completed</span> */}
            </div>
        </div>

        <div className="about__box">
            <i className="about__icon icon-compass"></i>
            <div>
                <h3 className="about__title">Astute</h3>
                {/* <span className="about__subtitle">cup of coffee</span> */}
            </div>
        </div>

        <div className="about__box">
            <i className="about__icon icon-rocket"></i>
            <div>
                <h3 className="about__title">Innovator</h3>
                {/* <span className="about__subtitle">sdhs</span> */}
            </div>
        </div>

        <div className="about__box">
            <i className="about__icon icon-eye"></i>
            <div>
                <h3 className="about__title">Vigilant</h3>
                {/* <span className="about__subtitle">sdhs</span> */}
            </div>
        </div>
    </div>
  )
}

export default AboutBox
