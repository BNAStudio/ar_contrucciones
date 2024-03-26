import './Cards.scss';
import { BorderBtn, FillBtn } from '../Buttons/Buttons';
import { VariantsType, variants } from '../../utils/variants';

const Card = ({location, title, amountMin, amountMax, areaMin, areaMax, imgPath}: VariantsType) => {
    return (
        <div className='card'>
            <img className='card-img' src={imgPath} alt="" />

            <div className='card-content'>
                <h2 className='card-location'>{location}</h2>
                <h3 className='card-title'>{title}</h3>

                <p className='card-subtitles'>Desde:</p>
                <h3 className='card-amount-min'>${amountMin}</h3>

                <p className='card-subtitles'>Hasta:</p>
                <h4 className='card-amount-max'>${amountMax}</h4>

                <p className='card-areas'>Área: de {areaMin} m2 a {areaMax} m2</p>

                <FillBtn text={variants.cardFillBtn} />
                <BorderBtn text={variants.CardBorderBtn} />
            </div>
        </div>
    )
}

export default Card