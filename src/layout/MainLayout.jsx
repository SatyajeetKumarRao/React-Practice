import { Suspense } from 'react'
import { Outlet } from 'react-router'
import Sidebar from './Sidebar'
import './MainLayout.css'
import Loader from '../components/common/Loader'

const MainLayout = () => {
  return (
    <div className='main-layout'>
      <Sidebar />
      <main className='main-layout__content'>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  )
}

export default MainLayout