import { v4 as uuidv4 } from 'uuid';
import UTrackerImg from '../images/utracker.png';
import RetireCalcImg from '../images/retirecalc.png';
import InventoryCalcImg from '../images/inventorycalcimgnew.png';
import BookBasketImg from '../images/bookbasketimg.png';
import CourseManagerImg from '../images/coursemanagerimg.png';
import PlagiarismDetectorImg from '../images/plagiarismdetectorimg.png';
import SearchEngineImg from '../images/searchengineimg.png';
import PersonProjectImg from '../images/personprojectimg.png';
import ShoppingCartImg from '../images/shoppingcartimg.png';

const projects = [
  {
    id: uuidv4(),
    name: 'Shopping Cart - E-Commerce Website',
    desc:
      'The Application uses the Redis Server and Node.js with Express.js to perform CRUD Operations on store items.',
    img: ShoppingCartImg,
    link: 'http://mihirgandhi.com/',
  },
  {
    id: uuidv4(),
    name: 'The Person Project',
    desc:
      'The Person Project aims to understand why people do what they do. Our goal is to test specific hypotheses about human social cognition and behavior.',
    img: PersonProjectImg,
    link: 'https://www.thepersonproject.org/',
  },
  {
    id: uuidv4(),
    name: 'Github Search',
    desc:
      'An application that implements the GitHub API to search GitHub repositories and render results on the website.',
    img: UTrackerImg,
    link: 'http://searchgithub.mihirgandhi.com/',
  },
  {
    id: uuidv4(),
    name: 'Retirement Calculator',
    desc:
      'A web application to help people calculate the their retirement amount based on their current age, retirement age, principal, monthly contribution and annual return percentage.',
    img: RetireCalcImg,
    link: 'http://retirementcalculator.mihirgandhi.com/',
  },
  {
    id: uuidv4(),
    name: 'Inventory Tracker',
    desc:
      'Using this app you can track inventory for stores. The application saves the data using local browser cache so you can focus on more important work.',
    img: InventoryCalcImg,
    link: 'http://inventorytracker.mihirgandhi.com/',
  },
  {
    id: uuidv4(),
    name: 'BookBasket',
    desc:
      'This is a Book Management Application. The application implements the Google Books API and the New York Times API to allow reading books and writing reviews for books in the application.',
    img: BookBasketImg,
    link: 'https://www.youtube.com/watch?v=6lW49m0zcnY',
  },
  {
    id: uuidv4(),
    name: 'Plagiarism Detector',
    desc:
      'Java Spring Boot Application using the ANTLR4 library to parse python3 grammar, create an abstract syntax tree and check for Plagiarism in Code using different similarity measures.',
    img: PlagiarismDetectorImg,
    link: 'https://youtu.be/oiddTkVuYlI',
  },
  {
    id: uuidv4(),
    name: 'Course Manager',
    desc:
      'Java Spring Boot Application with AngularJS allowing students and professors to submit and grade assignments. ',
    img: CourseManagerImg,
    link: 'https://www.youtube.com/watch?v=FMNfkiJ1BaY',
  },
  {
    id: uuidv4(),
    name: 'Search Engine',
    desc:
      'Four search engines built using the BM-25, TF-IDF, smoothed query-likelihood models using Apache Lucene, Python and Javascript. ',
    img: SearchEngineImg,
    link:
      'https://github.com/mihirgandhi95/Information-Retreival-Search-Engine',
  },
];

export default projects;
