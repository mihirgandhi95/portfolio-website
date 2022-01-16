import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import AboutImg from '../assets/images/about-page-img.jpg';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I am <span>Mihir Gandhi</span>
              </p>
              <h2 className="about__heading">
                A Full Stack Software Developer and Solution Architect
              </h2>
              <div className="about__info">
                <PText>
                  I am a software engineer specializing in frontend and backend
                  development for complex scalable web apps. I enjoy learning
                  about new technologies and using them to solve real world
                  problems.
                  <br />
                  <br />
                </PText>
              </div>
              {/* <Button btnText='Download CV' btnLink='#' /> */}
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>

              <AboutInfoItem
                title="Graduate University"
                items={[
                  'M.Sc. Computer Science - Northeastern University, Boston, Massachusetts, USA',
                ]}
              />
              <AboutInfoItem
                title="Undergraduate University"
                items={[
                  'B.Tech Computer Engineering - Mukesh Patel School of Technology, Management and Engineering, NMIMS University, Mumbai, India',
                ]}
              />
              <AboutInfoItem
                title="High School"
                items={['Kishinchand Chelaram (K.C.) College, Mumbai, India']}
              />
              <AboutInfoItem
                title="School"
                items={['New Era School, Mumbai, India']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skills</h1>

              <AboutInfoItem
                title="FrontEnd"
                items={[
                  'HTML',
                  'CSS',
                  'JavaScript',
                  'REACT',
                  'Vue',
                  'AngularJS',
                  'Python',
                ]}
              />
              <AboutInfoItem
                title="BackEnd"
                items={['Node', 'Express', 'PHP', 'SpringBoot']}
              />
              <AboutInfoItem
                title="DBMS"
                items={[
                  'MongoDB',
                  'Apache Cassandra',
                  'Redis',
                  'PostgreSQL',
                  'Microsoft SQL Server',
                  'MySQL',
                ]}
              />
              <AboutInfoItem
                title="DevOps"
                items={[
                  'Jenkins',
                  'Git',
                  'Docker',
                  'Kubernetes',
                  'Terraform',
                  'Vault',
                ]}
              />
              <AboutInfoItem title="Cloud" items={['AWS', 'GCP', 'Azure']} />
              <AboutInfoItem
                title="Misc"
                items={['WebRTC', 'Okta', 'Solidity']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Experiences</h1>

              <AboutInfoItem
                title="August 2020-Present"
                items={[
                  'Full Stack Software Developer - Consultant at Mutual of Omaha, Insurance Company',
                ]}
              />
              <AboutInfoItem
                title="June 2020 - August 2020"
                items={['Software Developer at Nantez Inc']}
              />
              <AboutInfoItem
                title="July 2019 - June 2020"
                items={[
                  'Research Specialist and Lab Manager - Princeton University - Web Development, Data and Social Neuroscience',
                ]}
              />
              <AboutInfoItem
                title="September 2017 - May 2019"
                items={[
                  'Computer Science Graduate Student and Research Assistant at Northeastern University',
                ]}
              />
              <AboutInfoItem
                title="May 2016 - August 2016"
                items={[
                  'Research Intern - Software and Programming - Intelligent Systems Research Center, Ulster University, Northern Ireland, UK ',
                ]}
              />
              <AboutInfoItem
                title="May 2014 - July 2014"
                items={[
                  'Team Leader - Software Development Team - AIESEC Mauritius ',
                ]}
              />
              <AboutInfoItem
                title="Jan 2014 - May 2014"
                items={['Android Developer at AIESEC Mumbai']}
              />
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}
