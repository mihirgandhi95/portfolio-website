import { v4 as uuidv4 } from 'uuid';
import AWSimg from '../images/awscertifiedimg.png';
import BTAEthereumimg from '../images/ethereumBTAimg.png';
import BCPimg from '../images/CBPimg.png';
import Vaultimg from '../images/vaultcertifiedimg.png';
import Terraformimg from '../images/terraformcertifiedimg.png';
import Dockerimg from '../images/dockercertifiedimg.png';

const certifications = [
  {
    id: uuidv4(),
    name: 'Certified BlockChain Developer - Ethereum',
    desc:
      'Earners of the Certified Blockchain Developer Ethereum certification know how to plan and prepare production ready applications for the Ethereum blockchain, write, test, and deploy secure Solidity smart contracts, understand and work with Ethereum fees, work within the bounds and limitations of the Ethereum blockchain, use the essential tooling and systems needed to work with the Ethereum ecosystem.',
    img: BTAEthereumimg,
    link:
      'https://www.btacertified.com/dlink/ed892576de38edca31d8e0eefdd6ef65873edecd50040765809f43d289d1927c/certdisplayhash',
  },
  {
    id: uuidv4(),
    name: 'Hashicorp Certified Terraform Associate',
    desc:
      'Earners of the HashiCorp Certified: Terraform Associate certification know the basic concepts, skills, and use cases associated with open source HashiCorp Terraform. They understand and can utilize Terraform according to the certification objectives. Additionally, they understand why enterprises choose to extend Terraform Open Source with Terraform Enterprise to solve business critical objectives.',
    img: Terraformimg,
    link:
      'https://www.credly.com/badges/5104c2bb-9653-4fad-82a2-91887cd42003/public_url',
  },
  {
    id: uuidv4(),
    name: 'Bitcoin Certified Professional',
    desc:
      'A Certified Bitcoin Professional is knowledgeable about the Bitcoin blockchain, Bitcoin transactions, and how the Bitcoin network operates. CBPs are able to apply Bitcoin technology to their professional area of expertise and understand privacy aspects, double-spending, and other issues that relate to the currency.',
    img: BCPimg,
    link:
      'https://cryptoconsortium.org/lookup/?token=46a352&certification_code=CBP',
  },
  {
    id: uuidv4(),
    name: 'Docker Certified Associate',
    desc:
      'Associate Level Knowledge on using Docker for container orchestration and management in enterprise and non-enterprise use cases.',
    img: Dockerimg,
    link: 'https://credentials.docker.com/48e31d22-851f-4df2-a03f-71123707bb90',
  },
  {
    id: uuidv4(),
    name: 'Hashicorp Certified Vault Associate',
    desc:
      'Earners of the HashiCorp Certified: Vault Associate certification know the basic concepts, skills, and use cases associated with open source HashiCorp Vault. They understand and can utilize Vault according to the certification objectives. Additionally, they understand why enterprises choose to extend Vault Open Source with Vault Enterprise to solve business critical objectives.',
    img: Vaultimg,
    link:
      'https://www.credly.com/badges/a806dcd7-a482-4b90-93e6-1a1d2b568035/public_url',
  },
  {
    id: uuidv4(),
    name: 'AWS Certified Developer Associate',
    desc:
      'Earners of this certification have a comprehensive understanding of application life-cycle management. They demonstrated proficiency in writing applications with AWS service APIs, AWS CLI, and SDKs; using containers; and deploying with a CI/CD pipeline. Badge owners are able to develop, deploy, and debug cloud-based applications that follow AWS best practices.',
    img: AWSimg,
    link:
      'https://www.credly.com/badges/709bc11e-087f-4427-a1e0-09fde029dadc/public_url',
  },
];

export default certifications;
