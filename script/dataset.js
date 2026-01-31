// about dataset
const skills = {
   'Python': '80%',
   'HTML': '80%',
   'CSS': '80%',
   'JavaScript': '70%',
   'C': '60%',
   'C++': '50%',
   'PostgreSQL': '60%',
   'Pascal': '60%',
   'Git': '70%',
   'VHDL': '50%',
}
const tools = [
   ['VS Code', 'vscode'],
   ['GitHub', 'github'],
   ['pgAdmin', 'pgadmin'],
   ['Code::Blocks', 'codeblocks'],
   ['PyCharm', 'pycharm'],
   ['Dev-Pascal', 'devpascal'],
   ['Quartus', 'quartus'],
];

// project dataset
const pcImg = (project, file) => ({pc: { type: "img", src: `../media/project/${project}/${file}` }});

const mobileImg = (project, file) => ({mobile: { type: "img", src: `../media/project/${project}/${file}` }});

const pcVideo = (project, file) => ({pc: { type: "video", src: `../media/project/${project}/${file}` }});

const wrap = (wrapper, content) => ({wrapper, ...content});

const projects = {
   xoxo: {
      id: "xoxo",
      title: "XOXO",
      year: 2022,
      type: "pygame",
      description: "My first-ever Pygame program was 'XOXO,' a simple yet fun Tic-Tac-Toe game. It's a remake of a game I originally created in Pascal, rebuilt using Python. This project marked my introduction to game development.",
      ogImage: "../media/work/xoxo/xoxo_1.png",
      download: "https://github.com/ilovemath25/XOXO/archive/refs/heads/main.zip",
      overview: [
         wrap("pc-only", pcImg("xoxo", "xoxo_1.png")),
         wrap("pc-only", pcImg("xoxo", "xoxo_2.png")),
         wrap("pc-only", pcImg("xoxo", "xoxo_3.png")),
         wrap("pc-only", pcImg("xoxo", "xoxo_4.png")),
         wrap("pc-only", pcImg("xoxo", "xoxo_5.png"))
      ]
   },

   snake: {
      id: "snake",
      title: "Snake",
      year: 2023,
      type: "pygame",
      description: "The Snake game was my second Python game after XOXO. I chose this classic game because who doesn't love Snake games? It was a fun challenge and helped me level up my Python skills.",
      ogImage: "../media/work/snake/snake_1.png",
      download: "https://github.com/ilovemath25/Snake/archive/refs/heads/main.zip",
      overview: [
         wrap("pc-only", pcImg("snake", "snake_1.png")),
         wrap("pc-only", pcImg("snake", "snake_2.png")),
         wrap("pc-only", pcImg("snake", "snake_3.png")),
         wrap("pc-only", pcImg("snake", "snake_4.png")),
         wrap("pc-only", pcImg("snake", "snake_5.png"))
      ]
   },

   movie_recommender: {
      id: "movie_recommender",
      title: "Movie Recommender",
      year: 2023,
      type: "html",
      description: "My very first website project. Built with my group '4 Years Graduate', this Movie Recommender suggests films based on user preferences. I handled the frontend while my teammates worked on the backend.",
      ogImage: "../media/work/movie_recommender/movie_recommender_1.png",
      download: "https://github.com/ilovemath25/Movie-Recommender/archive/refs/heads/main.zip",
      overview: [
         wrap("pc-only", pcImg("movie_recommender", "movie_recommender_1.png")),
         wrap("pc-only", pcImg("movie_recommender", "movie_recommender_2.png")),
         wrap("pc-only", pcImg("movie_recommender", "movie_recommender_3.png")),
         wrap("pc-only", pcImg("movie_recommender", "movie_recommender_4.jpg")),
         wrap("pc-only", pcImg("movie_recommender", "movie_recommender_5.png"))
      ]
   },

   hotel_booking: {
      id: "hotel_booking",
      title: "Hotel Booking",
      year: 2023,
      type: "html",
      description: "A group project from my second year where we developed a hotel booking website using Python Flask and PostgreSQL. While not responsive, it was a major milestone in my web development journey.",
      ogImage: "../media/work/hotel_booking/hotel_booking_1.jpg",
      download: "https://github.com/ilovemath25/Hotel-booking/archive/refs/heads/main.zip",
      overview: [
         wrap("pc-only", pcImg("hotel_booking", "hotel_booking_1.jpg")),
         wrap("pc-only", pcImg("hotel_booking", "hotel_booking_2.png")),
         wrap("pc-only", pcImg("hotel_booking", "hotel_booking_3.png")),
         wrap("pc-only", pcImg("hotel_booking", "hotel_booking_4.png")),
         wrap("pc-only", pcImg("hotel_booking", "hotel_booking_5.png"))
      ]
   },
   
   animaldoku: {
      id: "animaldoku",
      title: "Animaldoku",
      year: 2024,
      type: "pygame",
      description: "After finishing the Snake game, I created Animaldoku — a Sudoku-style puzzle game with an animal theme. This was my first mouse-based game and includes background music to enhance the experience.",
      ogImage: "../media/work/animaldoku/animaldoku_1.png",
      download: "https://github.com/ilovemath25/Animaldoku/archive/refs/heads/main.zip",
      overview: [
         wrap("pc-only", pcVideo("animaldoku", "animaldoku.mp4")),
         wrap("pc-only", pcImg("animaldoku", "animaldoku_1.png")),
         wrap("pc-only", pcImg("animaldoku", "animaldoku_2.png")),
         wrap("pc-only", pcImg("animaldoku", "animaldoku_3.png")),
         wrap("pc-only", pcImg("animaldoku", "animaldoku_4.png"))
      ]
   },

   number_recognition: {
      id: "number_recognition",
      title: "Number Recognition",
      year: 2024,
      type: "pygame",
      description: "This is my very first AI neural network built from scratch. It's designed to recognize handwriting and identify numbers. The accuracy is currently around 80%, which isn't too bad for a first attempt.",
      ogImage: "../image/work/number_recognition/number_recognition_1.png",
      download: "https://github.com/ilovemath25/Number-Recognition/archive/refs/heads/main.zip",
      overview: [
         wrap("pc-only", pcVideo("number_recognition", "number_recognition.mp4")),
         wrap("pc-only", pcImg("number_recognition", "number_recognition_1.png")),
         wrap("pc-only", pcImg("number_recognition", "number_recognition_2.png")),
         wrap("pc-only", pcImg("number_recognition", "number_recognition_3.png")),
         wrap("pc-only", pcImg("number_recognition", "number_recognition_4.png")),
         wrap("pc-only", pcImg("number_recognition", "number_recognition_5.png"))
      ]
   },

   portfolio: {
      id: "portfolio",
      title: "Portfolio",
      year: 2024,
      type: "html",
      description: "This website is my first-ever fully responsive project and the most challenging one I've built so far. It serves as a diary of my journey through web development.",
      ogImage: "../image/work/portfolio/portfolio_1.png",
      download: "#",
      overview: [
         wrap("mobile-and-pc", {
            order: ["mobile", "pc"],
            ...mobileImg("portfolio", "portfolio_2.jpg"),
            ...pcVideo("portfolio", "portfolio.mp4")
         }),
         wrap("mobile-and-pc", {
            order: ["pc", "mobile"],
            ...pcImg("portfolio", "portfolio_1.png"),
            ...mobileImg("portfolio", "portfolio_4.png")
         }),
         wrap("mobile-and-pc", {
            order: ["mobile", "pc"],
            ...mobileImg("portfolio", "portfolio_3.png"),
            ...pcImg("portfolio", "portfolio_5.png")
         })
      ]
   },

   sha256: {
      id: "sha256",
      title: "SHA-256",
      year: 2024,
      type: "other",
      description: "I implemented SHA-256 from scratch by referencing the original white paper. It processes an input and generates a fixed-size 256-bit cryptographic hash.",
      ogImage: "../image/work/sha256/sha256_1.png",
      download: "https://github.com/ilovemath25/SHA-256/archive/refs/heads/main.zip",
      overview: [
         wrap("pc-only", pcImg("sha256", "sha256_1.png")),
         wrap("pc-only", pcImg("sha256", "sha256_2.png")),
         wrap("pc-only", pcImg("sha256", "sha256_3.png"))
      ]
   },

   testcase: {
      id: "testcase",
      title: "Test Case",
      year: 2024,
      type: "html",
      description: "A website that helps users create and manage test cases for coding projects. Built to solve my own struggles with testing program outputs.",
      ogImage: "../image/work/testcase/testcase_1.png",
      download: "https://github.com/ilovemath25/Test-Case/archive/refs/heads/main.zip",
      overview: [
         wrap("mobile-and-pc", {
            order: ["mobile", "pc"],
            ...mobileImg("testcase", "testcase_1.png"),
            ...pcVideo("testcase", "testcase.mp4")
         }),
         wrap("mobile-and-pc", {
            order: ["pc", "mobile"],
            ...pcImg("testcase", "testcase_2.png"),
            ...mobileImg("testcase", "testcase_3.png")
         }),
         wrap("mobile-and-pc", {
            order: ["mobile", "pc"],
            ...mobileImg("testcase", "testcase_4.png"),
            ...pcImg("testcase", "testcase_5.png")
         }),
         wrap("mobile-and-pc", {
            order: ["pc", "mobile"],
            ...pcImg("testcase", "testcase_6.png"),
            ...mobileImg("testcase", "testcase_7.png")
         })
      ]
   },

   tetris: {
      id: "tetris",
      title: "Tetris",
      year: 2024,
      type: "pygame",
      description: "A Pygame version of Tetris with music, sound effects, and enhanced mouse interaction, making it more dynamic and fun to play.",
      ogImage: "../image/work/tetris/tetris_1.png",
      download: "https://github.com/ilovemath25/Tetris/archive/refs/heads/main.zip",
      overview: [
         wrap("pc-only", pcVideo("tetris", "tetris.mp4")),
         wrap("pc-only", pcImg("tetris", "tetris_1.png")),
         wrap("pc-only", pcImg("tetris", "tetris_2.png")),
         wrap("pc-only", pcImg("tetris", "tetris_3.png")),
         wrap("pc-only", pcImg("tetris", "tetris_4.png")),
         wrap("pc-only", pcImg("tetris", "tetris_5.png"))
      ]
   },

   donut: {
      id: "donut",
      title: "Donut",
      year: 2024,
      type: "other",
      description: "A rotating 3D ASCII donut rendered in the terminal. A fun project exploring 3D math and ASCII graphics.",
      ogImage: "../image/work/donut/donut_1.png",
      download: "https://github.com/ilovemath25/Donut/archive/refs/heads/main.zip",
      overview: [
         wrap("pc-only", pcVideo("donut", "donut.mp4")),
         wrap("pc-only", pcImg("donut", "donut_1.png"))
      ]
   },

   ebookstore: {
      id: "ebookstore",
      title: "Ebookstore",
      year: 2025,
      type: "html",
      description: "A group e-commerce project for an online bookstore using HTML, CSS, JavaScript, Flask, and PostgreSQL. Homepage was responsive, others partially optimized.",
      ogImage: "../image/work/ebookstore/ebookstore_1.png",
      download: "https://github.com/ilovemath25/E-Bookstore/archive/refs/heads/main.zip",
      overview: [
         wrap("pc-only", pcVideo("ebookstore", "ebookstore_1.mp4")),
         wrap("pc-only", pcVideo("ebookstore", "ebookstore_2.mp4")),
         wrap("pc-only", pcVideo("ebookstore", "ebookstore_3.mp4")),
         wrap("pc-only", pcImg("ebookstore", "ebookstore_1.png")),
         wrap("pc-only", pcImg("ebookstore", "ebookstore_2.png")),
         wrap("pc-only", pcImg("ebookstore", "ebookstore_3.png")),
         wrap("pc-only", pcImg("ebookstore", "ebookstore_4.png")),
         wrap("pc-only", pcImg("ebookstore", "ebookstore_5.png")),
         wrap("pc-only", pcImg("ebookstore", "ebookstore_6.png")),
         wrap("pc-only", pcImg("ebookstore", "ebookstore_7.png"))
      ]
   },

   gulu_gulu: {
      id: "gulu_gulu",
      title: "Gulu Gulu",
      year: 2024,
      type: "pygame",
      description: "A pixel-art adventure game created for my first game competition, in collaboration with my sister. Players can change size, solve puzzles, and explore rooms.",
      ogImage: "../image/work/gulu_gulu/gulu_gulu_1.png",
      download: "https://github.com/ilovemath25/GuluGulu/archive/refs/heads/main.zip",
      overview: [
         wrap("pc-only", pcImg("gulu_gulu", "gulu_gulu_1.png")),
         wrap("pc-only", pcImg("gulu_gulu", "gulu_gulu_2.png")),
         wrap("pc-only", pcImg("gulu_gulu", "gulu_gulu_3.png"))
      ]
   },
};