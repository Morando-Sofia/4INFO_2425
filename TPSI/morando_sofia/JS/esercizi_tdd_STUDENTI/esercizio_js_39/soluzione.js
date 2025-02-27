export const reverse = (l) => {

let array = [];

l.forEach(element => {
    array.unshift(element)
});
return array;
    
}