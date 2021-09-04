import data from './data.json'

const domains = data.map((item) => item.img)

module.exports = {
  images: {
    domains,
  },
  target: 'serverless',
}
