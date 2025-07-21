import { DessertListContext } from "../Context/DessertListContext"
import { useContext } from "react";
export default function DessertCard({dessertItem}){

    const {dessertList, dessertListDispatch}= useContext(DessertListContext);

    let d = dessertList?.find(d=> dessertItem.name=== d.name)
    const qty= d ? d.quantity : 0

    return (
        <div className="flex flex-col justify-between h-full w-full">
            <div className={`mb-10 relative flex justify-center rounded-lg w-full outline-2 ${qty>0? 'outline-Red':'outline-transparent'}
            transition-colors duration-200 ease-in`}>
                <picture className="w-full">
                    <source media="(max-width: 768px)" srcSet={dessertItem.image.mobile} />
                    <source media="(max-width: 1024px)" srcSet={dessertItem.image.tablet} />
                    <source media="(min-width: 768px)" srcSet={dessertItem.image.desktop} />
                    <img className="rounded-lg md:h-auto w-full" src={dessertItem.image.desktop} alt={dessertItem.name} />
                </picture>

                <button
                    className={`absolute -bottom-6 w-1/2 sm:w-1/3 md:w-2/3 rounded-3xl py-3 px-1 font-medium flex items-center justify-center gap-2 
                    border-[1px] border-Rose-400 bg-Rose-50 text-Rose-900 hover:text-Red hover:border-Red cursor-pointer
                    transition-opacity transition-transform duration-200 ease-in-out
                    ${qty === 0 ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-90 pointer-events-none'}`}
                    onClick={() =>
                    dessertListDispatch({
                        type: "ADD_DESSERT",
                        name: dessertItem.name,
                        price: dessertItem.price.toFixed(2),
                    })
                    }>
                    <img className="w-5" src="/products-list-with-cart/assets/images/icon-add-to-cart.svg" alt="add to cart" />
                    Add To Cart
                </button>
                <div
                    className={`absolute -bottom-6 w-1/2 sm:w-1/3 md:w-2/3 flex justify-between items-center rounded-3xl py-3 px-3
                    bg-Red text-Rose-50 font-medium
                    transition-opacity transition-transform  duration-200 ease-in-out
                    ${qty > 0 ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-90 pointer-events-none'}`}>

                    <button
                    className="group rounded-full border-[1px] border-Rose-50 w-6 h-6 flex items-center justify-center hover:bg-Rose-50 cursor-pointer"
                    onClick={() =>
                        dessertListDispatch({ type: "DECREMENT_QTY", name: dessertItem.name })
                    }
                    >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-3 h-3 fill-Rose-50 group-hover:fill-Red"
                        viewBox="0 0 10 2"
                    >
                        <path d="M0 .375h10v1.25H0V.375Z" />
                    </svg>
                    </button>

                    {qty}

                    
                    <button
                    className="group rounded-full border-[1px] border-Rose-50 w-6 h-6 flex items-center justify-center hover:bg-Rose-50 cursor-pointer"
                    onClick={() =>
                        dessertListDispatch({ type: "INCREMENT_QTY", name: dessertItem.name })
                    }
                    >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-3 h-3 fill-Rose-50 group-hover:fill-[hsl(14,86%,42%)]"
                        viewBox="0 0 10 10"
                    >
                        <path d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z" />
                    </svg>
                    </button>
                </div>
                                    
            </div>
            <div>
                <p className="text-Rose-400">{dessertItem.category}</p>
                <h3 className="text-lg font-semibold">{dessertItem.name}</h3>
                <h3 className="text-lg font-semibold text-Red">${dessertItem.price.toFixed(2)}</h3>
            </div>
        </div>
    )
}