const multiply = require('./multiply');

test('one times two is two', () => {
    expect(multiply(1,2)).toBe(2);
    
});

test('five times five is 25', () => {
    expect(multiply(5,5)).toBe(25);
    
})