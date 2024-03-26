import { useEffect, useRef, useState } from 'react';
import { ProjectDescription } from './ProjectDescription';

type ProjectType = {
    background: string;
    date: string;
    nick: string;
    vis: boolean;
    areaFrom: string;
    areaTo: string
}

const INITIAL_SCALE = 115;
const FINAL_SCALE = 100;
const THRESHOLD = 0.3;

const Project = ({
    background,
    date,
    nick,
    vis, 
    areaFrom,
    areaTo }: ProjectType) => {
    const [scale, setScale] = useState(INITIAL_SCALE);
    const ref = useRef<HTMLDivElement>(null);
    const imgStyle = { transform: `scale(${scale}%)` }

    useEffect(() => {
        const currentRef = ref.current;
        const observer = new IntersectionObserver(
            ([entry]) => entry.isIntersecting ? setScale(FINAL_SCALE) : setScale(INITIAL_SCALE),
            { threshold: THRESHOLD, }
        );

        if (currentRef) observer.observe(currentRef);

        return () => {
            if (currentRef) observer.unobserve(currentRef);
        }
    }, [])

    return (
        <div className="np-content" ref={ref}>
            <img
                className='np-image'
                style={imgStyle}
                src={background}
                alt="imagen proyecto nuevo" />
            <ProjectDescription
                title={date}
                subtitle={nick}
                type={vis} 
                textBold={areaFrom}
                textLight={areaTo}
            />
        </div>
    )
}

export default Project;