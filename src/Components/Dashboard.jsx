import { useNavigate } from 'react-router-dom'
import supabase from '../services/Supabase'
import useGetThisUser from '../services/useGetThisUser'
import { use } from 'react'

function Dashboard() {

  const navigate = useNavigate()
  const { thisUser, loading } = useGetThisUser()


  async function signOut() {
    const { error } = await supabase.auth.signOut()

    if (error) {
      console.error(error)
      return
    }

    navigate('/login')
  }


  return (
    <>{ loading ? <div>Loading Dashboard . . .</div> :
      <div className="placeholde">
        <h1>Dashboard Page</h1>
        <button onClick={signOut}>
          Sign Out
        </button>
      </div>
      }
    </>
  )
}

export default Dashboard