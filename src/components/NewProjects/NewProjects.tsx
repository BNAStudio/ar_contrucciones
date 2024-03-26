
import { newProjectsInfo } from '../../utils/variants';
import './NewProjects.scss';
import Project from './Project';

type NewProjectsType = {
    id: string
}

export const NewProjects = ({ id }: NewProjectsType) => {
    return (
        <section id={id} className='c-np'>
            {
                newProjectsInfo.map((item, i) => {
                    return (
                        <Project key={i}
                            background={item.path}
                            date={item.releasesDate}
                            nick={item.locationNick}
                            vis={item.vis}
                            areaFrom={item.areaFrom}
                            areaTo={item.areaTo}
                        />
                    )
                })
            }

        </section>
    )
}


