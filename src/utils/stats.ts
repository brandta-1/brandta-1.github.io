export interface ContentItem {
  title: string;
  desc: string;
  skills: string[];
}

export interface ProjectItem extends ContentItem {
  gitHub: string;
  siteLink: string;
}

export interface WorkItem extends ContentItem {
  gitHub?: string;
  siteLink?: string;
  timeSpan: string;
}

export type Section = 'projects' | 'work_history';

export const projects: ProjectItem[] = [
  {
    title: 'Brick That',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    skills: ['React Native'],
    gitHub: 'https://github.com/brandta-1/brick-that-native',
    siteLink: 'https://brick-that-pwa.vercel.app/'
  },
  {
    title: "Trader's Guild",
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    skills: ['React Native', 'JSON Web Tokens', 'GraphQL', 'MongoDB', 'Express', 'Node'],
    gitHub: 'https://github.com/brandta-1/traders-guild-native',
    siteLink: 'https://peaceful-citadel-67422-36a5c387efe8.herokuapp.com/'
  },
  {
    title: 'Arcade Assembly',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    skills: ['React', 'JSON Web Tokens', 'GraphQL', 'MongoDB', 'Express', 'Node'],
    gitHub: 'https://github.com/brandta-1/arcade-assembly',
    siteLink: 'https://arcade-assembly-c977bb949035.herokuapp.com/'
  }
];

export const work_history: WorkItem[] = [
  {
    title: 'LPL Financial',
    desc: 'lorem ipsum',
    skills: ['none'],
    timeSpan: 'May 2022 - Present'
  }
];
