import { useNavigate } from 'react-router-dom'
import supabase from '../services/Supabase'
import useGetThisUser from '../services/useGetThisUser'
import { use } from 'react'
import MohButton from '../Components/MohButton'
import UserChart from '../Components/UserChart'
import './dash.css'
import GenderCard from '../Components/cards/GenderCard'


function Dashboard() {

  

  const navigate = useNavigate()
  const { thisUser, loading } = useGetThisUser()





  return (
    <>{loading ? <div>Loading Dashboard . . .</div> :
      <>
      <div className="placeholde">
        <h1>Dashboard</h1>
      </div>
      <div className="salute">Welcome back <strong>{thisUser?.name} </strong></div>

        <div className="dashContent">

          <div className="mainDash">
            {/* This is the main dashboard */}
            <div className="dItem" style={{'gridArea': 'a'}}></div>
            <div className="dItem" style={{'gridArea': 'b'}}></div>
            <div className="dItem" style={{'gridArea': 'c'}}></div>
            <div className="dItem" style={{'gridArea': 'd'}}></div>
            <div className="dItem" style={{'gridArea': 'e'}}></div>         
            </div>

          <div className="sideDash">
            Advertising
          </div>
        </div>
      </>
    }
    </>
  )
}

export default Dashboard