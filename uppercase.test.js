const {uppercase, uppercaseCallBack, uppercasePromise} = require('./uppercase');

test(`uppercase 'test' to equal 'TEST'`, () => {
  expect(uppercase('test')).toBe('TEST');
});

test(`uppercaseCallBack 'test' to equal 'TEST'`, (done) => {
  uppercaseCallBack('test', (str) => {
    expect(str).toBe('TEST');
    done();
  });
});

// test(`uppercasePromise 'test' to equal 'TEST'`, () => {
//   return uppercasePromise('test').then( (str) => {
//     expect(str).toBe('TEST');
//   });
// });

test(`uppercasePromise 'test' to equal 'TEST'`, async () => {
  const str = await uppercasePromise('test');
  expect(str).toBe('TEST');
});

// test(`uppercasePromise '' to equal 'Empty string'`, () => {
//   return uppercasePromise('').catch((str) => {
//     expect(str).toBe('Empty string');
//   })
// });

test(`uppercasePromise '' to equal 'Empty string'`, async () => {
//   const str = await uppercasePromise('');
//   expect(str).toBe('Empty string');
//   try {
//     await uppercasePromise('');
//   } catch(error) {
//     expect(error).toBe('Empty string');
//   }
  await expect(uppercasePromise('')).rejects.toBe('Empty string');

});



