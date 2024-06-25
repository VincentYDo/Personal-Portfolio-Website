import monitoring from '../../assets/portfolioPics/monitoring.png'
import gasStation from '../../assets/portfolioPics/gasStation.jpg'
import bulldog from '../../assets/portfolioPics/bulldog.jpg'
import gatheredPeople from '../../assets/portfolioPics/gatheredPeople.jpg'
import websiteDesign from '../../assets/portfolioPics/websiteDesign.jpg'

export const responsiveSettings = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 144 },
      items: 2
    },
    desktop: {
      breakpoint: { max: 1440, min: 800 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };


export const data = [
    {   id:1,
        name: 'Kafkometry',
        img: monitoring,
        description: 'A web application that allows users to track target metrics in their Kafka Clusters.',
        techStack: ['React', 'JavaScript', 'HTML', 'CSS', 'Node.js', 'Express.js', 'Kafka', 'Docker', 'MongoDB'],
    },
    {   id:2,
        name: 'Find-My-Fuel',
        img: gasStation,
        description: 'A web application that allows users to find the nearest fuel stations to them.',
        techStack: ['React', 'JavaScript', 'HTML', 'CSS', 'Node.js', 'Express.js', 'Kafka', 'Docker', 'MongoDB'],
    },
    {   id:3,
        name: ' Frenchies',
        img: bulldog,
        description: 'A doggy dating app meant to connect people based on the dog or dogs that they have.',
        techStack: ['React', 'JavaScript', 'HTML', 'CSS', 'Node.js', 'Express.js', 'Kafka', 'Docker', 'MongoDB'],
    },
    {   id:4,
        name: 'Scratch',
        img: gatheredPeople,
        description: 'A web application meant to allow users to sign up for activities and receive notifications when the required number of people is reached.',
        techStack: ['React', 'JavaScript', 'HTML', 'CSS', 'Node.js', 'Express.js', 'Kafka', 'Docker', 'MongoDB'],
    },
    {   id:5,
        name: 'Online Portfolio',
        img: websiteDesign,
        description: 'Online portfolio created using React.js. Meant to showcase my frontend skills and prior work.',
        techStack: ['React', 'JavaScript', 'HTML', 'CSS', 'Node.js', 'Express.js', 'Kafka', 'Docker', 'MongoDB'],
    }

];

