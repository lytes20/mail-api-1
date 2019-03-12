const chai = require('chai');
const chaiHttp = require('chai-http');

const app = require('../../app');

chai.should();
chai.use(chaiHttp);

const newUser = {
  id: 12,
  email: 'email@email.com',
  firstname: 'Alela',
  lastname: 'Syn',
  password: 'password',
};

describe('User auth', () => {
  it('correctly singups a user', (done) => {
    chai
      .request(app)
      .post('/user/auth/signup')
      .send(newUser)
      .set('accept', 'application/json')
      .end((err, res) => {
        res.should.have.status(201);
        done();
      });
  });

  it('correctly logins a user', (done) => {
    chai
      .request(app)
      .post('/user/auth/login')
      .send(newUser)
      .set('accept', 'application/json')
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });

  it('rejects user with invalid credentials', (done) => {
    const invalidCredentials = {
      email: 'email',
      password: 'pass',
    };
    chai
      .request(app)
      .post('/user/auth/login')
      .send(invalidCredentials)
      .set('accept', 'application/json')
      .end((err, res) => {
        res.should.have.status(403);
        done();
      });
  });
});
