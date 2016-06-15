# Memory leaks

## What are memory leaks

Memory leak is memory is not required by an application anymore that for some reason is not returned to the operating system pool of free memory.

## Memory managment in javascript

Javascript is one of garbage collected languages. GC help developers to manage memory by periodicaly checking wich of parts of memory are used from other parts of application.

## leaks in js

the main cause of leaks is unwanted refernce.

### how GC determines a piece of memmory

Most GC use the algorithm knows "Mark and sweep":

#### Mark and sweep:

1. GC build a list of roots(global variables. Example: window).

2. All roots are inspected as active, all children are inspect recursivly as well.

3. All pieces of memory not marked garbage can now considered. Free memmory return to OS.

## Three types of Common JS leaks

* Accidental global variables: a reference to undeclared variable creates a new variable inside the global object. Example: this

```javascript
function foo (bar) {
    bar = "some";
}
```

is equals to

```javascript
function foo (bar) {
    window.bar = "some";
}
```

> To prevent these mistkes from happening, add ``` "use strict";``` at the beginning js file. 
>This enable a stricter mode of parsing Javascript that preventsaccidental globals.

* **Forgotten timers and callbacks**: The use of ``` setInterval``` is quite common in javascript.

```javascript
var someResource = getData();

setInterval(function() {
    var node = document.getElementById("Node");

    if (node) {
        //do stuff with node and someResource
        node.innerHTML = JSON.stringify(someResource);
    }
}, 1000);
```

* **Out of DOM refernces**.

* **Closures**(замыкание): closures are key aspect of js development. *Closures* - anonymus functions that capture(захватывают) variables from parent scopes.