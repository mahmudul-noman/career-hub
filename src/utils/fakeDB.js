// use local storage to manage job data
const addToDb = id => {
    let shoppingCart = {}

    const storedCart = localStorage.getItem('applied-job')
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart)
    }

    // add quantity
    const quantity = shoppingCart[id]
    if (quantity) {
        const newQuantity = quantity + 1
        shoppingCart[id] = newQuantity
    } else {
        shoppingCart[id] = 1
    }
    localStorage.setItem('applied-job', JSON.stringify(shoppingCart))
}

const getStoredCart = () => {
    let shoppingCart = {}

    //get the job data from local storage
    const storedCart = localStorage.getItem('applied-job')
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart)
    }
    return shoppingCart
}

export { addToDb, getStoredCart }