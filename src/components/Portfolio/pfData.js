import kafkometryCardImg from '../../assets/portfolioPics/kafkometryCardImg.jpeg';
import findMyFuelCardImg from '../../assets/portfolioPics/findMyFuelCardImg.png';
import frenchieCardImg from '../../assets/portfolioPics/frenchieCardImg.jpeg';
import scratchCardImg from '../../assets/portfolioPics/scratchCardImg.png';

export const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1440 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 1440, min: 800 },
      items: 4
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
        img: kafkometryCardImg,
        description: 'A web application that allows users to track target metrics in their Kafka Clusters.',
        techStack: ['React', 'JavaScript', 'HTML', 'CSS', 'Node.js', 'Express.js', 'Kafka', 'Docker', 'MongoDB'],
    },
    {   id:2,
        name: 'Find-My-Fuel',
        img: findMyFuelCardImg,
        description: 'A web application that allows users to find the nearest fuel stations to them.',
        techStack: ['React', 'JavaScript', 'HTML', 'CSS', 'Node.js', 'Express.js', 'Kafka', 'Docker', 'MongoDB'],
    },
    {   id:3,
        name: ' Frenchies',
        img: frenchieCardImg,
        description: 'A web application that allows users to find local restaurants in their area.',
        techStack: ['React', 'JavaScript', 'HTML', 'CSS', 'Node.js', 'Express.js', 'Kafka', 'Docker', 'MongoDB'],
    },
    {   id:4,
        name: 'Scratch',
        img: scratchCardImg,
        description: 'A web application that allows users to find local restaurants in their area.',
        techStack: ['React', 'JavaScript', 'HTML', 'CSS', 'Node.js', 'Express.js', 'Kafka', 'Docker', 'MongoDB'],
    },
    {   id:5,
        name: 'Online Portfolio',
        img: scratchCardImg,
        description: 'Online portfolio created using React.js. Meant to showcase my frontend skills and prior work.',
        techStack: ['React', 'JavaScript', 'HTML', 'CSS', 'Node.js', 'Express.js', 'Kafka', 'Docker', 'MongoDB'],
    }

];

