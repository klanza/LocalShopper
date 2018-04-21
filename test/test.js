process.env.NODE_ENV = 'test';

let ko = require("nekodb");
let { User, Product } = require('../models');

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();

chai.use(chaiHttp);

describe('Products', () => {
    beforeEach((done) => {
        // console.log(Product.deleteMany)
        Product.deleteMany({}).then((err) => { 
          console.log(err)
           done();         
        });     
    });
  describe('/GET products', () => {
      it('it should GET all the products', (done) => {
            chai.request(server)
            .get('/api/products')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(0);
              done();
            });
      });
  });
  // afterEach((done) => {
  //   const product = {
  //     productName: 'Nintendo Switch with Gray Joy-Con',
  //     sku: '',
  //     upc: '045496590086',
  //     serialNumber: '',
  //     price: '299.99',
  //     seller: '1',
  //     keywords: ['game', 'console'],
  //   }
  //     chai.request(server)
  //     .post('/api/products')
  //     .send(product)
  //     .then((response) => {
  //       done();
  //     });
  // });
});

describe('Users', () => {
    beforeEach((done) => {
      const newUser = {
        username: 'Christopheryc',
        password: 'Testing1234!'
      }
      chai.request(server)
      .post('/api/users')
      .send(newUser)
      .then((response) => {
        done();
      });    
    });
  describe('/GET users', () => {
      it('it should GET all the users', (done) => {
            chai.request(server)
            .get('/api/users')
            .end((err, res) => {
                // res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(1);
              done();
            });
      });
  });
  describe('login user', () => {
      it('it should login a user', (done) => {
        chai.request(server)
          .put('/api/login')
          .send({ username: 'Christopheryc', password: 'Testing1234!' })
          .then(function (res) {
             res.should.have.status(200);
             done();
          })
          .catch(function (err) {
             throw err;
          });
      });
  });
  // describe('grab logged user info', () => {
  //   it('it should display users information', (done) => {
  //     chai.request(server)
  //       .get('/api/users/me')
  //       .end((err, res) => {
  //         console.log(res.body.user);
  //         res.body.should.be.a('object');
  //         res.body.Username.should.be.eql('Christopheryc');
  //         done();
  //       }); 
  //   });
  // });

});









