import desserts from "../Data/data.json"
export default function OrderItem({element}){

    let d= desserts.find(d=> d.name===element.name);
    const imgSrc= d.image.thumbnail;
    return (
       
        <div>
            <div className="flex justify-between items-center mb-3 pb-3 border-b-[1px] border-Rose-100">
                <div className="flex gap-5">
                    <img className="w-12 rounded-md" src={imgSrc} alt="dessert image" />
                    <div className="flex flex-col justify-between">
                        <p className="font-semibold text-sm text-Rose-900">{element.name}</p>
                        <div className="flex gap-5 text-sm items-center">
                            <p className="text-Red text-base font-semibold">{element.quantity}x</p>
                            <p className="text-Rose-500 font-medium">@ ${element.price}</p>
                        </div>
                    </div>
                </div>
                <p className="font-semibold">${(element.price* element.quantity).toFixed(2)}</p>
            </div>
        </div>
       
    )
}