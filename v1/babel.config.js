module.exports = {
    presets: [
      [
        "@babel/env",
        {
          targets: {
            chrome: "79", // 크롬 79까지 지원하는 코드를 만든다
          },
        },
      ],
    ],
  }