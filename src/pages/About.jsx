function About() {
  return (
    <div className="container py-4">
      <h1 className="mb-3">About</h1>

      <p className="lead">
        The BrightPath College Student Management System lets staff browse all
        student records and open a full profile for any student.
      </p>

      <h2 className="h4 mt-4">Purpose</h2>
      <p>
        Student records were kept in paper files and scattered spreadsheets,
        which made it slow to find a student. This application puts them in one
        place that is quick to search through and easy to read.
      </p>

      <h2 className="h4 mt-4">Technologies used</h2>
      <ul>
        <li>React (functional components and JSX)</li>
        <li>React Router for page navigation</li>
        <li>Bootstrap for layout and styling</li>
        <li>JSON Server as a mock REST API</li>
        <li>The fetch() API for loading data</li>
      </ul>

      <h2 className="h4 mt-4">Developer</h2>
      <p className="mb-1">
        <strong>Name:</strong> YOUR FULL NAME
      </p>
      <p>
        <strong>Student ID:</strong> 260159
      </p>
    </div>
  )
}

export default About