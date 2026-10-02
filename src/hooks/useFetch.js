import { useState, useEffect } from 'react'

function useFetch(url) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let ignore = false

    setLoading(true)
    setError(null)
    setData(null)

    async function loadData() {
      try {
        const response = await fetch(url)

        if (!response.ok) {
          throw new Error(
            response.status === 404
              ? 'Not found'
              : `Server error (${response.status})`
          )
        }

        const result = await response.json()

        if (!ignore) {
          setData(result)
        }
      } catch (err) {
        if (!ignore) {
          setError(err.message)
        }
      } finally {
        if (!ignore) {
          setLoading(false)
        }
      }
    }

    loadData()

    return () => {
      ignore = true
    }
  }, [url])

  return { data, loading, error }
}

export default useFetch