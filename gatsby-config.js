module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://satyadeva.github.io`,
    // Your Name
    name: 'Satya Deva Ankey',
    // Main Site Title
    title: `Satya Deva | Software Developer`,
    // Description that goes under your name in main bio
    description: `I am a Computer Science graduate student at Northeastern university, Boston. I am currently looking for opportunities
    as a software developer`,
    // Optional: Twitter account handle
    author: `satyadeva97/`,
    // Optional: Github account URL
    github: `https://github.com/satyadeva97/`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/satya-deva-ankey/`,
    // Content of the About Me section
    about: `Satya Deva is a graduate student currently pursuing his master's in computer science at 
    Northeastern University. He has 2 years of work experience in Deloitte as a software engineer 
    and is well acquainted with Java, SQL, Spring Boot, HTML/CSS, JavaScript, React and Angular. 
    His primary strengths include Data Structures & Algorithms.`,

    Education: [
      {
        name: 'Northeastern University | Computer Science | 2020 - 2022',
        description:
            '●\tCreated a GUI-based adventure game using Java Swing and MVC design pattern using Kruskal’s algorithm\n'
            +  '●\tImplemented perfect mazes, room and wrapping mazes using graph data structures in Java and tested using Junit\n',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
      {
        name: 'Chaitanya Bharathi Institute of Technology | Computer Engineering | 2014 - 2018',
        description:
            '●\tDesigned responsive user interfaces using HTML, CSS and Bootstrap elements for Single Page Applications in React\n'
            + '●\tCreate RESTful services in Spring Boot using GitHub Jobs API for fetching available jobs based on filters\n',
        link: 'https://chromeextensionkit.com/?ref=devfolio',
      },
    ],
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Hunt the Wumpus',
        description:
          '●\tCreated a GUI-based adventure game using Java Swing and MVC design pattern using Kruskal’s algorithm\n'
          +  '●\tImplemented perfect mazes, room and wrapping mazes using graph data structures in Java and tested using Junit\n',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
      {
        name: 'HireMe, Job Search Portal | group project',
        description:
          '●\tDesigned responsive user interfaces using HTML, CSS and Bootstrap elements for Single Page Applications in React\n'
          + '●\tCreate RESTful services in Spring Boot using GitHub Jobs API for fetching available jobs based on filters\n',
        link: 'https://chromeextensionkit.com/?ref=devfolio',
      },
      {
        name: 'Whiteboard, course management system',
        description:
          'Developed an online course management portal for centralized content sharing between faculty and students\n'
          + '●\tLeveraged web technologies like React.js, Redux, Angular, Express.js, Node.js, Spring Boot, MySQL and MongoDB\n'
          + '●\tImproved the student experience for process like course enrollment, accessing content and solving online quizzes\n',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
      {
        name: 'Contact Tracing |group project',
        description:
            '●\tBuilt a contact tracing database for epidemiological research and visualization; created conceptual model in UML and logical data model expressed as ERD depicting relationships and constraints\n'
            + '●\tDefined relational schema normalized up to BCNF and implemented the database in MySQL server\n',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Amazon | Incoming Software Engineer Intern',
        description: 'I will be working as a software Engineer intern during the summer21 in Amazon, Boston',
        link: 'https://www.amazon.com/',
      },
      {
        name: 'Deloitte | Software Engineer | August 2018 - September 2020',
        description: 'Worked on building a web application using Java, Spring Boot and MySQL\n'
                     + '• Enhanced the readability and performance of existing program using lambdas and hashing techniques\n'
                     + '• Improved the performance of existing SQL queries by 50% using indexes and common table expressions\n'
                     + '• Handled defects using HP ALM and interacted with system analysts from multiple locations for production fixes\n'
                     + '• Participated in company hiring process by conducting technical interviews and assessments\n'
                     + '• Trained and groomed campus hires on technologies like Java, SQL and application of data structures',
        link: 'https://www2.deloitte.com/',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'Java, Spring Boot, Python, R',
      },
      {
        name: 'Web Development',
        description: 'HTML, CSS, Bootstrap, JavaScript, Angular, React, JSON, XML',
      },
      {
        name: 'Databases & Servers',
        description:
          'MySQL, Oracle RDBMS, SQLite, MongoDB\n',
      },
      {
        name: 'Tools & Technologies',
        description:
            'IntelliJ, Eclipse IDE, Maven, Git, HP ALM, Postman, JUnit\n',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
