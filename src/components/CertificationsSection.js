import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import CertificationItem from './CertificationItem';
import SectionTitle from './SectionTitle';
import 'swiper/swiper-bundle.min.css';
import certifications from '../assets/data/certifications';

// install Swiper modules
SwiperCore.use([Navigation]);

const CertificationSectionStyle = styled.div`
  padding: 10rem 0;
  .certifications__allItems {
    display: flex;
    gap: 3rem;
    margin-top: 5rem;
  }
  .swiper-container {
    padding-top: 8rem;
    max-width: 100%;
  }
  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    height: 50px;
    width: 50px;
    background: var(--deep-dark);
    z-index: 10;
    right: 60px;
    left: auto;
    top: 0;
    transform: translateY(50%);
    color: var(--gray-1);
    border-radius: 8px;
  }
  .swiper-button-next {
    right: 0;
  }
  .swiper-button-prev::after,
  .swiper-button-next::after {
    font-size: 2rem;
  }
  @media only screen and (max-width: 768px) {
    .projects__allItems {
      flex-direction: column;
      max-width: 400px;
      margin: 0 auto;
      margin-top: 7rem;
      gap: 5rem;
      .certificationItem__img {
        width: 100%;
      }
    }
  }
`;

export default function CertificationsSection() {
  // console.log(projects);
  return (
    <CertificationSectionStyle>
      <div className="container">
        <SectionTitle
          subheading="some of my recent certifications"
          heading="Certifications"
        />
        <div className="certifications__allItems">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            navigation
            breakpoints={{
              // when window width is >= 640px
              640: {
                slidesPerView: 1,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 2,
              },
              // when window width is >= 1200px
              1200: {
                slidesPerView: 3,
              },
            }}
          >
            {certifications.map((certification, index) => {
              if (index >= 8) return;
              return (
                <SwiperSlide key={certification.id}>
                  <CertificationItem
                    title={certification.name}
                    img={certification.img}
                    desc={certification.desc}
                    link={certification.link}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </CertificationSectionStyle>
  );
}