import { TagProject } from "./TagProject";

type DescriptionType = {
    title: string;
    subtitle: string;
    textBold: string;
    textLight: string;
    type: boolean;
}

export const ProjectDescription = ({
    title,
    subtitle,
    textBold,
    textLight,
    type
}: DescriptionType) => {
    const classType = type ? 'np-text-content-right' : 'np-text-content-left';
    return (
        <div className={classType}>
            <h3 className="np-title">Fecha de lanzamiento <span className='np-title-span'>{title}</span></h3>
            <TagProject type={type} />
            <h4 className="np-subtitle">{subtitle}</h4>
            <p className='np-text-bold'>Hasta:
                <span className='np-text-light'>{textLight}</span>
            m2
            </p>{" "}
            <p className='np-text-bold'>Area desde: 
                <span className='np-text-light'>{textBold}m2</span>
            </p>
        </div>
    )
}