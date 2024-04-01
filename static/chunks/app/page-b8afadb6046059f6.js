(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [931],
  {
    5286: function (e, s, t) {
      Promise.resolve().then(t.bind(t, 4016));
    },
    4016: function (e, s, t) {
      "use strict";
      t.r(s),
        t.d(s, {
          default: function () {
            return h;
          },
        });
      var a = t(7437),
        r = t(2265),
        i = (e) => {
          let {
            id: s,
            TeamName: t,
            events: r,
            imageUrl: i,
            sports: l,
            isLightTheme: d,
          } = e;
          return (0, a.jsx)(
            "div",
            {
              className:
                "flex justify-center md:w-auto items-center   pt-2 shadow-lg px-2 ",
              children: (0, a.jsxs)("div", {
                children: [
                  (0, a.jsxs)("div", {
                    className: "image flex items-center flex-col",
                    children: [
                      (0, a.jsx)("img", {
                        src: i,
                        alt: t,
                        className: "w-full h-[385px] object-cover",
                      }),
                      (0, a.jsx)("h2", {
                        className:
                          "text-lg self-start capitalize font-semibold py-1",
                        children: t,
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: "self-start ".concat(
                      d ? "bg-[#F7F7F8]" : "bg-[#292B32]",
                      " pt-1 mb-2 h-[54px] rounded-md flex justify-around"
                    ),
                    children: [
                      (0, a.jsxs)("div", {
                        children: [
                          (0, a.jsx)("p", {
                            className: "text-sm opacity-60",
                            children: "Total Events",
                          }),
                          (0, a.jsxs)("p", { children: [" ", r, " Events"] }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        children: [
                          (0, a.jsx)("p", {
                            className: "text-sm opacity-60",
                            children: "Sports ",
                          }),
                          (0, a.jsx)("p", { children: l }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            },
            s
          );
        };
      let l = {
        imageUrl: "/banner.png",
        title:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      };
      var d = [
          {
            id: 1,
            TeamName: "Sacramento River Cats",
            events: 48,
            imageUrl: "/player1.png",
            sports: "baseball",
          },
          {
            id: 2,
            TeamName: "Las Vegas Aviators",
            events: 28,
            imageUrl: "/player2.jpg",
            sports: "baseball",
          },
          {
            id: 3,
            TeamName: "new jersey devils",
            events: 15,
            imageUrl: "/player3.png",
            sports: "ice hockey",
          },
          {
            id: 4,
            TeamName: "Las Vegas Aviators",
            events: 28,
            imageUrl: "/player2.jpg",
            sports: "baseball",
          },
        ],
        c = (e) => {
          let { imageUrl: s, title: t } = e;
          return (0, a.jsx)("div", {
            className:
              "flex justify-between flex-col items-center h-full shadow-lg pt-2 px-2",
            children: (0, a.jsxs)("div", {
              className: "w-[217px] md:h-[97%] h-[99%] border border-[#006555]",
              children: [
                (0, a.jsxs)("div", {
                  className: "image relative   ",
                  children: [
                    (0, a.jsx)("img", {
                      src: s,
                      alt: "advertisement ",
                      className: " object-cover",
                    }),
                    (0, a.jsx)("button", {
                      className:
                        "w-[47.78px] absolute top-0 right-0 bg-black text-white ",
                      children: "Ad",
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: "mt-4  text-center",
                  children: [
                    (0, a.jsx)("p", {
                      className: "font-semibold text-[20px]",
                      children: "Advertisement title",
                    }),
                    (0, a.jsx)("h2", {
                      className:
                        "text-[12.8px] text-justify line-height-2 px-3 py-1",
                      children: t,
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        o = (e) => {
          let { isLightTheme: s } = e;
          return (0, a.jsxs)("div", {
            className: "".concat(
              s ? "text-black" : "text-white ",
              " md:min-h-[673px] w-[90vw] mb-10 "
            ),
            children: [
              (0, a.jsx)("div", {
                className:
                  "border-b-2 ml-6  md:ml-20 mb-4 border-[#738FFF] w-fit",
                children: (0, a.jsx)("h1", {
                  className: "text-2xl  font-semibold pt-9",
                  children: "Sports",
                }),
              }),
              (0, a.jsxs)("div", {
                className: "flex flex-wrap justify-center gap-3  p-4",
                children: [
                  d.map((e, t) =>
                    (0, a.jsx)(
                      "div",
                      {
                        className: "".concat(s ? "bg-white" : "bg-[#3B3E47] "),
                        children: (0, a.jsx)(i, { isLightTheme: s, ...e }),
                      },
                      t
                    )
                  ),
                  (0, a.jsx)("div", {
                    className: "".concat(s ? "bg-white" : "bg-[#3B3E47] "),
                    children: (0, a.jsx)(c, { ...l }),
                  }),
                ],
              }),
              (0, a.jsx)("div", {
                className: " flex justify-center items-center pt-10",
                children: (0, a.jsx)("button", {
                  className: "bg-[#2C9CF0] px-8 rounded-md py-2 text-white  ",
                  children: "See More",
                }),
              }),
            ],
          });
        },
        n = [
          {
            id: 1,
            teamName: "Las Vegas Aviators",
            collectionType: "Take Flight Collection",
            imageUrl: "/Card1.png",
            location: "Las Vegas Ballpark, Las Vegas, Nevada",
          },
          {
            id: 2,
            teamName: "Sacramento River Cats",
            collectionType: "Orange Collection",
            imageUrl: "/Card2.png",
            location: "Sutter Health Park, Sacramento, California",
          },
          {
            id: 3,
            teamName: "Las Vegas Aviators",
            collectionType: "Take Flight Collection",
            imageUrl: "/Card1.png",
            location: "Las Vegas Ballpark, Las Vegas, Nevada",
          },
        ],
        x = () =>
          (0, a.jsxs)("div", {
            className: "flex justify-around px-6",
            children: [
              (0, a.jsx)("div", {
                className: "border-b w-[3px] border-[#818A97] ",
              }),
              (0, a.jsx)("div", {
                className: "border-b w-[8px] border-[#818A97] ",
              }),
              (0, a.jsx)("div", {
                className: "border-b  w-[8px] border-[#818A97] ",
              }),
              (0, a.jsx)("div", {
                className: "border-b w-[8px] border-[#818A97] ",
              }),
              (0, a.jsx)("div", {
                className: "border-b  w-[8px] border-[#818A97] ",
              }),
              (0, a.jsx)("div", {
                className: "border-b w-[8px] border-[#818A97] ",
              }),
              (0, a.jsx)("div", {
                className: "border-b w-[8px] border-[#818A97] ",
              }),
              (0, a.jsx)("div", {
                className: "border-b  w-[8px] border-[#818A97] ",
              }),
              (0, a.jsx)("div", {
                className: "border-b w-[8px] border-[#818A97] ",
              }),
              (0, a.jsx)("div", {
                className: "border-b w-[8px] border-[#818A97] ",
              }),
              (0, a.jsx)("div", {
                className: "border-b w-[8px] border-[#818A97] ",
              }),
              (0, a.jsx)("div", {
                className: "border-b w-[8px] border-[#818A97] ",
              }),
              (0, a.jsx)("div", {
                className: "border-b  w-[8px] border-[#818A97] ",
              }),
              (0, a.jsx)("div", {
                className: "border-b w-[8px] border-[#818A97] ",
              }),
              (0, a.jsx)("div", {
                className: "border-b w-[8px] border-[#818A97] ",
              }),
              (0, a.jsx)("div", {
                className: "border-b w-[8px] border-[#818A97] ",
              }),
              (0, a.jsx)("div", {
                className: "border-b  w-[3px] border-[#818A97] ",
              }),
            ],
          }),
        m = (e) => {
          let {
            imageUrl: s,
            teamName: t,
            collectionType: r,
            location: i,
            isLightTheme: l,
          } = e;
          return (0, a.jsxs)("div", {
            className: "h-[624px]  w-[257px] ".concat(
              l ? "bg-[#ffff] text-white" : "bg-[#3B3E47]",
              " "
            ),
            children: [
              (0, a.jsx)("div", {
                className: "image   ",
                children: (0, a.jsx)("img", {
                  src: s,
                  alt: t,
                  className: "object-contain w-full pb-0 h-full ",
                }),
              }),
              (0, a.jsxs)("div", {
                className: "translate-y-[-12px] relative",
                children: [
                  (0, a.jsx)("div", {
                    className: "w-[20px] h-[20px] ".concat(
                      l
                        ? "bg-gradient-to-b from-[#F9F8FF] to-[#F3F9FF]"
                        : "bg-gradient-to-r from-[#18282A] to-[#221A2C]",
                      "  absolute translate-x-[-12px] top-[-8px]  rounded-full"
                    ),
                  }),
                  (0, a.jsx)("div", {
                    className: "w-[20px] h-[20px] ".concat(
                      l
                        ? "bg-gradient-to-b from-[#F9F8FF] to-[#F3F9FF]"
                        : "bg-gradient-to-r from-[#18282A] to-[#221A2C]",
                      "  absolute translate-x-[12px] right-0 top-[-8px] rounded-full"
                    ),
                  }),
                  (0, a.jsx)(x, {}),
                ],
              }),
              (0, a.jsxs)("div", {
                className: "".concat(l ? "text-black" : "text-white"),
                children: [
                  (0, a.jsx)("h1", {
                    className: "font-semibold text-xl  line-height-[20px] my-3",
                    children: t,
                  }),
                  (0, a.jsx)("p", {
                    children: (0, a.jsx)("span", {
                      children: "Oct 15 |Sun| 4:30 PM",
                    }),
                  }),
                  (0, a.jsx)("div", {
                    className: "w-[80%] m-auto opacity-60 my-3 ",
                    children: (0, a.jsx)("p", { children: i }),
                  }),
                  (0, a.jsx)("button", {
                    className: "bg-black text-white py-2 w-[229px] px-4",
                    children: r,
                  }),
                ],
              }),
            ],
          });
        },
        p = (e) => {
          let { isLightTheme: s } = e;
          return (0, a.jsx)("div", {
            className:
              "md:w-[90vw] w-fit  min-h-[900px] flex flex-col items-center ".concat(
                s
                  ? "bg-gradient-to-b from-[#F9F8FF] to-[#F3F9FF]"
                  : "bg-gradient-to-br from-[#18282A] to-[#221A2C] text-white",
                "  "
              ),
            children: (0, a.jsxs)("div", {
              className:
                " max-w-[1085.75px] w-full text-center relative  m-auto min-h-[798px] ",
              children: [
                (0, a.jsx)("div", {
                  className:
                    "absolute top-1/2 transform -translate-y-1/2 right-0",
                  children: (0, a.jsx)("div", {
                    className:
                      "w-[36.75px] h-[49px]  border border-[#2C9CF0] flex justify-center items-center",
                    children: (0, a.jsx)("svg", {
                      width: "19",
                      height: "21",
                      viewBox: "0 0 12 21",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: (0, a.jsx)("path", {
                        d: "M0.594509 19.6407C0.324454 19.3706 0.172746 19.0043 0.172746 18.6223C0.172746 18.2403 0.324454 17.874 0.594509 17.6038L7.72505 10.4733L0.594509 3.34276C0.332108 3.07107 0.186912 2.70719 0.190194 2.3295C0.193476 1.9518 0.344974 1.5905 0.612056 1.32342C0.879139 1.05633 1.24044 0.904837 1.61814 0.901554C1.99584 0.898272 2.35971 1.04347 2.6314 1.30587L10.7804 9.45486C11.0504 9.725 11.2021 10.0913 11.2021 10.4733C11.2021 10.8553 11.0504 11.2216 10.7804 11.4917L2.6314 19.6407C2.36126 19.9108 1.99492 20.0625 1.61295 20.0625C1.23098 20.0625 0.864645 19.9108 0.594509 19.6407Z",
                        fill: "#2C9CF0",
                      }),
                    }),
                  }),
                }),
                (0, a.jsx)("div", {
                  className:
                    "absolute top-1/2 transform -translate-y-1/2 left-0",
                  children: (0, a.jsx)("div", {
                    className:
                      "w-[36.75px] h-[49px] border border-[#2C9CF0] flex justify-center items-center",
                    children: (0, a.jsx)("svg", {
                      width: "19",
                      height: "21",
                      viewBox: "0 0 12 21",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: (0, a.jsx)("path", {
                        d: "M11.1545 19.6407C11.4246 19.3706 11.5763 19.0043 11.5763 18.6223C11.5763 18.2403 11.4246 17.874 11.1545 17.6038L4.02397 10.4733L11.1545 3.34276C11.4169 3.07107 11.5621 2.70719 11.5588 2.3295C11.5555 1.9518 11.404 1.5905 11.137 1.32342C10.8699 1.05633 10.5086 0.904837 10.1309 0.901554C9.75319 0.898272 9.38931 1.04347 9.11763 1.30587L0.968638 9.45486C0.698583 9.725 0.546875 10.0913 0.546875 10.4733C0.546875 10.8553 0.698583 11.2216 0.968638 11.4917L9.11763 19.6407C9.38776 19.9108 9.7541 20.0625 10.1361 20.0625C10.518 20.0625 10.8844 19.9108 11.1545 19.6407Z",
                        fill: "#2C9CF0",
                      }),
                    }),
                  }),
                }),
                (0, a.jsxs)("h1", {
                  className:
                    "md:text-[50px] text-[38px] font-semibold font-poppins  ",
                  children: [
                    "Collection ",
                    (0, a.jsx)("span", { children: "Spotlight" }),
                  ],
                }),
                (0, a.jsxs)("p", {
                  className: "pt-2 text-[14px]",
                  children: [
                    "Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable ",
                    (0, a.jsx)("br", {}),
                    " experience. Grab yours today!",
                  ],
                }),
                (0, a.jsx)("section", {
                  className:
                    "flex flex-wrap gap-16 mt-4 justify-center items-center ",
                  children: n.map((e) =>
                    (0, a.jsx)(m, { isLightTheme: s, ...e }, e.id)
                  ),
                }),
              ],
            }),
          });
        };
      function h() {
        let [e, s] = (0, r.useState)(!1);
        return (0, a.jsx)("main", {
          children: (0, a.jsxs)("div", {
            className: "".concat(
              e ? "bg-white" : "  bg-[#292B32] ",
              " flex  text-black min-h-[1778px] flex-col items-center gap-10 relative  "
            ),
            children: [
              (0, a.jsxs)("section", {
                children: [
                  (0, a.jsx)(o, { isLightTheme: e }),
                  (0, a.jsx)(p, { isLightTheme: e }),
                ],
              }),
              (0, a.jsx)("div", {
                className:
                  "absolute top-3 right-8 cursor-pointer w-[30px] h-[30px] bg-gray-600 hover:bg-gray-800 bg-opacity-60 transition duration-300 ease-in-out flex items-center justify-center rounded-md",
                onClick: () => {
                  s(!e);
                },
                children: e
                  ? (0, a.jsx)("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 24 24",
                      width: "18",
                      height: "18",
                      fill: "white",
                      children: (0, a.jsx)("path", {
                        d: "M10 7C10 10.866 13.134 14 17 14C18.9584 14 20.729 13.1957 21.9995 11.8995C22 11.933 22 11.9665 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C12.0335 2 12.067 2 12.1005 2.00049C10.8043 3.27098 10 5.04157 10 7ZM4 12C4 16.4183 7.58172 20 12 20C15.0583 20 17.7158 18.2839 19.062 15.7621C18.3945 15.9187 17.7035 16 17 16C12.0294 16 8 11.9706 8 7C8 6.29648 8.08133 5.60547 8.2379 4.938C5.71611 6.28423 4 8.9417 4 12Z",
                      }),
                    })
                  : (0, a.jsx)("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 24 24",
                      width: "18",
                      height: "18",
                      fill: "rgba(255,255,255,1)",
                      children: (0, a.jsx)("path", {
                        d: "M12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16ZM11 1H13V4H11V1ZM11 20H13V23H11V20ZM3.51472 4.92893L4.92893 3.51472L7.05025 5.63604L5.63604 7.05025L3.51472 4.92893ZM16.9497 18.364L18.364 16.9497L20.4853 19.0711L19.0711 20.4853L16.9497 18.364ZM19.0711 3.51472L20.4853 4.92893L18.364 7.05025L16.9497 5.63604L19.0711 3.51472ZM5.63604 16.9497L7.05025 18.364L4.92893 20.4853L3.51472 19.0711L5.63604 16.9497ZM23 11V13H20V11H23ZM4 11V13H1V11H4Z",
                      }),
                    }),
              }),
            ],
          }),
        });
      }
    },
  },
  function (e) {
    e.O(0, [971, 69, 744], function () {
      return e((e.s = 5286));
    }),
      (_N_E = e.O());
  },
]);
