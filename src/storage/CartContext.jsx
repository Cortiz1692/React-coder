import { createContext, useState } from "react";

const cartContext = createContext({ cart: [] });

const Provider = cartContext.Provider;

function CartContextProvider(props){
 
    const [cart, setCart] = useState([]);

    function addToCart(item,count){
        let indexItemInCart = cart.findIndex( itemInContext => itemInContext.id === item.id )   
        let isItemInCart = indexItemInCart !== -1;
        const newCart = [...cart];

        if (isItemInCart){
            newCart[indexItemInCart].count += count
            setCart(newCart)
        }
        else {
            newCart.push( {...item, count: count})        
            setCart(newCart);
        }   
    }
    
    function totalItemsInCartfn(){
        let totalItemsInCart = 0;
        cart.forEach( item => totalItemsInCart += item.count);
        return totalItemsInCart;
    }
    const removeItems = (iditem)=>{
        let newCart = cart.filter((itemInCart)=> itemInCart.id !== iditem );
        setCart(newCart);

    }
        const clearCart = ()=> { setCart ([])};
        
       const totalPrice= () =>{        
         return cart.reduce((prev, act)=> prev + act.count * act.price,0)
        }       
    return(
        <Provider value={ {
            cart, 
            addToCart,
            totalItemsInCartfn,
            clearCart,
            removeItems,
            totalPrice
            }}>
             {props.children}
        </Provider>
    );
}

export { cartContext, CartContextProvider };