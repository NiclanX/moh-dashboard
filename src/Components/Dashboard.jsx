import { useNavigate } from 'react-router-dom'
import supabase from '../services/Supabase'
import useGetThisUser from '../services/useGetThisUser'

function Dashboard() {

  const navigate = useNavigate()
  const { thisUser, loading } = useGetThisUser()

  if (loading) {
    return <h1>Loading...</h1>
  }

  async function signOut() {
    const { error } = await supabase.auth.signOut()

    if (error) {
      console.error(error)
      return
    }

    navigate('/login')
  }

  if (loading || !thisUser) {
  return <h1>Loading...</h1>
}

  return (
    <>
      <div className="placeholder">
        <h1>Hi {thisUser.name}, welcome back</h1>
        <h2>User ID</h2>
        <p>{thisUser.id}</p>

        <button onClick={signOut}>
          Sign Out
        </button>
      </div>
    </>
  )
}

export default Dashboard