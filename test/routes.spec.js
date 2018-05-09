const chai = require('chai')
const assert = require('chai').assert
chai.use(require('chai-http'))

const app = require('../app')

describe('Routes', () => {
  it('should return all users @routes-return-all-users', function() {
    return chai.request(app)
      .get('/users')
      .then(function(res) {
        assert(res.status == 200, "The response status code is not 200").to.have.status(200)
        // assert(res).to.be.json
        // assert(res.body).to.be.an('object')
        // assert(res.body.users).to.be.an('array')
      })
  })
})
