import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div className="g-menu">
    <h1>L'OpenLab for Kids</h1>
    <p>From the start of the new school year in September 2018: fun and creative workshops for babies & children aged from 0 to 11.</p>
    <p>What if our children could acquire English in the same way they learn their first language? What if they could explore the language, absorb it on their own terms in a safe and engaging environment, while taking part in creative and interactive activities? That is the idea behind L’Open Lab for Kids: fun and creative workshops where kids get to discover, create and experiment, all in English, in a nurturing environment.</p>
    <Link to="/workshops/">Go to Workshops</Link>
    <Link to="/pedagogy/">Go to Pedagogy</Link>
    <Link to="/team/">Go to Team</Link>
    <Link to="/holidays/">Go to Holidays</Link>
    <Link to="/contact/">Go to Contact</Link>
  </div>
)

export default IndexPage
