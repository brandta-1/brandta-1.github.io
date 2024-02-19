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
  jobTitle?: string;
  gitHub?: string;
  siteLink?: string;
  timeSpan?: string;
}

export type Section = 'work_history' | 'projects' | 'about';

export const projects: ProjectItem[] = [
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
    title: 'One Community Global',
    jobTitle: 'Full Stack Developer',
    desc: 'I  assist other developers and write code reviews for front end and back end pull requests via GitHub and Slack. My work involves the front end, the database, and the back end. My current contributions include full stack API debugging, repository documentation, and unit testing for React components and back end functions.',
    skills: ['MongoDB', 'Node', 'Express', 'React', 'Jest', 'Axios', 'Bootstrap', 'Redux'],
    gitHub: 'https://github.com/OneCommunityGlobal/HighestGoodNetworkApp/',
    siteLink: 'https://www.onecommunityglobal.org/executive-summary/',
    timeSpan: 'Feb 2024 - Present'
  },
  {
    title: 'We Vote',
    jobTitle: 'Full Stack Developer',
    desc: 'I solve full-stack bug tickets and issues via Jira, GitHub, and Slack. My work involves the front end, the database, the back end, and the database admin site. My contributions currently include updating database records, writing back-end APIs, creating and updating user interfaces for both the web application and the admin site, and providing collaborative assistance to fellow engineers.',
    skills: ['Linux', 'React', 'Flux', 'jQuery', 'PostgreSQL', 'Python', 'Django'],
    gitHub: 'https://github.com/wevote/WeVoteServer',
    siteLink: 'https://wevote.us/',
    timeSpan: 'Oct 2023 - Present'
  },
  {
    title: 'LPL Financial',
    jobTitle: 'Associate Research Analyst',
    desc: 'I help advisors manage their practice by providing research on various financial instruments. I achieve this by using Salesforce CRM, VBA automation, Bloomberg Terminal and its Query Language, RSS feeds, and SQL. My work also includes high-net-worth account consulting, product sales, and more.',
    skills: ['RSS', 'Salesforce', 'VBA', 'SQL', 'Bloomberg Terminal'],
    timeSpan: 'May 2022 - Present'
  },
  {
    title: 'TIAA',
    jobTitle: 'Financial Solutions Associate',
    desc: 'Provided retirement consulting to high-net-worth clients. Led cohort employees as a study group mentor for FINRA SIE, SERIES 7, and SERIES 66 licensing.',
    skills: [],
    timeSpan: 'May 2021 - April 2022'
  },
  {
    title: 'University of South Carolina',
    jobTitle: 'Lab Assistant',
    desc: 'Taught labratory assignments to about 20 students per semester. Topics included basic Java syntax, object-oriented programming, data structures, and recursion. Developed custom learning plans and assignments for individual students. Fostered an environment where students could become efficient problem solvers.',
    skills: ['Java'],
    timeSpan: 'May 2021 - April 2022'
  }
];

export const about = {
  meta: {
    title: 'About This Site',
    desc: 'This site is written in TypeScript, and it uses the Material UI library for React.',
    skills: ['React', 'MUI', 'TypeScript']
  } as ProjectItem
};
