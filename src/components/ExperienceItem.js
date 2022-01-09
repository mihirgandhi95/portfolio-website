import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ProjectImg from '../assets/images/projectImg.png';

const ExperienceItemStyles = styled.div`
  .experienceItem__img {
    width: 100%;
    height: 400px;
    border-radius: 12px;
    overflow: hidden;
    display: inline-block;
    border: 3px solid var(--gray-2);
    img {
      height: 100%;
    }
  }
  .experienceItem__info {
    margin-top: 1rem;
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 12px;
  }
  .experienceItem__title {
    font-size: 2.2rem;
  }
  .experienceItem__desc {
    font-size: 1.6rem;
    font-family: 'RobotoMono Regular';
    margin-top: 1rem;
  }
  .experienceButton {
    display: inline-block;
    font-size: 1.6rem;
    text-decoration: underline;
    margin: 2 rem 0;
    color: royalblue;
  }
  @media only screen and (max-width: 768px) {
    .experienceItem__img {
      height: 350px;
    }
  }
`;

export default function ExperienceItem({
  img = ProjectImg,
  title = 'Experience Name',
  desc = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  link,
}) {
  return (
    <ExperienceItemStyles>
      <Link to="/experiences" className="experienceItem__img">
        <img src={img} alt="experience img" />
      </Link>
      <div className="experienceItem__info">
        <Link to="#">
          <h3 className="experienceItem__title">{title}</h3>
        </Link>
        <p className="experienceItem__desc">{desc}</p>
        {link && (
          <a
            className="experienceButton"
            href={link}
            target="_blank"
            rel="noreferrer"
          >
            Open Experience
          </a>
        )}
      </div>
    </ExperienceItemStyles>
  );
}
