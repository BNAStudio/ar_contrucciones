
import './Banner.scss';
import img1 from '../../assets/banner/img1.png';
import img2 from '../../assets/banner/img2.jpg';
import img3 from '../../assets/banner/img3.jpg';
import img4 from '../../assets/banner/img4.jpg';
import img5 from '../../assets/banner/img5.jpg';
import ImageContainer from '../ImageContainer/ImageContainer';
import MainTitle from '../MainTitle/MainTitle';
import { variants } from "../../utils/variants.ts";

const imgArr = [img1, img2, img3, img4, img5];

export type idProps = {
    id: string
}

const Banner = ({id}: idProps) => {
    return (
        <>
            <section id={id} className='c-banner'>
                {imgArr.map((item, i) => <ImageContainer key={`image-${i}`} image={item} index={i} />)}
            </section>
            <MainTitle title={variants.bannerTitle} subTitle={variants.bannerSubtitle} />
        </>
    )
}

export default Banner