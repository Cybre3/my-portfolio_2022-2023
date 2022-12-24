import React from 'react';
import { NavLink } from 'react-router-dom';
import $ from 'jquery';
import './simpleProjects.css';

function SimpleProjects(props) {
  $(document).ready(function () {
    $('.carousel__face').hover(
      function () {
        $('.simple-projects-title-description').show();
      },
      function () {
        $('.simple-projects-title-description').hide();
      }
    );
  });

  return (
    <div className="simple-projects-background">
      <h1 className="projects-heading">PROJECTS</h1>
      <nav className="projects-navbar">
        <NavLink to="/projects/simple-projects">SIMPLE</NavLink>
        <NavLink to="/projects/intermediate-projects">INTERMEDIATE</NavLink>
        <NavLink to="/projects/capstone-projects">CAPSTONE</NavLink>
      </nav>
      <div className="simple-projects-title-description">
        <h2 className="simple-projects-title">TITLE OF PROJECT</h2>
        <p className="simple-projects-desciption">Some mumbo jumbo about projects in view</p>
      </div>
      <div className="project-preview"></div>
      <div className="simple-projects-container">
        <div className="simple-projects-carousel">
          <div className="carousel__face">
            <span>Testing</span>
          </div>
          <div className="carousel__face">
            <span>Out this</span>
          </div>
          <div className="carousel__face">
            <span>Carousel</span>
          </div>
          <div className="carousel__face">
            <span>Thing</span>
          </div>
          <div className="carousel__face">
            <span>for today</span>
          </div>
          <div className="carousel__face">
            <span>Hope it works</span>
          </div>
          <div className="carousel__face">
            <span>Hope it works</span>
          </div>
          <div className="carousel__face">
            <span>Hope it works</span>
          </div>
          <div className="carousel__face">
            <span>Hope it works</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SimpleProjects;
