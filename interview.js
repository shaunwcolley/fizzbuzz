// IBM interview file if needed


const fizzBuzz = () => {
  // 1-100, % 3 === 0: Fizz  % 5 === 0: Buzz % 15 === 0: FizzBuzz

  for (let i = 1; i < 101; i++) {
    if (i % 15 === 0) {
      console.log('FizzBuzz')
    } else if (i % 3 === 0) {
      console.log('Fizz')
    } else if (i % 5 === 0) {
      console.log('Buzz')
    } else {
      console.log(i)
    }
  }
}

fizzBuzz();
