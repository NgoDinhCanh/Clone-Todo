// assets
import { AiOutlineChrome, AiOutlineQuestionCircle } from 'react-icons/ai';

// icons
const icons = {
  AiOutlineChrome,
  AiOutlineQuestionCircle,
};

const support = {
  id: 'support',
  title: 'Support',
  type: 'group',
  children: [
    {
      id: 'sample-page',
      title: 'Sample Page',
      type: 'item',
      url: '/',
      icon: icons.AiOutlineChrome,
    },
    {
      id: 'documentation',
      title: 'Documentation',
      type: 'item',
      url: '/',
      icon: icons.AiOutlineQuestionCircle,
      external: true,
      target: true,
    },
  ],
};

export default support;
