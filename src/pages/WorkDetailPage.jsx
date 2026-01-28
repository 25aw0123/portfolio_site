import { worksData } from '../worksData';
import WorkIntro from '../components/WorkIntro/WorkIntro'
import BackToHome from '../components/BackToHome/BackToHome'
import { useParams } from 'react-router-dom'

const WorkDetailPage = () => {
  const { id } = useParams();
  const currentWork = worksData.find((work) => work.id === Number(id));

  return (
    <>
    <WorkIntro worksData={currentWork} />
    <BackToHome />
    </>
  )
}

export default WorkDetailPage