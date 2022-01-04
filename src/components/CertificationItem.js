import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ProjectImg from '../assets/images/projectImg.png';

const CertificationItemStyles = styled.div`
  .certificationItem__img {
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
  .certificationItem__info {
    margin-top: 1rem;
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 12px;
  }
  .certificationItem__title {
    font-size: 2.2rem;
  }
  .certificationItem__desc {
    font-size: 1.6rem;
    font-family: 'RobotoMono Regular';
    margin-top: 1rem;
  }
  .certificationButton {
    display: inline-block;
    font-size: 1.6rem;
    text-decoration: underline;
    margin: 2 rem 0;
    color: royalblue;
  }
  @media only screen and (max-width: 768px) {
    .certificationItem__img {
      height: 350px;
    }
  }
`;

export default function CertificationItem({
  img = ProjectImg,
  title = 'Certification Name',
  desc = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  link,
}) {
  return (
    <CertificationItemStyles>
      <Link to="/certifications" className="certificationItem__img">
        <img src={img} alt="certification img" />
      </Link>
      <div className="certificationItem__info">
        <Link to="#">
          <h3 className="certificationItem__title">{title}</h3>
        </Link>
        <p className="certificationItem__desc">{desc}</p>
        {link && (
          <a
            className="certificationButton"
            href={link}
            target="_blank"
            rel="noreferrer"
          >
            Open Certification
          </a>
        )}
      </div>
    </CertificationItemStyles>
  );
}
