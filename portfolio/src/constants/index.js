import {
  service1,
  service2,
  service3,
  service4,
  service5,
  service6,
  service7,
  service8,
  service9,
  service10,
  p1,
  p2,
  p3,
  p4,
  p5,
  p6,
  p7,
  p8,
  mail,
  pin,
  phone,
  dribble,
  dribbleA,
  dribbleD,
  linkedin,
  linkedinA,
  linkedinD,
  github,
  githubA,
  githubD,
} from "../assets"

export const navLinks = [
    {
      id: "home",
      title: "Home",
    },
    {
      id: "about",
      title: "About Me",
    },
    {
      id: "services",
      title: "What I Do",
    },
    {
      id: "resume",
      title: "Resume",
    },
    {
      id: "portfolio",
      title: "Portfolio",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];

  export const services = [
    {
      id: "ui-design",
      title: "UI/UX Design",
      description: "Designing user interfaces to enhance usability, engagement, and conversion rates.",
      icon: service1,
    },
    {
      id: "wireframing",
      title: "Wireframing and Prototyping",
      description: 
      "Creating wireframes and interactive prototypes to visualize website layouts.",
      icon: service2,
    },
    {
      id: "graphic-design",
      title: "Graphic Design",
      description: 
      "Designing visual elements to enhance the branding and aesthetics of the website.",
      icon: service3,
    },
    {
      id: "responsive-design",
      title: "Responsive Design",
      description: 
      "Designing websites that adapt and display well on different devices and screen sizes.",
      icon: service4,
    },
    {
      id: "frontend-development",
      title: "Frontend Development",
      description: 
      "Implementing the visual and interactive aspects of a website.",
      icon: service5,
    },
    {
      id: "cms-development",
      title: "Content Management System (CMS)",
      description: 
      "Building customized CMS platforms to enable clients to manage website content easily.",
      icon: service6,
    },
    {
      id: "ecommerce-development",
      title: "E-commerce Development",
      description: 
      "Developing online stores for businesses to sell products or services online.",
      icon: service7,
    },
    {
      id: "web-application",
      title: "Web Application Development",
      description: 
      "Developing interactive web-based applications with complex functionalities.",
      icon: service8,
    },
    {
      id: "website-optimization",
      title: "Performance Optimization",
      description: 
      "Optimizing website performance to improve loading speed and enhance user experience.",
      icon: service9,
    },
    {
      id: "web-maintenance",
      title: "Maintenance and Support",
      description: 
      "Providing ongoing updates, bug fixes, and technical support.",
      icon: service10,
    },
  ];
  
  export const education = [
  {
    id: "college",
    year: "2019-2023",
    school: "Cebu Institute of Techology University",
    degree: "Bachelor's Degree",
    program: "Degree Program: ",
    major: "Bachelor of Science in Computer Science "
  },
  {
    id: "shs",
    year: "2013-2019",
    school: "Cebu Institute of Techology University",
    degree: "High School",
    program: "Program (Senior High School): ",
    major: "Academic Strand - Science, Technology, Engineering and Mathematics",
    honors: "Honors: Graduated with Honors (2019); Completed Junior High School with Honors (2017) and Best in Computer Awards (2016)"
  },
  {
    id: "elem",
    year: "2007-2013",
    school: "Punta Princesa Elementary School",
    degree: "Elementary School",
    honors: "Honors and Awards: Graduated with Honors (2013) and Best in Computer Awards (2012 and 2013)"
  },
];
export const experience = [
  {
    id: "freelance",
    year: "Jun - Dec 2023",
    company: "",
    title: "Freelance UI/UX Designer",
    description: "Experienced in UI/UX design using Figma and video editing with Premiere Pro, I excel in bringing client visions to life with impactful designs and compelling multimedia content for freelance projects."
  },
  {
    id: "internship",
    year: "Feb - Jun 2023",
    company: "Southern Taiwan University of Technology",
    title: "Frontend Developer and UI/UX Designer",
    description: "Participated in the Biomedical Innovation Design Training and Research Program at STUST under Taiwan Experience Education Program (TEEP) 2023."
  },
  {
    id: "fulltime",
    year: "May 21' - Apr 22'",
    company: "KLB Solutions LLC",
    title: "Frontend Developer",
    description: "Successfully designed, implemented, and maintained multiple e-commerce, small business, and non-profit websites, prioritizing a seamless and engaging user experience while staying abreast of the latest web development trends and technologies."
  },
];

export const portfolio = [
  {
    id:"Tacpic",
    title: "TacPic Editor Landing Page",
    icon: p6,
    link: "https://www.tac-tales.com/",
  },
  {
    id:"Eat Gangster",
    title: "Baking Mixes Landing Page",
    icon: p3,
    link: "https://eatgangster.com/",
  },
  {
    id:"WBBO",
    title: "Cannabis Apparel Brand Landing Page",
    icon: p2,
    link: "https://weedbebetteroff.com/",
  },
  {
    id:"Klb Solutions",
    title: "Digital Marketing Agency Landing Page",
    icon: p1,
    link: "https://klbsolutionsllc.com/",
  },
]

export const ui = [
  // {
  //   id:"Ark",
  //   title: "Ark Digital Website Redesign 2023",
  //   icon: p8,
  //   link: "https://www.figma.com/proto/iI2I7F3pS6UuQ043e7kERf/Ark?type=design&node-id=30-3&t=EhYxcACT78jbE7Oq-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=30%3A3&mode=design"
  // },
  // {
  //   id:"Orocan",
  //   title: "Orocan Website Redesign",
  //   icon: p7,
  //   link:"https://www.figma.com/proto/FWuWSlmo1Chk46Yrx42Va9/Orocan?type=design&node-id=15-4&t=zZJdiAlpVFoXvY2r-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=15%3A4&mode=design",
  //  },
  {
    id:"InquireNear",
    title: "InquireNear a Hiring Software Application for Realtime Information Mobile and Web App",
    icon: p5,
    link: "https://www.figma.com/proto/UXQ7J3qXWCujH7R1Ttpcg0/Inquirenear?type=design&node-id=1-2&t=nqo8xrkf7QsOVrKJ-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2&mode=design",
  },
  {
    id:"Busify",
    title: "Busify a Bus Monitoring System Mobile App",
    icon: p4,
    link: "https://www.figma.com/proto/uLm8JJeW9KUgKo7U31JQLs/Busify?type=design&node-id=2-150&t=QFpw7KXLFP6VfxhP-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=2%3A150&mode=design",
  },
]

export const footerLinks = [
  {
    title: "CONTACT ME",
    links: [
      {
        id: "address",
        icon: pin,
        name: "Punta Princessa, Cebu City, Philippines",
      },
      {
        id: "phone",
        icon: phone,
        name: "+63 936 356 4143",
      },
      {
        id: "email",
        icon: mail,
        name: "fleurdelisserabanes@gmail.com",
      },
    ],
  }
];

export const socialLinks = [
  {
    title: "FOLLOW ME",
    links: [
      {
        id: "linkedin",
        icon: linkedin,
        follow: linkedinD,
        active: linkedinA,
        name: "Linkedin",
        link:"https://www.linkedin.com/in/fleurdelisse-r-5aaaaa224/",
      },
      {
        id: "dribble",
        icon: dribble,
        follow: dribbleD,
        active: dribbleA,
        name: "Dribble",
        link:"https://dribbble.com/fleurdelisse",
      },
      {
        id: "github",
        icon: github,
        follow: githubD,
        active: githubA,
        name: "GitHub",
        link:"https://github.com/fleurdelisseho",
      },
    ],
  }
];



export const skillset = [
    {
      id: "web",
      name: "Web Design",
      value: 99,
    },
    {
      id: "html",
      name: "HTML/CSS",
      value: 100,
    },
    {
      id: "js",
      name: "Javascript",
      value: 90,
    },
    {
      id: "react",
      name: "React Js",
      value: 95,
    },
    {
      id: "tailwind",
      name: "Tailwind CSS",
      value: 95,
    },
    {
      id: "react",
      name: "Bootstrap",
      value: 100,
    },
  ]