const Nightmare = require('nightmare')
const assert = require('assert')

describe('UI Flow Tests', function() {
  this.timeout('60s')

  let nightmare = null
  beforeEach(() => {
    nightmare = new Nightmare({ show: true })
  })
  // loads home page
  describe('Home Page', function() {
    describe('/ (Home Page)', () => {
      it('should load without error', done => {
        // your actual testing urls will likely be `http://localhost:port/path`
        nightmare.goto('https://localshopper.herokuapp.com')
          .end()
          .then(function (result) { done() })
          .catch(done)
      })
    })
    // loads 
    describe('/SignUp (Loads SignUp Page)', () => {
      it('should load without error',  done => {
        nightmare.goto('https://localshopper.herokuapp.com/SignUp')
          .end()
          .then(result => { done() })
          .catch(done)
      })
    })
  })

  describe('Creating a user', function () {
    describe('Filling out form to register as a user', () => {
      it('should work without timing out', done => {
        nightmare
        .goto('https://localshopper.herokuapp.com/SignUp')
        .type('input[name=username]', 'Christopheryc')
        .type('input[name=password]', 'Testing1234!')
        .type('input[name=confirm]', 'Testing1234!')
        .type('input[name=address]', '3212 e speedway blvd')
        .type('input[name=storeName]', 'I sell Donuts')
        .type('input[name=picture]', 'kdsjflksd')
        .click('.btn')
        .wait(2000)
        .end()
        .then(result => { done() })
        .catch(done)
      })
    })
  })
})

