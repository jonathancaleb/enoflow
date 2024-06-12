import {
  ClipboardCheckIcon,
  DiamondIcon,
  Edit3Icon,
  ListChecksIcon,
} from 'lucide-react';

export const constants = {
  name: 'Enoflow - Rethinking Creativity & Productivity',
  shortName: 'Enoflow',
  tagline: 'Rethinking Creativity & Productivity',
  description:
    'Enoflow is a productivity platform including many tools people need to be productive and stay on top of their work such as note taking, task management, and more.',
  twitter_handle: '@Enoflow_run',
  github_repo: 'https://github.com/jonathancaleb/enoflow',
  domain: 'Enoflow.run',
  discord: 'https://discord.gg/ewKmQd8kYm',
  twitter: 'https://x.com/Enoflow_run',
};

export const features = (iconSize: number) => [
  {
    icon: <Edit3Icon size={iconSize} />,
    title: 'Note Taking',
    description:
      'Write your study notes and let Enoflow take care of the rest.',
  },
  {
    icon: <DiamondIcon size={iconSize} />,
    title: 'Flashcards',
    description:
      'Create flashcards with reminders or let AI auto-suggest them for you.',
  },
  {
    icon: <ListChecksIcon size={iconSize} />,
    title: 'Task Management',
    description:
      'Create module specific tasks to keep on track with what you need to do.',
  },
  {
    icon: <ClipboardCheckIcon size={iconSize} />,
    title: 'Grade Tracking',
    description: 'Find out what you need to achieve to stay in progression.',
  },
];
