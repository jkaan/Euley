const languages = {
  python: {
    open_multiline_comment: '\"\"\"',
    close_multiline_comment: '\"\"\"',
    extension: 'py',
    command: 'py'
  },
  java: {
    open_multiline_comment: '/*',
    close_multiline_comment: '*/',
    extension: 'java',
    command: 'java'
  },
  javascript: {
    open_multiline_comment: '/*',
    close_multiline_comment: '*/',
    extension: 'js',
    command: 'node',
  },
  ruby: {
    open_multiline_comment: '=begin',
    close_multiline_comment: '=end',
    extension: 'rb',
    command: 'ruby'
  },
  "c#": {
    open_multiline_comment: '/*',
    close_multiline_comment: '*/',
    extension: 'cs',
    command: 'start',
  },
  kotlin: {
    open_multiline_comment: '/*',
    close_multiline_comment: '*/',
    extension: 'kt',
    command: 'kotlinc'
  }
}

module.exports = languages
