import BusinessPage from '../components/BusinessPage';

export default {
  title: 'BusinessPage',
};

const commonProps = {
  info: {
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
  nearbyPlaces: [
    {
      "id": "j3f93f93fj3jfj3fjjfj",
      "name": "Amazon",
      "description": "Amazon.com, Inc. is an American multinational technology company which focuses on e-commerce, cloud computing, digital streaming, and artificial intelligence. It has been referred to as one of the most influential economic and cultural forces in the world, and is one of the world's most valuable brands.",
      "phone": "+333 213 0209",
      "image": "https://picsum.photos/id/1/5616/3744/?blur=4",
      "email": "hey@amazon.com",
      "address": {
        "number": "26",
        "street": "Sveti Georgi",
        "zip": "1242",
        "city": "Sofia",
        "country": "Bulgaria"
      }
    }
  ],
};


export const BusinessPageStory = () => <BusinessPage {...commonProps} />;

BusinessPageStory.storyName = "BusinessPage story";