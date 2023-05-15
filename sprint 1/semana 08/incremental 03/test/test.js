var chai = require ("chai");
var assert = chai.assert;
var should = chai.should();
var expect = chai.expect;

var index = require ("../index.js")

/* No funcionaba antes del cambio

describe ("Testing assert function:", function(){
	describe ("Testing assert function:", function(){
		it ("check returning value: assert.equal(value,value)", function(){
			result = index.addTest (1,1);
			assert.equal(result,2);
		});
	});
});
*/

//Funciona, solo ejecuta un test 

// describe("Testing assert function:", function() {
// 	it("should check returning value: assert.equal(value,value)", function() {
// 	  var result = index.addTest(1, 1);
// 	  assert.equal(result, 3);
// 	});
//   });


// Funciona!

describe('Testing assert function: ', function() {
    describe('Check addTest Function', function(){
      it('Check the returned value using : assert.equal(value, value): ', function() {
         result = index.addTest(1,1);
         assert.equal(result, 2);
      });
    });
  })