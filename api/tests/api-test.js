const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../app');

chai.should();

chai.use(chaiHttp);

describe('Testing my api', () => {
  it('testing that endpoint', (done) => {
    chai
      .request(app)
      .get('/')
      .set('accept', 'application/json')
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});
