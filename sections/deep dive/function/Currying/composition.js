
// Key takeaways from the video:-
// To compose two functions accepting two arguments, following can be done:- 
function composeTwo(fn1, fn2){
return function(a, b){
return fn2(fn1(a,b));
};
}
// In ES6, the same can be written as, 
const c2f=(fn1, fn2) => (a,b) => fn2(fn1(a,b));

// and for composing unlimited functons, we can do the following:-
function compose(...fns){
 return function(...values){
  return fns.reduce( (a,b) => b(a), value);
};
}