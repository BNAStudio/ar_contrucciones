import './MainTitle.scss'

type MainTitleProps = {
    title: string;
    subTitle: string;
}

const MainTitle = ({ title, subTitle }: MainTitleProps) => {
    return (
        <section className='c-banner-content'>
            <h1 className='banner-title'>{title}</h1>
            <p className='banner-subtitle'>{subTitle}</p>
        </section>
    )
}

export default MainTitle