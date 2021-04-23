const timeup = (fn, wait, defaultValue) => {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => resolve(defaultValue), wait)
    fn().then(result => {
      clearTimeout(timer)
      resolve(result)
    })
  })
}

const mockFunction = () => new Promise((resolve) => setTimeout(() => resolve(1), 50000))


timeup(mockFunction, 1000, 2).then(result => console.log(result)).finally()


