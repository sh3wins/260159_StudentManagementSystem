# Student Management System

**Name:** AURELIA MWANGI
**Student ID:** 260159

A React single-page application for BrightPath College that lists students and shows a full profile for each one. Data comes from a JSON Server mock API.

## How to run

1. Install the dependencies:

```bash
npm install
```

2. Start JSON Server (runs on port 3001):

```bash
npx json-server --watch db.json --port 3001
```

3. In a second terminal, start the React app (runs on port 5173):

```bash
npm run dev
```

4. Open http://localhost:5173 in a browser.

## Features completed

- Bootstrap navbar on every page, with the current page highlighted and a collapsing menu on small screens
- Home page with a call-to-action button
- Students page that fetches all students and shows them as cards
- Student Details page using the dynamic route `/students/:id` and `useParams()`
- Loading and error states on both data pages, including a "student not found" message
- Add Student prototype form (does not save data)
- About page
- Custom `useFetch` hook used by the Students and Student Details pages
- Reusable components: Navbar, StudentCard, Loader, ErrorAlert
- API address defined once in `src/config.js`

## Known bugs

None known.

## Bonus tasks

Not attempted.

## Design decisions

My useFetch hook accepts a URL and returns data, loading and error, and it fetches again whenever the URL changes. Each student card links to that student's ID in the address, and the Student Details page reads the ID with useParams() and passes it to useFetch to load that one student. If the API is switched off the user sees a red alert saying the students could not be loaded, and if the ID does not exist the API responds with a 404 and the page shows a "no student was found" message. To avoid showing old data, the hook sets loading to true and clears the old data at the start of every fetch, and an ignore flag in the clean-up function stops a late response from being shown. The repeated parts of the interface became reusable components: Navbar, StudentCard, Loader and ErrorAlert.

## Screenshots

Screenshots of every page, the loading and error states, and the Students page at mobile width are in the `screenshots` folder.