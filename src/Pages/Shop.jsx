import { useReducer, useState } from 'react';
import Cart from '../Components/Cart';
import DessertList from '../Components/DessertList';
import DessertListReducer from '../Reducers/DessertListReducer';
import { DessertListContext } from '../Context/DessertListContext';
import { OrderConfirmationContext } from '../Context/OrderConfirmationContext';
import OrderConfirmed from '../Components/OrderConfirmed';
export default function Shop(){

    const [dessertList, dessertListDispatch]= useReducer(DessertListReducer, []);
    const [orderConfirmed, setOrderConfirmed]= useState(false);

    return(
        <div className='flex flex-col items-center gap-6 md:flex-row md:items-start md:justify-center w-full'>

            <DessertListContext.Provider value={{dessertList, dessertListDispatch}}>
                <div className='w-full md:w-2/3'>
                    <h1 className='text-4xl font-bold mb-5 text-Rose-900'>Desserts</h1>
                    <DessertList />
                </div>
                <OrderConfirmationContext.Provider value= {{orderConfirmed, setOrderConfirmed}}>
                    <Cart />
                    {
                        orderConfirmed && <OrderConfirmed /> 
                    }
                </OrderConfirmationContext.Provider>
            </DessertListContext.Provider>
        </div>
    )
}