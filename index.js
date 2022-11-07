const sum = (...rest) => rest.reduce((acc,el)=>acc+el, 0);
console.log(sum(3,4,5,2));