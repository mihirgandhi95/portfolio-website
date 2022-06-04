import { v4 as uuidv4 } from 'uuid';
import Mutualimg from '../images/mutualOfOmaha.png';
import Nantezimg from '../images/nantez.png';
import Princetonimg from '../images/princetonnew.png';
import Northeasternimg from '../images/neu.png';
import Ulsterimg from '../images/ulster.png';
import NWECimg from '../images/nwecMauritius.png';
import AIESECimg from '../images/aiesec.png';
import Angersimg from '../images/angers.png';
import Morganimg from '../images/morganstanley.png';

const experiences = [
  {
    id: uuidv4(),
    name: 'Associate Software Engineer - Morgan Stanley',
    desc: 'May 2022 - PRESENT',
    img: Morganimg,
    link: '',
  },
  {
    id: uuidv4(),
    name:
      'Consultant - Senior Software Engineer - Mutual of Omaha, Insurance Company',
    desc:
      'August 2020 - May 2022 - Micro services - Java, Spring, Docker, Kubernetes, NodeJS, VueJS, SAP BOE API, Okta',
    img: Mutualimg,
    link: '',
  },
  {
    id: uuidv4(),
    name: 'Full Stack Software Engineer - Nantez Inc',
    desc:
      'June 2020 - August 2020 - AWS S3, Lambda, IAM, API Gateway, DynamoDB, Cognito, Cloudfront, ReactJS,  NodeJS, ExpressJS',
    img: Nantezimg,
    link: '',
  },
  {
    id: uuidv4(),
    name:
      'Research Specialist and Lab Manager - Princeton Neuroscience Institute',
    desc:
      'July 2019 - June 2020 - Cluster Computing, AWS S3, IAM, JavaScript, Python, fMRI data processing, BrainIAK ',
    img: Princetonimg,
    link: '',
  },
  {
    id: uuidv4(),
    name: 'Research Specialist - Northeastern University',
    desc:
      'December 2017 - January 2019 - AWS, Java, ReactJS, AngularJS, Python, Machine Learning, Natural Language Processing',
    img: Northeasternimg,
    link: '',
  },
  {
    id: uuidv4(),
    name:
      'Research Intern - Intelligent Systems Research Center - Ulster University',
    desc:
      'May 2016 - August 2016 - Python, MATLAB, Scikit-Learn, R, Brainstorm, Fieldtrip ',
    img: Ulsterimg,
    link: '',
  },
  {
    id: uuidv4(),
    name:
      'Research Intern - Bioinformatics Summer School - University of Angers',
    desc:
      'June 2015 - July 2015 - Statistics and Classification for genomic studies, Optimization methods for bioinformatics and Computer Modeling of Living Systems ',
    img: Angersimg,
    link: '',
  },
  {
    id: uuidv4(),
    name: 'Team Leader - Intern - NWEC Mauritius',
    desc:
      'June 2014 - July 2014 -HTML5, CSS, JavaScript, Linux, PHP, and JQuery',
    img: NWECimg,
    link: '',
  },
  {
    id: uuidv4(),
    name: 'Software Developer - AIESEC Mumbai',
    desc:
      'January 2014 - May 2014 - Android Application Development - Java, Picasso, C, Bash Scripting',
    img: AIESECimg,
    link: '',
  },
];

export default experiences;
