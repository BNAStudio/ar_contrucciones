import './Buttons.scss'

type BtnProps = { text: string; }

export const FillBtn = ({ text }: BtnProps) => {
    return (
        <button className='fill-btn fill-btn-hover'>{text}</button>
    )
}
export const BorderBtn = ({ text }: BtnProps) => {
    return (
        <button className='border-btn'>{text}</button>
    )
}
