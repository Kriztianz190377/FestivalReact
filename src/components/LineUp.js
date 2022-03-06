import React from 'react'

export const LineUp = () => {
  return (
      <>
      <section id="lineup" className="lineup">
        <h3>Line Up</h3>

        <p className="date">Fridey 21</p>
        <div className="container content-scenarios">

          <div className="scenarios rock bg-yellow">
            <p className="name-scenario">Scenario Rock</p>

            <ul className="calendar">
              <li>24:00 | <span>Metallica</span> </li>
              <li>22:00 | <span>Pearl Jam</span> </li>
              <li>20:00 | <span>Korn</span> </li>
              <li>19:00 | <span>Muse</span> </li>
              <li>18:00 | <span>Breaking Benjamin</span> </li>
              <li>17:00 | <span>30 Seconds To Mars</span> </li>
            </ul>

          </div>

          <div className="scenarios edm bg-green">
            <p className="name-scenario">Scenario EDM</p>

            <ul className="calendar">
              <li>24:00 | <span>Deadmau5</span> </li>
              <li>22:00 | <span>Tiësto</span> </li>
              <li>20:00 | <span>Hardwell</span> </li>
              <li>19:00 | <span>Dash Berlin</span> </li>
              <li>18:00 | <span>Fedde Legrand</span> </li>
              <li>17:00 | <span>Audien</span> </li>
            </ul>
          </div>
        </div>


       <p className="date">Fridey 21</p>
        <div className="container content-scenarios">

          <div className="scenarios rock bg-green">
            <p className="name-scenario">Scenario Rock</p>
            <ul className="calendar">
              <li>24:00 | <span>Red Hot Chili Peppers</span> </li>
              <li>22:00 | <span>The Killers</span> </li>
              <li>20:00 | <span>Deftones</span> </li>
              <li>19:00 | <span>Limp Bizkit</span> </li>
              <li>18:00 | <span>Papa Roach</span> </li>
              <li>17:00 | <span>Lamb Of God</span> </li>
            </ul>

          </div>

          <div className="scenarios edm bg-yellow">
            <p className="name-scenario">Scenario Rock</p>

            <ul className="calendar">
              <li>24:00 | <span>Paul Van Dyk</span> </li>
              <li>22:00 | <span>Armin Van Buuren</span> </li>
              <li>20:00 | <span>Above & Beyond</span> </li>
              <li>19:00 | <span>Eric Prydz</span> </li>
              <li>18:00 | <span>Ferry Corsten</span> </li>
              <li>17:00 | <span>Vini Vici</span> </li>
            </ul>
          </div>
        </div>
      </section>
      </>
  )
}
