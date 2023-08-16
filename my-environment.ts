import NodeEnvironment from 'jest-environment-node';

// should work but it doesn't
console.log(import.meta.url)
// works but shouldn't
// console.log(__dirname)

export default NodeEnvironment