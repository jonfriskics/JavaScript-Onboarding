const chai = require('chai')
const expect = require('chai').expect
chai.use(require('chai-http'))

const app = require('../app')

describe('Routes', () => {
  it('should return all users @routes-return-all-users', function() {
    return chai.request(app)
      .get('/users')
      .then(function(res) {
        expect(res).to.have.status(200)
        expect(res).to.be.json
        expect(res.body).to.be.an('object')
        expect(res.body.users).to.be.an('array')
      })
  })
})
