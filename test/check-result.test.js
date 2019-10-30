import checkResult from '../get-random-throw.js';

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
    assert.equal(result, 'win');
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
    assert.equal(result, 'win');
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
    assert.equal(result, 'win');
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
    assert.equal(result, 'lose');
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
    assert.equal(result, 'lose');
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
    assert.equal(result, 'lose');
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
    assert.equal(result, 'draw');
});

test('should return draw if player has paper and computer has paper', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const playa = 'paper';
    const computa = 'paper';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResult(playa, computa);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 'draw');
});

test('should return draw if player has scissors and computer has scissors', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const playa = 'scissors';
    const computa = 'scissors';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResult(playa, computa);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 'draw');
});