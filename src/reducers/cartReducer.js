import pizza from "../assets/italian.jpg";
import margarita from "../assets/margarita.png";
import carbonara from "../assets/carbonara.png";

export const address = "../assets/italian.jpg";

const menu = {
  pizzas: [
    {
      id: 0,
      image: margarita,
      title: "Margarita",
      description: "Bàsica",
      price: 9.50,
    },
    {
      id: 1,
      image: carbonara,
      title: "Carbonara",
      description: "Deliciosa pizza amb ceba, pernil i bacó",
      price: 9.50,
    },
  ],
  pastas: [
    {
      id: 2,
      image: pizza,
      title: "Bolognesa",
      description: "MEATBALL",
      price: 99.99,
    },
  ],
};

const initState = {
    items: menu,
    addedItems:[],
    total: 0,
    totalItems: 0
}
const cartReducer= (state = initState,action)=>{
    if(action.type === "ADD_TO_CART"){

      
      //Find item to add and if the item was added already
      let addedItem = findNestedId(state.items, action.id)
      let existedItem= state.addedItems.find(item=> action.id === item.id)
      
      state.totalItems+=1

      if(existedItem)
      {
        console.log("Item id "+action.id+" already in cart, adding +1")
        addedItem.quantity +=1
        return{
          ...state,
          total: state.total + addedItem.price,
        }
      }
      else{
        console.log("Item id "+action.id+" not in cart, adding")
        addedItem.quantity = 1;
        //calculating the total
        let newTotal = state.total + addedItem.price
        return{
          ...state,
          addedItems: state.addedItems.concat([addedItem]),
          total : newTotal
        }
      }
    }
    if(action.type === "REMOVE_FROM_CART"){
      //Find item to add and if the item was added already
      let addedItem = findNestedId(state.items, action.id)
      let existedItem= state.addedItems.find(item=> action.id === item.id)

      if(existedItem)
      {
        console.log("Item id "+action.id+" already in cart, removing -1")
        state.totalItems-=1
        let newTotal = state.total - addedItem.price
        //If there was only one item we remove it
        if(addedItem.quantity===1){
          for(var i=0; i<state.addedItems.length; i++){
            if(state.addedItems[i].id===action.id)
              state.addedItems.splice(i,1)
          }
        }
        else{
          //If there was more than one we substract an item
          addedItem.quantity-=1
        }
        return{
          ...state,
          total: newTotal
        }
      }
      else{
        console.log("Item id "+action.id+" not in cart, not doing anything")
      }
    }
    
    return state;

}
//Per trobar un objecte al menu donat un id
const findNestedId = (dict,id_item) =>{
  for(var i=0; i<Object.keys(dict).length; i++){
    let list = dict[Object.keys(dict)[i]]
    for(var j=0; j< list.length; j++){
      if(list[j].id === id_item)
        return dict[Object.keys(dict)[i]][j]
    }
      
  }
}
export default cartReducer;