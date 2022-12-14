/**
 * ratingAverage, ratingCount properties
 */

const centers = require('../../data/centers.json')

export default function handler(request, response) {
  response.status(200).json(centers)
}
