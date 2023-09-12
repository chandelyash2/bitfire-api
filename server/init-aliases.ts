import moduleAlias from 'module-alias'
moduleAlias.addAliases({
  '@server': __dirname,
  '@gateway': __dirname + '/Gateway/',
  '@databse': __dirname + '/Database/',
  '@services': __dirname + '/Services/',
})
