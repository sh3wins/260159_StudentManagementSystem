import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="container py-5 text-center">
      <h1 className="display-5 fw-bold">Welcome to BrightPath College</h1>
      <p className="lead text-muted">
        A simple system for staff to browse student records and view each
        student's full profile.
      </p>
      <Link to="/students" className="btn btn-primary btn-lg">
        View Students
      </Link>
    </div>
  )
}

export default Home