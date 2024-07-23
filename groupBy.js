const array = [
    {id:1 , name:"Bilal", city: "Lahore"},
    {id:1 , name:"Bilal", city: "Lahore"},
    {id:3 , name:"Hafsa", city: "Karachi"},
    {id:4 , name:"Rehan", city: "Lahore"},
    {id:5 , name:"Saqib", city: "Karachi"},
    {id:6 , name:"Farhan", city: "Islamabad"}
]

const groupBy = (array, key) => {
    return array.reduce((acc, obj) => {
        if(!acc[obj[key]])
            acc[obj[key]] = [];
        acc[obj[key]].push(obj);
        return acc;
    }, {});
}

console.log(groupBy(array, 'city')); // group by city
console.log(groupBy(array, 'name')); // group by name
console.log(groupBy(array, 'id')); // group by id
