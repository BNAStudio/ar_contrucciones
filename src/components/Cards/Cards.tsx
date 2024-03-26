import Card from './Card';
import './Cards.scss';
import { cardData } from '../../utils/variants';
import { idProps } from '../Banner/Banner';

const Cards = ({id}: idProps) => {
    return (
        <section id={id} className='c-cards'>
            {cardData.map((item, i) => (
                <Card 
                    card={`card-${i + 1}`} 
                    location={item.location} 
                    title={item.title} 
                    amountMin={item.amountMin} 
                    amountMax={item.amountMax} 
                    areaMin={item.areaMin} 
                    areaMax={item.areaMax} 
                    imgPath={item.imgPath}/>
            ))}
        </section>
    )
}

export default Cards