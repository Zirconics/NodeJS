const sum = require('./sum');

test('one and two is three', () => {
    expect(sum(1,2)).toBe(3);
    
});

test('one and nine is ten', () => {
    expect(sum(1,9)).toBe(10);
    
})