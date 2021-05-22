
const isPro = Object.is(process.env.NODE_ENV, 'production')

console.log(isPro);

module.exports = {
  baseUrl: isPro ? 'http://blog.gupern.com/api/' : 'api/'
}
