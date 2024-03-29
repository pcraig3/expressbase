let i18n = require('i18n')
let path = require('path')

i18n.configure({
  locales: ['en', 'fr'],
  directory: path.join(__dirname, '../locales'),
  defaultLocale: 'en',
  queryParameter: 'lang',
})

module.exports = i18n
