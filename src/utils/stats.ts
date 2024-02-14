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
  jobTitle: string;
  gitHub?: string;
  siteLink?: string;
  timeSpan: string;
}

export type Section = 'work_history' | 'projects' | 'about';

export const projects: ProjectItem[] = [
  {
    title: "Trader's Guild",
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    skills: ['MongoDB', 'Express', 'Node', 'React Native', 'JSON Web Tokens', 'GraphQL'],
    gitHub: 'https://github.com/brandta-1/traders-guild-native',
    siteLink: 'https://peaceful-citadel-67422-36a5c387efe8.herokuapp.com/'
  },
  {
    title: 'Brick That',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    skills: ['React Native'],
    gitHub: 'https://github.com/brandta-1/brick-that-native',
    siteLink: 'https://brick-that-pwa.vercel.app/'
  },
  {
    title: 'Arcade Assembly',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    skills: ['MongoDB', 'Express', 'Node', 'React', 'JSON Web Tokens', 'GraphQL'],
    gitHub: 'https://github.com/brandta-1/arcade-assembly',
    siteLink: 'https://arcade-assembly-c977bb949035.herokuapp.com/'
  }
];

export const work_history: WorkItem[] = [
  {
    title: 'We Vote',
    jobTitle: 'Full Stack Developer',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    skills: ['Linux', 'React', 'PostgreSQL', 'Python', 'Django'],
    gitHub: 'https://github.com/wevote/WeVoteServer',
    siteLink: 'https://wevote.us/',
    timeSpan: 'Oct 2023 - Present'
  },
  {
    title: 'LPL Financial',
    jobTitle: 'Associate Research Analyst',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    skills: ['Salesforce', 'VBA', 'Bloomberg Terminal', 'SQL'],
    timeSpan: 'May 2022 - Present'
  },
  {
    title: 'TIAA',
    jobTitle: 'Financial Solutions Associate',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    skills: [],
    timeSpan: 'May 2021 - April 2022'
  },
  {
    title: 'University of South Carolina',
    jobTitle: 'Lab Assistant',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    skills: ['Java'],
    timeSpan: 'May 2021 - April 2022'
  }
  /*
  {
    title: 'Highest Good Network',
    jobTitle: 'Full Stack Developer',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    skills: ['React', 'Node', 'Express', 'MongoDB'],
    timeSpan: 'Feb 2024 - Present'
  }
  */
];

export const about = {
  meta: {
    title: 'About This Site',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    skills: ['React', 'MUI', 'TypeScript'],
    gitHub: 'https://github.com/brandta-1/portfolio-react',
    siteLink: 'https://peaceful-citadel-67422-36a5c387efe8.herokuapp.com/'
  } as ProjectItem
};
