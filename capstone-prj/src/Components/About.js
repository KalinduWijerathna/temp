import React from 'react';
import '../Styles/About.css';
import {chef} from '../Assets/icons_assets'; 
import {chefs} from '../Assets/icons_assets'; 

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-text">
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
          Velit officia consequat duis enim velit mollit. Exercitation veniam consequat
          sunt nostrud amet.
        </p>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
          Velit officia consequat duis enim velit mollit.
        </p>
      </div>
      <div className="about-images">
        <img src={chefs} alt="Chef" className="image image-back" />
        <img src={chef} alt="Chefs" className="image image-front" />
      </div>
    </section>
  );
}

export { About };
