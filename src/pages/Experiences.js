import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';
import SectionTitle from '../components/SectionTitle';
import ExperiencesInfo from '../assets/data/experiences';
import ExperienceItem from '../components/ExperienceItem';

const ExperienceStyle = styled.div`
  padding: 10rem 0;
  .experiences__allItems {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 5rem;
    margin-top: 5rem;
  }
  .experiences__searchBar {
    position: relative;
    width: 300px;
    margin-top: 5rem;
  }
  .experiences__searchBar input {
    width: 100%;
    font-size: 2rem;
    padding: 0.8rem;
    color: var(--black);
    border-radius: 6px;
    outline: none;
    border: none;
  }
  .experiences__searchBar .searchIcon {
    position: absolute;
    width: 2rem;

    right: 1rem;
  }
  .experiences__searchBar .searchIcon path {
    color: var(--deep-dark);
  }
  @media only screen and (max-width: 768px) {
    .experiences__searchBar,
    .experiences__searchBar form,
    .experiences__searchBar input {
      width: 100%;
    }
  }
`;

export default function Experiences() {
  const [searchText, setSearchText] = useState('');
  const [experiencesData, setExperiencesData] = useState(ExperiencesInfo);
  useEffect(() => {
    if (searchText === '') return;
    setExperiencesData(() =>
      ExperiencesInfo.filter((item) =>
        item.name.toLowerCase().match(searchText.toLowerCase())
      )
    );
  }, [searchText]);
  const handleChange = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
    if (!e.target.value.length > 0) {
      setExperiencesData(ExperiencesInfo);
    }
  };
  return (
    <>
      <ExperienceStyle>
        <div className="container">
          <SectionTitle
            heading="Experiences"
            subheading="List of my Experiences"
          />
          <div className="experiences__searchBar">
            <form>
              <input
                type="text"
                value={searchText}
                onChange={handleChange}
                placeholder="Experience Name"
              />
              <MdSearch className="searchIcon" />
            </form>
          </div>
          <div className="experiences__allItems">
            {experiencesData.map((item) => (
              <ExperienceItem
                key={item.id}
                title={item.name}
                desc={item.desc}
                img={item.img}
                link={item.link}
              />
            ))}
          </div>
        </div>
      </ExperienceStyle>
    </>
  );
}
