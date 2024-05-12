import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Community Platform(under construction)',
        description: "I am working on a community platform for my portfolio. I have designed and developed the platform using NextJS, TailwindCSS, and MongoDB. This Platform communicates with the backend API using RESTFul API. I have implemented user authentication, role-based access control, and user profile management. ",
        tools: ['Next.JS', 'React', 'Mongo Db', 'Node.JS', 'TailwindCSS'],
        role: 'Personal Project',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'E-Commerce Website (Piano Store)',
        description: 'I have designed and developed a full-stack web app for a piano store. This is My university project. I have used Nuxt.JS, Vue.JS and TailwindCSS for the front-end and PHP (Laravel), MySQL for the backend. this project power by RESTFul API and documented complete with swagger.this project is a full-featured e-commerce website with user authentication, product management, and order management. I have also implemented a shopping cart and payment gateway using Stripe. for authentication I have use Middleware an Token based authentication.',
        tools: ['Nuxt.JS','Vue.Js', 'Tailwind CSS', "Laravel(PHP)", "TypeScript", "MySQL", "AWS Amplify", "AWS EC2 (API)", "Stripe", "Swagger"],
        role: 'Personal Project',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Resturat Website (Wordpress)',
        description: 'I have designed and developed a static website for a restaurant. I have used WordPress, Elementor, and Qi Theme for the front-end. I have also implemented an API for reservation and an API the show comments from the customers. ',
        tools: ['Wordpress', 'PHP', 'MySQL', 'JavaScript', 'Elementor', 'Qi Theme'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },

];


