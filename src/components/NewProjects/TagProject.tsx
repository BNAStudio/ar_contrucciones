
type TagType = {
    type: boolean;
}

export const TagProject = ({ type }: TagType) => {
    const buildingType = type ? "VIS" : "NO VIS";

    return (
        <div className='c-tag'>
            <div>Tipo de vivienda {buildingType}</div>
        </div>
    )
}