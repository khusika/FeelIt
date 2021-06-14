module.exports = {
  plugins: {
    '@fullhuman/postcss-purgecss': {
      content: ['./assets/js/*.js', './layouts/*.html', './layouts/**/*.html', './layouts/**/**/*.html'],
      // Safelist selectors based on a regular expression
      // https://purgecss.com/safelisting.html#patterns
      safelist: {
        deep: [ ],
        greedy: [ ]
      },
      // Blocklist will block the CSS selectors from appearing in the final output CSS
      blocklist: [ ]
    },
  }
};
