import { FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className='hero'>
      <div className='text-center hero-content'>
        <div className='max-w-lg'>
          <h1 className='text-8xl font-bold mb-8'>Oops!</h1>
          <p className='text-5xl mb-8'>404 - Page Introuvable!</p>
          <Link className='btn btn-primary btn-lg' to='/'>
            <FaHome className='mr-2' />
            Aller à l'acceuil
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound
