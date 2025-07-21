import { useContext } from "react"
import { DessertListContext } from "../Context/DessertListContext"

export default function CartItem({cartItem}){

    const {dessertList, dessertListDispatch}= useContext(DessertListContext);
    return(
        <div className="flex justify-between items-center text-sm pb-3 mb-3 border-b-[1px] border-Rose-100">
            <div className="flex flex-col gap-1">
                <h3 className="text-Rose-900 font-semibold">{cartItem.name}</h3>
                <div className="flex gap-4 w-fit">
                    <p className="text-Red font-semibold">{cartItem.quantity}x</p>
                    <p className="text-Rose-400">
                        @ ${cartItem.price}
                        <span className="font-semibold text-Rose-500 ml-2">${(cartItem.price*cartItem.quantity).toFixed(2)}</span>
                    </p>
                </div>
            </div>
            <div>
                <button className=" group rounded-full border-[1px] border-Rose-400 h-4 w-4 flex items-center justify-center hover:border-Rose-900 cursor-pointer"
                aria-label={`delete ${cartItem.name} from the cart`}
                onClick={()=>{
                    dessertListDispatch({
                        type: "DELETE_DESSERT",
                        name: cartItem.name
                    })
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="fill-[#CAAFA7] group-hover:fill-Rose-900" width="10" height="10" viewBox="0 0 10 10">
                        <path d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"/>
                    </svg>
                </button>
            </div>
        </div>
    )
}