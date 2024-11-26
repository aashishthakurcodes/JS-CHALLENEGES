// ### Activity 4: Module Pattern
// - **Task 6**: Use closures to create a simple module for managing a collection of items. Implement methods to add, remove, and list items.

function manageItems() {
    let items = [];
    function add(item) {
        items.push(item)
        console.log(`${item} added to the collection.`);
    }
    function remove(item) {
        const index = items.indexOf(item)
        if (index !== -1) {
            items.splice(index, 1);
            console.log(`${item} removed from the collection.`);
        } else {
            console.log(`${item} not found in the collection.`);
        }
    }
    function list() {
        items.forEach(item =>console.log(item));
    }

    return{add,remove,list}
}

let collection=manageItems();
collection.add("Mango")
collection.add("Orange")
collection.add("Guava")
collection.add("Grapes")
collection.remove("Guava")
collection.list();
// console.log(collection.list())