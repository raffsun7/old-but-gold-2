/**
 * DATA.js - The Content Hub
 * This file stores all your personal data in structured objects.
 */

const portfolioData = {
    // 1. Projects (From your 'projects' folder)
    projects: [
        {
            title: "Parallax Scroll Animation",
            category: "UI/UX",
            image: "resources/blog/pro1.gif",
            link: "projects/parallax-scroll-animation/index.html",
            description: "A deep-dive into creative scrolling effects."
        },
        {
            title: "Glassmorphism Cloud App",
            category: "Design",
            image: "resources/blog/pro2.png",
            link: "projects/glassmorphism-creative-cloud-app-redesign/index.html",
            description: "Modern cloud dashboard with frosted glass effects."
        },
        {
            title: "Digital Clock (Vue.js)",
            category: "Web App",
            image: "resources/blog/pro3.png",
            link: "projects/digital-clock-with-vue-js/index.html",
            description: "Real-time clock built with reactive components."
        },
        {
            title: "Newton's Light Bulbs",
            category: "Animation",
            image: "resources/blog/pro5.gif",
            link: "projects/newton-s-light-bulbs/index.html",
            description: "Physics-based interactive light simulation."
        }
    ],

    // 2. Books (From your Gallery)
    books: {
        favourites: [
            {
                title: "Osrujole Lekha",
                author: "Unknown",
                image: "resources/gallery/osrujole.png",
                description: "Stories of real events that touch the heart and remind us of true values."
            },
            {
                title: "Bela Furabar Age",
                author: "Unknown",
                image: "resources/gallery/bela-furabar-age.png",
                description: "A reflection on the passage of time and the journey of life."
            },
            {
                title: "Ma, Ma, Ma & Baba",
                author: "Unknown",
                image: "resources/gallery/ma-ma-ma.png",
                description: "Wonderful stories about the rewards of obeying parents."
            }
        ],
        recent: [
            { title: "RECLAIM YOUR HEART", author: "YASMIN MUJAHID", image: "resources/gallery/reclaim.png" },
            { title: "DOPAMINE DETOX", author: "THIBO MESIS", image: "resources/gallery/dopamin.png" },
            { title: "PORISUDDHO KALB", author: "MOHAMMOD BIN NUR", image: "resources/gallery/porisuddho.png" }
        ]
    },

    // 3. Music (From your Blogs/Islam section)
    music: [
        {
            name: 'মৃত্যু',
            artist: 'Baseera',
            image: 'https://c1.wallpaperflare.com/preview/443/227/705/time-clock-hour-minutes-thumbnail.jpg',
            url: 'resources/blog/music/1.mp3'
        },
        {
            name: 'কবরের জীবন',
            artist: 'Baseera',
            image: 'http://wallup.net/wp-content/uploads/2017/03/29/477915-photography-simple_background-nature.jpg',
            url: 'resources/blog/music/2.mp3'
        },
        {
            name: 'জান্নাত',
            artist: 'Baseera',
            image: 'https://cdn.shopify.com/s/files/1/0044/2286/0898/products/stairwaytoheaven_jimwarren_1024x.jpg?v=1549502756',
            url: 'resources/blog/music/10.mp3'
        }
    ],

    // 4. Skills (From your Skills section)
    skills: [
        { name: "HTML5", icon: "fab fa-html5", level: "Expert" },
        { name: "CSS3", icon: "fab fa-css3-alt", level: "Advanced" },
        { name: "JavaScript", icon: "fab fa-js-square", level: "Intermediate" },
        { name: "Python", icon: "fab fa-python", level: "Intermediate" },
        { name: "NodeJS", icon: "fab fa-node", level: "Basic" },
        { name: "Bootstrap", icon: "fab fa-bootstrap", level: "Advanced" }
    ]
};