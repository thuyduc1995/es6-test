const isObject = (obj) =>
  typeof obj === 'object' && obj !== null && !Array.isArray(obj);

const isFunction = (func) => typeof func === 'function';

const isGeneratorLike = (obj) =>
  isObject(obj) && isFunction(obj.next) && isFunction(obj.throw);


function asynq(generatorFactory){
  const generator = generatorFactory();

  if (!isGeneratorLike(generator)) {
    return Promise.reject(
      new Error('Provided function must return a generator.'),
    );
  }

  return (function resolve(result) {
    if (result.done) {
      return Promise.resolve(result.value);
    }

    return Promise.resolve(result.value)
      .then((ensuredValue) => resolve(generator.next(ensuredValue)))
      .catch((error) => resolve(generator.throw(error)));
  })(generator.next());
}


const data =