const glob = require('globby')
const path = require('path')

const go = async () => {
  const tsFiles = await glob(['react/__tests__', 'react/__mocks__'], {
    absolute: true,
    cwd: path.join(__dirname, '..'),
  })
  
  console.log(tsFiles)
}

go()
