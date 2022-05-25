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
    }
  ],
};


export const HomepageStory = () =>
  <BrowserRouter>
    <Homepage {...commonProps} />;
  </BrowserRouter>

HomepageStory.storyName = "Homepage story";