export interface ContentItem {
  title: string;
  desc: string;
  skills: string[];
}

export interface ProjectItem extends ContentItem {
  gitHub?: string;
  siteLink?: string;
}

export interface WorkItem extends ContentItem {
  jobTitle?: string;
  gitHub?: string;
  siteLink?: string;
  timeSpan?: string;
}

export type Section = 'work_history' | 'projects' | 'about';

export const projects: ProjectItem[] = [
  {
    title: 'CS2 Container Tool (WIP)',
    desc: 'Webpage that displays the Return On Investment (ROI) for CS2 containers. The back end runs on Spring Boot, and is used to transform the float distributions for CS2, so they can be partitioned for ROI calculation. The front end displays the data with TypeScript and React, as well as third-party news via RSS.',
    skills: [
      'Hibernate',
      'RSS',
      'Spring Boot',
      'React',
      'Java',
      'MUI',
      'TypeScript',
      'MySQL',
      'Redux'
    ],
    gitHub: 'https://github.com/brandta-1/case-evaluator',
    siteLink: 'https://github.com/brandta-1/case-evaluator-front-end-redux'
  },
  {
    title: 'Camera State Machine',
    desc: 'Custom implementation of camera controls in C# for a Unity game under development',
    skills: ['C#']
  },
  {
    title: "Trader's Guild",
    desc: 'Web-based solution for item trading in Dark and Darker. This site uses JSON Web Tokens for authentication, and allows users to search and upload items into a MongoDB database via a GraphQL API. The front end client uses Apollo, and the back end runs on Node.',
    skills: ['MongoDB', 'Express', 'Node', 'React Native', 'JSON Web Tokens', 'GraphQL'],
    gitHub: 'https://github.com/brandta-1/traders-guild-native',
    siteLink: 'https://peaceful-citadel-67422-36a5c387efe8.herokuapp.com/'
  },
  {
    title: 'Brick That',
    desc: 'Image reformatting tool that uses JavaScript to turn images into digital lego mosaics.',
    skills: ['React Native'],
    gitHub: 'https://github.com/brandta-1/brick-that-native',
    siteLink: 'https://brick-that-pwa.vercel.app/'
  },
  {
    title: 'Arcade Assembly',
    desc: 'An online looking-for-group social media app. Final group project for my Full-Stack Web Development course at UNCC. Project leader of a team of 4. Managed team in a scrum style with week-long sprints. Designed and wrote model schema and GQL API.',
    skills: ['MongoDB', 'Express', 'Node', 'React', 'JSON Web Tokens', 'GraphQL'],
    gitHub: 'https://github.com/brandta-1/arcade-assembly',
    siteLink: 'https://arcade-assembly-c977bb949035.herokuapp.com/'
  }
];

export const work_history: WorkItem[] = [
  {
    title: 'Colorado State University',
    jobTitle: 'Full Stack Research Developer',
    desc: 'I oversee the end-to-end application lifecycle of 4 different applications utilized by thousands of employees at the Colorado Department of Public Health and Environment (CDPHE). My responsibilities include database architecture, creating server and client-side APIs, writing efficient client-facing views, database queries, deployment pipelines and more.',
    skills: [
      'Linux',
      'Redis',
      'React',
      'Docker',
      'Kubernetes',
      'PostgreSQL',
      'Python',
      'Redux',
      'Django'
    ],
    siteLink: 'https://erams.com/catena/tools/cdphe/',
    timeSpan: 'June 2024 - Present'
  },
  {
    title: 'One Community Global',
    jobTitle: 'Full Stack Developer',
    desc: 'I wrote full-stack features and assisted other developers via code reviews. My contributions included full-stack API debugging, an API that allows users to log their weekly work, repository documentation, and unit testing for React-Redux components and back-end functions.',
    skills: ['MongoDB', 'Node', 'Express', 'React', 'Jest', 'Axios', 'Bootstrap', 'Redux'],
    gitHub: 'https://github.com/OneCommunityGlobal/HighestGoodNetworkApp/',
    siteLink: 'https://www.onecommunityglobal.org/executive-summary/',
    timeSpan: 'Feb 2024 - Oct 2024'
  },
  {
    title: 'We Vote',
    jobTitle: 'Full Stack Developer',
    desc: 'I solve full-stack bug tickets and issues via Jira, GitHub, and Slack. My work involves the front end, the database, the back end, and the database admin site. My contributions currently include updating database records, writing back-end APIs, creating and updating user interfaces for both the web application and the admin site, and providing collaborative assistance to fellow engineers.',
    skills: ['Linux', 'React', 'Flux', 'jQuery', 'PostgreSQL', 'Python', 'Django'],
    gitHub: 'https://github.com/wevote/WeVoteServer',
    siteLink: 'https://wevote.us/',
    timeSpan: 'Oct 2023 - Oct 2024'
  },
  {
    title: 'LPL Financial',
    jobTitle: 'Associate Research Analyst',
    desc: 'I help advisors manage their practice by providing research on various financial instruments. I achieve this by using Salesforce CRM, VBA automation, Bloomberg Terminal and its Query Language, RSS feeds, and SQL. My work also includes high-net-worth account consulting, product sales, and more.',
    skills: ['RSS', 'Salesforce', 'VBA', 'SQL', 'Bloomberg Terminal'],
    timeSpan: 'May 2022 - June 2024'
  },
  {
    title: 'TIAA',
    jobTitle: 'Financial Solutions Associate',
    desc: 'Created client data visualizations using Tableau, presented fiscal year 2021 analysis to management. Utilized Excel and VBA scripting to develop dashboards that organized performance statistics of 25+ advisors.',
    skills: ['VBA', 'Tableau'],
    timeSpan: 'May 2021 - May 2022'
  },
  {
    title: 'University of South Carolina',
    jobTitle: 'Lab Assistant',
    desc: 'Taught labratory assignments to about 20 students per semester. Topics included basic Java syntax, object-oriented programming, data structures, and recursion. Developed custom learning plans and assignments for individual students. Fostered an environment where students could become efficient problem solvers.',
    skills: ['Java'],
    timeSpan: 'May 2019 - April 2021'
  }
];

export const about = {
  meta: {
    title: 'About This Site',
    desc: 'This site is written in TypeScript, and it uses the Material UI library for React.',
    skills: ['React', 'MUI', 'TypeScript']
  } as ProjectItem
};
