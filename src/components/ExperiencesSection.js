import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import ExperienceItem from './ExperienceItem';
import SectionTitle from './SectionTitle';
import 'swiper/swiper-bundle.min.css';
import experiences from '../assets/data/experiences';

// install Swiper modules
SwiperCore.use([Navigation]);

const ExperienceSectionStyle = styled.div`
  padding: 10rem 0;
  .experiences__allItems {
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
      .experienceItem__img {
        width: 100%;
      }
    }
  }
`;

export default function ExperiencesSection() {
  // console.log(projects);
  return (
    <ExperienceSectionStyle>
      <div className="container">
        <SectionTitle
          subheading="some of my recent experiences"
          heading="Experiences"
        />
        <div className="experiences__allItems">
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
            {experiences.map((experience, index) => {
              if (index >= 18) return;
              return (
                <SwiperSlide key={experience.id}>
                  <ExperienceItem
                    title={experience.name}
                    img={experience.img}
                    desc={experience.desc}
                    link={experience.link}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </ExperienceSectionStyle>
  );
}
