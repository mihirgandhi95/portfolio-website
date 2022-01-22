import { v4 as uuidv4 } from 'uuid';
import UTrackerImg from '../images/utracker.png';
import RetireCalcImg from '../images/retirecalc.png';
import InventoryCalcImg from '../images/inventorycalcimgnew.png';
import BookBasketImg from '../images/bookbasketimg.png';
import CourseManagerImg from '../images/coursemanagerimg.png';
import PlagiarismDetectorImg from '../images/plagiarismdetectorimg.png';
import SearchEngineImg from '../images/searchengineimg.png';
import PersonProjectImg from '../images/personprojectimg.png';
import CassandraImg from '../images/cassandraimg.png';
import RedisImg from '../images/redisimg.png';
import LinuxClusterImg from '../images/linuxclusterimg.png';

const projects = [
  {
    id: uuidv4(),
    name: 'Highly Available Linux-CentOS Cluster',
    desc:
      'Created a highly available three node Linux Cluster using CentOS 7, RHEL Pacemaker, and hosting an enterprise web application using the Apache HTTP server, and a shared filesystem created from an iSCSI target server for shared storage access. Performed fencing by configuring STONITH(Shoot The Other Node In The Head) to ensure data integrity and avoid resource utilization by a faulty node in the cluster using pcs. Implemented a Virtual IP for accessing the enterprise web application using a shared IP address.',
    img: LinuxClusterImg,
    link: 'http://mihirgandhi.com/',
  },
  {
    id: uuidv4(),
    name: 'Shopping Cart - E-Commerce Website',
    desc:
      'Implemented Append Only File(AOF) and Redis Database Backup(RDB) File using a cron job functionality for persisting shopping cart items and REST API endpoints using Node.js and Express with EJS templates for querying Redis KeyValue stores using Redis Database Commands for Lists and Hashes.',
    img: RedisImg,
    link: 'http://mihirgandhi.com/',
  },
  {
    id: uuidv4(),
    name: 'Cassandra Server - ShoutApp',
    desc:
      'Designed and implemented a Distributed Database Management System using Apache Cassandra Core Server, Nodetool Admin CLI, and CQL Utility. Implemented a NodeJS application connected to the Cassandra Keyspace using the cassandra driver and using ExpressJS and Jade to execute single and batch queries on tables in the Cassandra Keyspace using CQL.',
    img: CassandraImg,
    link: 'http://mihirgandhi.com/',
  },
  {
    id: uuidv4(),
    name: 'The Person Project',
    desc:
      'Coded a 3000 line javascript study(the Implicit Association Test) for the Person Project which is a measure within social psychology designed to detect the strength of a person’s subconscious association between mental representations of objects(concepts) in memory and made it responsive to mobile platforms by quickly implementing the solution in JavaScript, Bootstrap and jQuery.',
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
