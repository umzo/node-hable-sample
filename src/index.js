import Foo from './Foo.js';

const foo = new Foo();

const main = async () => {
  console.log('call sameFunction 1');

  await foo.someFunction();
  // before call hook1
  // after called hook1

  console.log('call sameFunction 2');

  foo.hook('hook1', () => {
    console.log('this hook1')
  });
  await foo.someFunction();
  // before call hook1
  // this hook1
  // after called hook1
}

main();