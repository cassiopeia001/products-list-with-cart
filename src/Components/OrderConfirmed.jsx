import { useContext } from "react";
import OrderItem from "./OrderItem";
import { OrderConfirmationContext } from "../Context/OrderConfirmationContext";
import { DessertListContext } from "../Context/DessertListContext";
import { AnimatePresence, motion } from "motion/react";

export default function OrderConfirmed(){
    
    const {dessertList, dessertListDispatch}= useContext(DessertListContext);
    const {orderConfirmed, setOrderConfirmed}= useContext(OrderConfirmationContext);
    let total= 0 ;

    return(
        <AnimatePresence>
            <motion.div 
                initial={{opacity: 0}}
                animate= {{opacity : 1}}
                exit= {{opacity: 0 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="fixed inset-0 bg-black/60 w-full h-full overflow-y-auto">
                <div className="min-h-full flex flex-col justify-end md:justify-center items-center">
                    <div className="w-full bg-white rounded-t-2xl py-7 px-5 md:w-1/2 lg:w-1/3 md:rounded-2xl  overflow-y-auto">
                    <img className="mb-5" src="/products-list-with-cart/assets/images/icon-order-confirmed.svg" alt="order confirmed icon" />
                    <h1 className="text-4xl font-bold mb-1">Order Confirmed</h1>
                    <p className="text-Rose-500 mb-6">We hope you enjoy your food!</p>
                    <div className="bg-Rose-50 rounded-lg p-6 mb-7">
                        {
                        dessertList.map(element=>{

                            total= total+ (element.price*element.quantity)
                            
                            return(<OrderItem element={element} /> )
                            
                        })
                        }
                        
                        <div className="flex justify-between mt-5 text-Rose-900">
                            <p className="text-Rose-500">Order Total</p>
                            <p className="text-2xl font-bold">${total.toFixed(2)}</p>
                        </div>
                    </div>
                    <button className="w-full text-center bg-Red rounded-3xl py-3 text-Rose-50 font-medium cursor-pointer hover:brightness-90
                        transition duration-200 ease-in" 
                        onClick={()=>{
                            dessertListDispatch({
                                type: "EMPTY_DESSERTS"
                            });
                            setOrderConfirmed(false)
                        }}>Start New Order</button>
                </div>
            </div>
            </motion.div>
        </AnimatePresence>
    )
}