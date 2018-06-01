import React from 'react';
import Link from 'gatsby-link';

const IndexPage = () => (
  <div className="g-menu">
    <h1>L'OpenLab for Kids</h1>
    <p>This page has the purpose of testing CSS.
      What follows is a random list of elements, inserted only because we will style it.</p>

    <ul>
      <li>First list element</li>
      <li>Second list element</li>
      <li>Third list element</li>
    </ul>
    <h2>Section 1: Web Applications</h2>

    <p>This is the first section of this page, it is about web applications for Bioinformatics.</p>

    <h3>Input</h3>
    <p>This is the "Input" subsection.
      It focuses on how we get data from the user.
        This is usually done through a web form.</p>
    <h3>Output</h3>
    <p>This is the "Output" subsection</p>

    <h2>Section 2: Web Files</h2>
    <p>This is the second section of this page, it is about web files. How to create them, upload them, edit them.</p>

    <h3>Editing files</h3>
    <Link to="/workshops/">Go to Workshops</Link>
    <Link to="/pedagogy/">Go to Pedagogy</Link>
    <Link to="/team/">Go to Team</Link>
    <Link to="/holidays/">Go to Holidays</Link>
    <Link to="/contact/">Go to Contact</Link>
  </div>
)

export default IndexPage;
