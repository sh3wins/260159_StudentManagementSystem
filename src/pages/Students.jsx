import useFetch from '../hooks/useFetch.js'
import { API_URL } from '../config.js'
import StudentCard from '../components/StudentCard.jsx'
import Loader from '../components/Loader.jsx'
import ErrorAlert from '../components/ErrorAlert.jsx'

function Students() {
  const { data: students, loading, error } = useFetch(`${API_URL}/students`)

  return (
    <div className="container py-4">
      <h1 className="mb-4">Students</h1>

      {loading && <Loader />}

      {error && (
        <ErrorAlert message="Could not load students. Please check that the API server is running and try again." />
      )}

      {students && (
        <div className="row g-4">
          {students.map((student) => (
            <div className="col-12 col-md-6 col-lg-4" key={student.id}>
              <StudentCard student={student} />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Students