import { useReducer } from 'react';
import Cart from '../Components/Cart';
import DessertList from '../Components/DessertList';
import DessertListReducer from '../Reducers/DessertListReducer';
import { DessertListContext } from '../Context/DessertListContext';
export default function Shop(){

    const [dessertList, dessertListDispatch]= useReducer(DessertListReducer, []);

    return(
        <div className='flex flex-col items-center gap-6 md:flex-row md:items-start md:justify-center'>

            <DessertListContext.Provider value={{dessertList, dessertListDispatch}}>
                
                <DessertList />
                <Cart />
            </DessertListContext.Provider>
        </div>
    )
}