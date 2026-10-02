import { useParams, Link } from 'react-router-dom'
import useFetch from '../hooks/useFetch.js'
import { API_URL } from '../config.js'
import Loader from '../components/Loader.jsx'
import ErrorAlert from '../components/ErrorAlert.jsx'

function StudentDetails() {
  const { id } = useParams()
  const { data: student, loading, error } = useFetch(`${API_URL}/students/${id}`)

  return (
    <div className="container py-4">
      <Link to="/students" className="btn btn-outline-secondary mb-4">
        &larr; Back to Students
      </Link>

      {loading && <Loader />}

      {error === 'Not found' && (
        <ErrorAlert message={`No student was found with ID ${id}.`} />
      )}

      {error && error !== 'Not found' && (
        <ErrorAlert message="Could not load this student. Please check that the API server is running and try again." />
      )}

      {student && (
        <div className="card shadow-sm">
          <div className="card-body">
            <h1 className="card-title h3">{student.name}</h1>
            <ul className="list-group list-group-flush mt-3">
              <li className="list-group-item">
                <strong>Student ID:</strong> {student.id}
              </li>
              <li className="list-group-item">
                <strong>Email:</strong> {student.email}
              </li>
              <li className="list-group-item">
                <strong>Course:</strong> {student.course}
              </li>
              <li className="list-group-item">
                <strong>Age:</strong> {student.age}
              </li>
                            <li className="list-group-item">
                <strong>Gender:</strong> {student.gender}
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}

export default StudentDetails