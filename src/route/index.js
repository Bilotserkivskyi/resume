// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

var header = {
  name: {
    firstname: 'Taras',
    lastname: 'Shevchenko',
  },
  position: 'Junior Fullstack JS Developer',
  salary: '$600 в місяць',
  address: 'Україна, м. Львів, вул. Зелена, 84, кв. 2',
}

var footer = {
  social: {
    email: {
      text: 'shevchenko@mail.com',
      href: 'mailto:shevchenko@mail.com',
    },
    phone: {
      text: '+380670000123',
      href: 'tel:+380670000123',
    },
    linkedin: {
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/dmytro-test',
    },
  },
}
// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Resume | Summary',
    },

    header,

    main: {
      summary: {
        title: {
          data: 'Summary',
          big: true,
        },

        text: `Open-minded for new technologies, with 1 years of experience in development. Whenever I start to work on a new project I learn the domain and try to understand the idea of the project. Good team player, every colleague is a friend to me.`,
      },

      experience: {
        title: {
          data: 'Other experience',
          big: false,
        },

        text: `Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (tournament position, goals etc), analyzing by simple mathematics models and preparing probability for such events like: money line - first win / draw / second win, totals etc.`,
      },
    },

    footer,
  })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Resume | Skills',
    },

    header,

    main: {
      title: {
        data: 'My skills',
        big: true,
      },

      skills: [
        {
          name: 'HTML',
          point: 10,
          istop: true,
        },
        {
          name: 'Handlebars',
          point: 10,
          istop: true,
        },
        {
          name: 'VS Code',
          point: 10,
          istop: true,
        },
        {
          name: 'Git',
          point: 8,
          istop: false,
        },
        {
          name: 'Terminal',
          point: 5,
          istop: false,
        },
        {
          name: 'NPM',
          point: 3,
        },
        {
          name: 'React.js',
          point: 0,
        },
        {
          name: 'PHP',
          point: null,
        },
      ],
      hobby: {
        title: {
          data: 'My hobbies',
          big: false,
        },
      },

      hobbies: [
        {
          name: 'Photography',
          isMain: true,
        },
        {
          name: 'Video',
          isMain: true,
        },
        {
          name: 'Painting',
          isMain: true,
        },
        {
          name: 'Football',
          isMain: false,
        },
      ],
    },

    footer,
  })
})
// ================================================================
router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Resume | Education',
    },

    header,

    main: {
      title: {
        data: 'My education',
        big: true,
      },

      education: [
        {
          name: 'Середня школа',
          isEnd: true,
        },
        {
          name: 'ХРТТ',
          isEnd: true,
        },
        {
          name: 'УІПА',
          isEnd: true,
        },
        {
          name: 'КПІ',
          isEnd: false,
        },
      ],
      certificat: {
        title: {
          data: 'My certificates',
          big: false,
        },
      },

      certificates: [
        {
          name: 'Сертифікат №1',
          id: 101,
        },
        {
          name: 'Сертифікат №2',
          id: 102,
        },
        {
          name: 'Сертифікат №3',
          id: 103,
        },
      ],
    },

    footer,
  })
})

// ================================================================

router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    // ↙ сюди вводимо JSON дані

    layout: 'big',

    page: {
      title: 'Resume | Work',
    },

    header,

    main: {
      title: {
        data: 'Work history',
        big: true,
      },
      works: [
        {
          position: 'Junior fullstack developer',
          company: {
            name: 'IT Brains',
            url: null, //'https://it-brains.com.ua',
          },
          duration: {
            from: '10.10.2022',
            to: null,
          },
          projectAmount: 3,

          projects: [
            {
              name: 'Resume',
              url: 'https://resume.com.ua',
              about: 'Bla-Bla-Bla-Bla-Bla-Bla-Bla-Bla-Bla',
              stackAmount: 4,
              awardAmount: 5,
              stack: [
                {
                  name: 'React.js',
                },
                {
                  name: 'HTML / CSS',
                },
                {
                  name: 'Node.js',
                },
              ],

              awards: [
                {
                  name: 'Awards №1',
                },
                {
                  name: 'Awards №2',
                },
              ],
            },
          ],
        },

        // {
        //   position: 'Partner',
        //   company: {
        //     name: 'XKP',
        //     url: 'https://khre.club',
        //   },
        //   duration: {
        //     from: '16.04.2019',
        //     to: '15.11.2020',
        //   },
        // },
      ],
    },

    footer,
  })
})

// ================================================================

router.get('/program', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('program', {
    layout: 'program',
    program: {
      excursion: {
        name: 'Cultural Tour',
        location: {
          city: 'Paris',
          country: 'France',
        },
        date: '2023-06-15',
        program: [
          {
            name: 'Museum Visit',
            type: 'Art',
            duration: 3,
            details: {
              museum: {
                name: 'The Louvre',
                location: {
                  address: 'Rue de Rivoli',
                  city: 'Paris',
                  country: 'France',
                },
                exhibits: [
                  {
                    name: 'Mona Lisa',
                    artist: 'Leonardo da Vinci',
                    description: 'Iconic portrait painting',
                    audio_guide: true,
                  },
                  {
                    name: 'Winged Victory of Samothrace',
                    artist: null,
                    description:
                      'Ancient Greek statue of Nike, the goddess of victory',
                    audio_guide: true,
                  },
                ],
              },
              guide: {
                name: 'Francois',
                language: 'French',
                rating: 4.8,
              },
            },
          },
          {
            name: 'Cultural Show',
            type: 'Music and Dance',
            duration: 2,
            details: {
              venue: {
                name: 'Moulin Rouge',
                location: {
                  address: '82 Boulevard de Clichy',
                  city: 'Paris',
                  country: 'France',
                },
              },
              performers: [
                {
                  name: 'Mireille Mathieu',
                  type: 'Chanson singer',
                },
                {
                  name: "Ballet de l'Opéra National de Paris",
                  type: 'Classical ballet company',
                },
              ],
              guide: {
                name: 'Sophie',
                language: 'English',
                rating: 4.6,
              },
            },
          },
        ],
      },
    },
  })
})

// Підключаємо роутер до бек-енду
module.exports = router
