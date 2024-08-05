const array = [
    {id: "three", next:"null", value: null},
    {id: "one", next:"two", value: null},
    {id: "two", next:"three", value: null},
];

const newArray = (array) => {
    return array.map(current => {
        let itemFound = array.find(obj => current.next === obj.id)
        if (itemFound)
            current.value = itemFound;
        return current; 
    })     
}

console.log(newArray(array));