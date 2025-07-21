import desserts from '../Data/data.json';
import DessertCard from './DessertCard';
export default function DessertList (){

    return(
        <section className='w-full grid grid-cols-1 items-center gap-4 md:grid md:grid-cols-2 lg:grid-cols-3'>
            {   
                desserts.map((dessert, index)=>{
                   return <DessertCard dessertItem={dessert} key={index} />
                })
            }
        </section>
    )
}