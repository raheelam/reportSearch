const getProducts = () =>{
    //gotta use lodash later on when i want to use this and react thunk
  return {
      type: 'GET_PRODUCTS'
  }
};
export const activateTag = (tag) =>{
    return{
        type: "ADD_TAG",
        payload: tag 
    }

};

export const deactivateTag = (tag) =>{
    return{
        type: "REMOVE_TAG",
        payload: tag 
    }

};

export const selectProduct = (product)=>{
    return {
        type: 'SELECT_PRODUCT',
        payload: product
    }

};

export const selectOption = (option)=>{
    return {
        type: 'SELECT_OPTION',
        payload: option
    }

};


export const selectQty = (qty) =>{
    return{
        type: "SELECT_QTY",
        payload: qty
    }
};

export const selectSize = (size) =>{
    return{
        type: "SELECT_SIZE",
        payload: size
    }
};

export const addToCart = (product) =>{
    return{
        type: "ADD_TO_CART",
        payload: product
    }
};

export const increaseQty = (qty) =>{
    return{
        type: "INCREASE_QTY",
        payload: qty
    }
};

export const removeFromCart = (itemId) =>{
    return{
        type: "REMOVE_FROM_CART",
        payload: itemId
    }
};
export const emptyCart = () =>{
    return{
        type: "EMPTY_CART"
    }
};