import checkResult from '../check-result.js';

// IMPORT MODULES under test here:
// import example from '../src/example.js';

const test = QUnit.test;

test('should return win if player has rock and computer has scissors', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const playa = 'rock';
    const computa = 'scissors';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResult(playa, computa);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 'WIN');
});

test('should return win if player has scissors and computer has paper', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const playa = 'scissors';
    const computa = 'paper';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResult(playa, computa);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 'WIN');
});

test('should return win if player has paper and computer has rock', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const playa = 'paper';
    const computa = 'rock';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResult(playa, computa);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 'WIN');
});

test('should return lose if player has scissors and computer has rock', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const playa = 'scissors';
    const computa = 'rock';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResult(playa, computa);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 'LOSE');
});

test('should return lose if player has paper and computer has scissors', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const playa = 'paper';
    const computa = 'scissors';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResult(playa, computa);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 'LOSE');
});

test('should return lose if player has scissors and computer has rock', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const playa = 'scissors';
    const computa = 'rock';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResult(playa, computa);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 'LOSE');
});

test('should return draw if player has rock and computer has rock', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const playa = 'rock';
    const computa = 'rock';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResult(playa, computa);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 'DRAW');
});

test('should return draw if player has paper and computer has paper', function (assert) {
    //Arrange
    // Set up your parameters and expectations
    const playa = 'paper';
    const computa = 'paper';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResult(playa, computa);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 'DRAW');
});

test('should return draw if player has scissors and computer has scissors', function (assert) {
    //Arrange
    // Set up your parameters and expectations
    const playa = 'scissors';
    const computa = 'scissors';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResult(playa, computa);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 'DRAW');
});