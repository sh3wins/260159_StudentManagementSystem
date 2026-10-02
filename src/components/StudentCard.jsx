import { Link } from 'react-router-dom'

function StudentCard({ student }) {
  return (
    <div className="card h-100 shadow-sm">
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{student.name}</h5>
        <p className="card-text text-muted mb-1">{student.email}</p>
        <p className="card-text mb-1">
          <strong>Course:</strong> {student.course}
        </p>
        <p className="card-text">
          <strong>Age:</strong> {student.age}
        </p>
        <Link
          to={`/students/${student.id}`}
          className="btn btn-outline-primary mt-auto"
        >
          View Details
        </Link>
      </div>
    </div>
  )
}

export default StudentCard