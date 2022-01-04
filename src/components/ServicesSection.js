import React from 'react';
import { MdDesktopMac, MdCode, MdPhonelinkSetup } from 'react-icons/md';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

const ServicesItemsStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServicesSection() {
  return (
    <ServicesItemsStyles>
      <div className="container">
        <SectionTitle subheading="What can I do for you?" heading="Services" />
        <div className="services__allItems">
          <ServicesSectionItem
            icon={<MdDesktopMac />}
            title="System Design"
            desc="I design systems keeping in mind the needs of the business/end users."
          />
          <ServicesSectionItem
            icon={<MdCode />}
            title="Website Development"
            desc="I also develop websites for businesses.
            I create websites with high performance and ensure the website is easily maintainable."
          />
          <ServicesSectionItem
            icon={<MdPhonelinkSetup />}
            title="Application Development"
            desc="I develop web applications using the Twelve-Factor App methodology."
          />
        </div>
      </div>
    </ServicesItemsStyles>
  );
}
