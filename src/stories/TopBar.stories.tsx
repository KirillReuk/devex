import TopBar from '../components/TopBar';
import { BrowserRouter } from 'react-router-dom';

export default {
  title: 'TopBar',
};

export const TopBarStory = () =>
  <BrowserRouter>
    <TopBar />
  </BrowserRouter>

TopBarStory.storyName = "TopBar story";