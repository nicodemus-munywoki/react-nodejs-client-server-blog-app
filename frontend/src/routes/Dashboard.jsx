import KpiCard from '../dashboard/components/KpiCard'
import {BookOpenText} from 'lucide-react'
const Dashboard = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
      <KpiCard
        tittle= "Published"
        value='234'
        icon= {BookOpenText}
        change='3.4'
        changeType='up'
      />
    </div>
  )
};

export default Dashboard

