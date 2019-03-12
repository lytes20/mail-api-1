const chai = require("chai");
const chaiHttp = require("chai-http");

const app = require("../../app");

chai.should();
chai.use(chaiHttp);

const newUser = {
  id: 12,
  email: "email.gmail.com",
  firstname: "Alela",
  lastname: "Syn",
  password: "Password"
};

describe("User auth", () => {
  it("user auth endpoint", done => {
    chai
      .request(app)
      .post("/user/auth/signup")
      .send(newUser)
      .set("accept", "application/json")
      .end((err, res) => {
        console.log(res);
        res.should.have.status(201);
        done();
      });
  });
});
