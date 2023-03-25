// use local storage to manage cart data
const addToDb = id =>{

let shoppingCart = {};
//    get the chopping cart from local storage
const storedCart = localStorage.getItem('shopping-cart');
if(storedCart){
shoppingCart = JSON.parse(storedCart);
}



       
    // add quantity
    const quantity = shoppingCart[id];
    if(quantity){

const newQuantity = quantity +1;
shoppingCart[id]=newQuantity;
// localStorage.setItem(id,newQuantity)
    }else{
        shoppingCart[id] = 1;
        // localStorage.setItem(id,1);
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}
const removeFromDb = id =>{
// console.log('inside fake db', id);
const storedCart = localStorage.getItem('shopping-cart');
if(storedCart){
    const shoppingCart= JSON.parse(storedCart);
    if(id in shoppingCart){
// console.log('exist in the cart');
delete shoppingCart[id];
localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
    }
}
}

const deleteShoppingCart = () =>{
    localStorage.removeItem('shopping-cart');
}

export  {
    addToDb,
    removeFromDb,
  deleteShoppingCart
};