export const SOCIAL_LINKS = {
  LINKEDIN: 'https://www.linkedin.com/in/thangnv0102',
  FACEBOOK: 'https://www.facebook.com/nvthang02/',
  INSTAGRAM: 'https://www.instagram.com/thangnv_02/',
  GITHUB: 'https://github.com/thangnv-pegasus',
  TWITTER: 'https://twitter.com/ThangNgv02',
  GMAIL: 'thangngv.works@gmail.com',
  PHONE: '03866326201'
} as const;

export const PROJECTS_DATA = [
  {
    projectDeployLink: "http://banghehoamai.com/",
    projectGithubLink: "https://github.com/thangnv-pegasus/bangtot-web",
    project_description: "Building a custom multisite compatible WordPress plugin to build global search with Algolia",
    project_tools: ["ReactJs", "Laravel", "Tailwind", "SwiperJs"],
    project_name: "BangGhe Shop",
  },
  {
    projectDeployLink: "https://thangnv-portfolio.vercel.app/",
    projectGithubLink: "https://github.com/thangnv-pegasus/my-portfolio",
    project_description: "Building a custom multisite compatible WordPress plugin to build global search with Algolia",
    project_tools: ["ReactJs", "Tailwind", "AOS animation"],
    project_name: "My Portfolio",
  },
  {
    projectDeployLink: "https://chat-app-2-7b1f0.web.app/",
    projectGithubLink: "https://github.com/thangnv-pegasus/chat-app",
    project_description: "Building a custom multisite compatible WordPress plugin to build global search with Algolia",
    project_tools: ["ReactJs", "Firebase", "Context API", "Tailwind"],
    project_name: "Chat App",
  },
  {
    projectDeployLink: "https://food-shop-negative.vercel.app/",
    projectGithubLink: "https://github.com/thangnv-pegasus/food-shop",
    project_description: "Building a custom multisite compatible WordPress plugin to build global search with Algolia",
    project_tools: ["ReactJs", "SCSS", "TippyJs"],
    project_name: "Food Shop",
  },
  {
    projectDeployLink: "https://tw-shop-1c92b.web.app/",
    projectGithubLink: "https://github.com/thangnv-pegasus/tw-shop",
    project_description: "Building a custom multisite compatible WordPress plugin to build global search with Algolia",
    project_tools: ["ReactJs", "Tailwind", "Firebase", "Swiper"],
    project_name: "Medical Shop",
  },
  {
    projectDeployLink: "https://nd-shoes.vercel.app/",
    projectGithubLink: "https://github.com/thangnv-pegasus/nd-shoes",
    project_description: "Building a custom multisite compatible WordPress plugin to build global search with Algolia",
    project_tools: ["ReactJs", "Tailwind", "SwiperJs"],
    project_name: "Sneaker Shop",
  },
  {
    projectDeployLink: "https://todo-list-7e9fe.web.app/",
    projectGithubLink: "https://github.com/thangnv-pegasus/todo-app",
    project_description: "Building a custom multisite compatible WordPress plugin to build global search with Algolia",
    project_tools: ["ReactJs", "Tailwind", "Firebase"],
    project_name: "Todo App",
  },
] as const;

export const FEATURED_PROJECTS = [
  {
    imgSrc: "/images/project1.png",
    subTitle: "Featured Project",
    title: "Food Shop",
    listContent: [
      "Website about buying and selling clean food with functions such as: add, edit, delete products in the cart, search, filter products. In addition, I also added the login function, register an account for users to look like other websites",
    ],
    tools: ["ReactJs", "SCSS", "Swiper slider"],
    githubLink: "https://github.com/thangnv-pegasus/food-shop",
    deployLink: "https://food-shop-negative.vercel.app/",
  },
  {
    imgSrc: "/images/project2.png",
    subTitle: "Featured Project",
    title: "ND-Shoes",
    contentPosition: "right" as const,
    listContent: [
      "This is a project that I completed during one of my introductory software engineering courses and it also helped me review my knowledge. Although I don't have much time, I have also added basic functions to the website such as adding, editing, deleting products in the cart, searching, logging in, registering an account for users.",
    ],
    tools: ["ReactJs", "SCSS", "Swiper slider"],
    githubLink: "https://github.com/thangnv-pegasus/nd-shoes",
    deployLink: "https://nd-shoes.vercel.app/",
  },
  {
    imgSrc: "/images/project3.png",
    subTitle: "Featured Project",
    title: "Bàn Ghế Hoa Mai",
    listContent: [
      "Full-stack e-commerce website. I developed this website using laravel and ReactJs. The website allows users to make purchases and admins can manage orders and products",
    ],
    tools: ["ReactJs", "Laravel", "Cloudinary", "Tailwind"],
    githubLink: "https://github.com/thangnv-pegasus/bangtot-web",
    githubLink2: "https://github.com/thangnv-pegasus/bangtot-api",
    deployLink: "https://food-shop-negative.vercel.app/",
  },
  {
    imgSrc: "/images/project4.png",
    subTitle: "Featured Project",
    title: "MMO Shop",
    contentPosition: "right" as const,
    listContent: [
      "This is a project that I completed during one of my introductory software engineering courses and it also helped me review my knowledge. Although I don't have much time, I have also added basic functions to the website such as adding, editing, deleting products in the cart, searching, logging in, registering an account for users.",
    ],
    tools: ["ReactJs", "Tailwind", "Firebase", "Context API"],
    githubLink: "https://github.com/thangnv-pegasus/tw-shop",
    deployLink: "https://tw-shop-1c92b.web.app/",
  },
] as const;

export const WORK_EXPERIENCES = [
  {
    id: 1,
    company: "Kiaisoft",
    heading: "Tutoring at home @Kiaisoft",
    subHeading: "January 2024 - Present",
    listContent: [
      "Trained articles on vuejs and laravel",
      "Participate in the survey form project, the mvp project of 2024",
    ],
  },
  {
    id: 2,
    company: "Bavaan",
    heading: "Intern front-end @Bavaan",
    subHeading: "September 2022 - December 2022",
    listContent: [
      "Participate in making e-commerce products for the company",
      "Work with a variety of different languages, platforms, frameworks such as JavaScript, TypeScript, NextJs, ReactJs, Liquid, Hydrogen, Tailwind",
    ],
  },
  {
    id: 3,
    company: "HNUE",
    heading: "Teaching Assistant @Ha Noi University of Education",
    subHeading: "September 2022 - December 2022",
    listContent: [
      "Assist teachers with lesson preparation by preparing materials and preparing classroom teaching aids.",
      "Supervise students during class time and school/center activities, field trips, and extracurricular activities.",
      "Collaborate with teachers to recognize the problems students are facing and suggest directions and help implement solutions.",
      "Correct homework for students, students, practice with them when needed.",
    ],
  },
  {
    id: 4,
    company: "GiaSuDoHang",
    heading: "Tutoring at home @GiaSuDoHang",
    subHeading: "October 2021 - May 2022",
    listContent: [
      "Help students review what they have learned",
      "Answer questions related to the lesson content for students",
      "Guide students to solve applied exercises from easy to difficult, from basic to advanced",
      "Improve students writing skills",
    ],
  },
] as const;
