import { useNavigate } from 'react-router-dom'
import supabase from '../services/Supabase'
import useGetThisUser from '../services/useGetThisUser'
import { use } from 'react'
import MohButton from './MohButton'
import UserChart from './UserChart'


function Dashboard() {

  const getUserCounts = async () => {

    const { data, error } = await supabase.rpc("get_user_counts");

    if (error) {
        console.error(error);
        return;
    }

    console.log(data);
};

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

  getUserCounts();


  return (
    <>{ loading ? <div>Loading Dashboard . . .</div> :
      <div className="placeholde">
        <h1>Dashboard Page</h1>
        {/* <MohButton text={'Moh Button'} />
        <MohButton text={'Do something Dangerous '}  danger /> */}
        <button onClick={signOut}>
          Sign Out
        </button>
      </div>
      }
    </>
  )
}

export default Dashboard