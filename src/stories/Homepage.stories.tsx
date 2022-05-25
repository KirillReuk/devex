import Homepage from '../components/Homepage';
import { BrowserRouter } from 'react-router-dom';

export default {
  title: 'Homepage',
};

const commonProps = {
  api: [
    {
      id: "e2nihr3i2nrin2n2",
      name: "Microsoft",
      description: "Microsoft Corporation is an American multinational technology corporation which produces computer software, consumer electronics, personal computers, and related services.",
      phone: "+838 5645 0209",
      image: "https://picsum.photos/id/1/5616/3744/?blur=4",
      email: "info@microsoft.com",
      address: {
        number: "32",
        street: "Hunters Way",
        zip: "1243",
        city: "Slough",
        country: "UK"
      }
    }, {
      id: "1234567890123456",
      name: "Netflix",
      description: "Netflix, Inc. is an American subscription streaming service and production company. Launched on August 29, 1997, it offers a film and television series library through distribution deals as well as its own productions, known as Netflix Originals.",
      phone: "+820 2343 4899",
      image: "https://upload.wikimedia.org/wikipedia/commons/3/36/Netflix_logo_%282%29.svg",
      email: "info@netflix.com",
      address: {
        number: "4",
        street: "Snowbird Lane",
        zip: "68460",
        city: "Waco, NE",
        country: "USA"
      }
    },
  ],
};


export const HomepageStory = () =>
  <BrowserRouter>
    <Homepage {...commonProps} />;
  </BrowserRouter>

HomepageStory.storyName = "Homepage story";