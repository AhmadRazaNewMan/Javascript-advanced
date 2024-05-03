let obj = {
    name: "ahmad raza",
    class: "12",
    Discipline: "Computer Science"
};

 let entries = Object.entries(obj)
 console.log(entries)
 console.log(entries.flat(Infinity))


 let arrToObject  = Object.fromEntries(entries)
 console.log(arrToObject)