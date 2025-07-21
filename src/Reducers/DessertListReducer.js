export default function DessertListReducer (state, action){
    
    switch(action.type){

        case "ADD_DESSERT" : {
            return [
                ...state, 
                {
                    name: action.name,
                    price: action.price,
                    quantity: 1
                }
            ]
        }
        case "INCREMENT_QTY":{

            return state.map(d=> {
                if(d.name=== action.name) {
                    return {
                        ...d,
                        quantity: d.quantity+1
                    }}
                else {return d}
            })

        }
        case "DECREMENT_QTY": {
            return state.map(d=> {
                if(d.name=== action.name) {
                    return {
                        ...d,
                        quantity: d.quantity-1
                    }}
                else {return d}
            }).filter(d=>d.quantity> 0)
        }
        case "DELETE_DESSERT": {
            
            return state.filter(e=>e.name != action.name)
        }
        case "EMPTY_DESSERTS": {
            return []; 
        }
    }
}