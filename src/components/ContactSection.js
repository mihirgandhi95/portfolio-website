import React from 'react';
import styled from 'styled-components';
import { MdEmail, MdLocalPhone } from 'react-icons/md';
import ContactInfoItem from './ContactInfoItem';
import SectionTitle from './SectionTitle';

const ContactSectionStyle = styled.div`
  padding: 10rem 0;
  .contactSection__wrapper {
    display: flex;
    gap: 5rem;
    margin-top: 7rem;
    justify-content: space-between;
    position: relative;
  }
  .contactSection__wrapper::after {
    position: absolute;
    // content: '';
    width: 2px;
    height: 50%;
    background-color: var(--gray-1);
    left: 50%;
    top: 30%;
    transform: translate(-50%, -50%);
  }

  @media only screen and (max-width: 768px) {
    .contactSection__wrapper {
      flex-direction: column;
    }
    .contactSection__wrapper::after {
      display: none;
    }
  }
`;

export default function ContactSection() {
  return (
    <ContactSectionStyle>
      <div className="container">
        <SectionTitle heading="contact" subheading="get in touch" />
        <div className="contactSection__wrapper">
          <ContactInfoItem icon={<MdLocalPhone />} text="+18575443159" />
          <ContactInfoItem icon={<MdEmail />} text="gandhimihirj@gmail.com" />
          <ContactInfoItem text="Philadelphia, Pennsylvania" />
          {/* <div className="left">
            <ContactInfoItem icon={<MdLocalPhone />} text="+8801231" />
            <ContactInfoItem icon={<MdEmail />} text="webcifar@gmail.com" />
            <ContactInfoItem text="Chittagong, Bangladesh" />
          </div> */}
          {/* <div className="right">
            <ContactForm />
          </div> */}
        </div>
      </div>
    </ContactSectionStyle>
  );
}
