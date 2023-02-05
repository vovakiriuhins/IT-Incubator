let age = function(n) {
    return 15 + ", " + n;
}


let hello = function(name, fn) {
    console.log("привет, " + name);
    console.log(fn(name));
};
hello("Аня", age);