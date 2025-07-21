import { useContext } from "react";
import CartItem from "./CartItem";
import { DessertListContext } from "../Context/DessertListContext"
import { motion, AnimatePresence } from 'motion/react'
import { OrderConfirmationContext } from "../Context/OrderConfirmationContext";

export default function Cart(){

    const {dessertList, dessertListDispatch}= useContext(DessertListContext);
    const {orderConfirmed, setOrderConfirmed}= useContext(OrderConfirmationContext);
    const numElements= dessertList.length;
    let total= 0;

    dessertList.forEach(element => {

        total= total + (element.quantity* element.price);
    });

    return(
        <div className="bg-Rose-50 rounded-lg p-6 flex flex-col gap-7 w-full md:w-1/3">
            <h1 className="text-2xl font-bold text-Red">Your Cart ({numElements})</h1>
            {
            numElements === 0 ? (

                <AnimatePresence>
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                        className="flex flex-col items-center justify-center gap-3">
                        <img src="/products-list-with-cart/assets/images/illustration-empty-cart.svg" alt="empty cart" />
                        <p className="text-Rose-500 font-semibold">Your added items will appear here</p>
                    </motion.div>
                </AnimatePresence> ) 
                : 
                (
                <div>
                    
                    <AnimatePresence >
                    {
                    dessertList.map((element) => ( 
                            <motion.div key={element.name}
                                initial={{y: -20, opacity: 0, scale: 0.95}}
                                animate= {{y: 0,  opacity: 1, scale: 1}}
                                exit= {{y: 20,  opacity: 0, scale: 0.95}}
                                transition={{ duration: 0.25, ease: 'easeOut' }} >
                                <CartItem cartItem={element} />
                            </motion.div>
                    ))
                     }
                    </AnimatePresence>
                    
                    <dl className="flex justify-between gap-1 mt-7 mb-5">
                        <dt className="text-Rose-900 text-sm">Order Total</dt>
                        <dd className="text-2xl font-bold text-Rose-900">${total.toFixed(2)}</dd>
                    </dl>
                    <div className="bg-rose-50 rounded-md py-4 flex items-center justify-center gap-2 mb-5">
                        <img src="/products-list-with-cart/assets/images/icon-carbon-neutral.svg" alt="carbon neutral icon" />
                        <p className="text-Rose-900 text-sm">This is a <span className="font-semibold">carbon-neutral</span> delivery</p>
                    </div>
                    <button className="w-full text-center bg-Red rounded-3xl py-3 text-Rose-50 font-medium cursor-pointer hover:brightness-90
                    transition duration-200 ease-in"
                        onClick={()=>setOrderConfirmed(true)}>Confirm Order</button>
                </div>
            )}
        </div>
    )
}