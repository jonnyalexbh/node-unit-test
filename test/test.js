'use strict';
 
const chai = require('chai');  
const expect = require('chai').expect;
 
chai.use(require('chai-http'));
 
var app = require('../app');
var basePath = '/dsh/api/v1';
 
describe('Beginning API Test books', function() {  
  //this.timeout(5000); // How long to wait for a response (ms)
 
  before(function() {
 
  });
 
  after(function() {            
      process.exit(0);
  });    
 
  // GET - List all books
  it('should return all books', function() {
      return chai.request(app)
      .get(basePath + '/books')
      .then(function(res) {
        expect(res).to.have.status(200);
        expect(res).to.be.json;                
        expect(res.body).to.be.an('array');          
      });      
  });
    
  // GET - Book by Id
  it('should return one book', function() {
    return chai.request(app)
      .get(basePath + '/books/1')
      .then(function(res) {
        expect(res).to.have.status(200);
        expect(res).to.be.json;                
        expect(res.body).to.be.an('object');
      });
  });
    
  // POST - Add new book
  it('should add new book', function() {
    return chai.request(app)
      .post(basePath + '/books')
      .send({
          "title": "El coronel no tiene quien le escriba",
          "author": "Gabriel Garcia Marquez",
          "year": "1961",
          "edition": "desconocida"         
      })
      .then(function(res) {
        expect(res).to.have.status(201);
        expect(res).to.be.json;
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('id');			
      });
  });    
});