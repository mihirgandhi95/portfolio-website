import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';
import SectionTitle from '../components/SectionTitle';
import CertificationsInfo from '../assets/data/certifications';
import CertificationItem from '../components/CertificationItem';

const CertificationStyle = styled.div`
  padding: 10rem 0;
  .certifications__allItems {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 5rem;
    margin-top: 5rem;
  }
  .certifications__searchBar {
    position: relative;
    width: 300px;
    margin-top: 5rem;
  }
  .certifications__searchBar input {
    width: 100%;
    font-size: 2rem;
    padding: 0.8rem;
    color: var(--black);
    border-radius: 6px;
    outline: none;
    border: none;
  }
  .certifications__searchBar .searchIcon {
    position: absolute;
    width: 2rem;

    right: 1rem;
  }
  .certifications__searchBar .searchIcon path {
    color: var(--deep-dark);
  }
  @media only screen and (max-width: 768px) {
    .certifications__searchBar,
    .certifications__searchBar form,
    .certifications__searchBar input {
      width: 100%;
    }
  }
`;

export default function Certifications() {
  const [searchText, setSearchText] = useState('');
  const [certificationsData, setCertificationsData] = useState(
    CertificationsInfo
  );
  useEffect(() => {
    if (searchText === '') return;
    setCertificationsData(() =>
      CertificationsInfo.filter((item) =>
        item.name.toLowerCase().match(searchText.toLowerCase())
      )
    );
  }, [searchText]);
  const handleChange = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
    if (!e.target.value.length > 0) {
      setCertificationsData(CertificationsInfo);
    }
  };
  return (
    <>
      <CertificationStyle>
        <div className="container">
          <SectionTitle
            heading="Certifications"
            subheading="List of my Certifications"
          />
          <div className="certifications__searchBar">
            <form>
              <input
                type="text"
                value={searchText}
                onChange={handleChange}
                placeholder="Certification Name"
              />
              <MdSearch className="searchIcon" />
            </form>
          </div>
          <div className="certifications__allItems">
            {certificationsData.map((item) => (
              <CertificationItem
                key={item.id}
                title={item.name}
                desc={item.desc}
                img={item.img}
                link={item.link}
              />
            ))}
          </div>
        </div>
      </CertificationStyle>
    </>
  );
}
