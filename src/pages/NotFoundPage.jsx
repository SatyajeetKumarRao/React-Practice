import { Link } from 'react-router'

const NotFoundPage = () => {
  return (
    <div>
      <h1>404 - Page not found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to='/'>Go back home</Link>
    </div>
  )
}

export default NotFoundPage