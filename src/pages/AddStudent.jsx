function AddStudent() {
  function handleSubmit(event) {
    event.preventDefault()
  }

  return (
    <div className="container py-4">
      <h1 className="mb-3">Add Student</h1>

      <div className="alert alert-info" role="alert">
        This form is a prototype. Submitting it does not save any data yet.
      </div>

      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-12 col-md-6">
          <label htmlFor="name" className="form-label">Full name</label>
          <input type="text" className="form-control" id="name" placeholder="e.g. Amina Hassan" />
        </div>

        <div className="col-12 col-md-6">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" placeholder="name@brightpath.edu" />
        </div>

        <div className="col-12 col-md-4">
          <label htmlFor="age" className="form-label">Age</label>
          <input type="number" className="form-control" id="age" min="16" max="99" />
        </div>

        <div className="col-12 col-md-8">
          <label htmlFor="course" className="form-label">Course</label>
          <select className="form-select" id="course" defaultValue="">
            <option value="" disabled>Choose a course...</option>
            <option>Software Development</option>
            <option>Networking</option>
            <option>Data Analytics</option>
            <option>Cybersecurity</option>
            <option>Business IT</option>
          </select>
        </div>

        <div className="col-12">
          <p className="form-label mb-1">Gender</p>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="gender" id="genderFemale" value="Female" />
            <label className="form-check-label" htmlFor="genderFemale">Female</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="gender" id="genderMale" value="Male" />
            <label className="form-check-label" htmlFor="genderMale">Male</label>
          </div>
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default AddStudent