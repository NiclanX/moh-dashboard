import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import supabase from '../services/Supabase';
import { Navigate, useNavigate } from 'react-router-dom';



function UsersPage() {

  const navigate = useNavigate()

  const columns = [
    { name: 'Name', selector: row => row.name, sortable: true },
    { name: 'Surname', selector: row => row.surname, sortable: true },
    { name: 'Gender', selector: row => row.gender,  },
    { name: 'Email', selector: row => row.email,  },
    {name: 'Actions', button: true,
        cell: row => (     
        <button className='delete' onClick={() => {alert('DELETE ' + row.name)}}>Delete</button>    
    ),

    }
  ];

 const [users, setUsers] = useState(null)
 const [search, setSearch] = useState('')
 const [loading, setLoadin] = useState(true)

  useEffect(() => {

    async function getAllUsers() {

      const {data, error } = await supabase.from('users')
      .select()

      if (error) {
        console.log(error.message);
        setUsers('')
        return
        
      }

      setUsers(data)
      setLoadin(false)



    }

    getAllUsers()



  }, [])

  if (loading) {
    return <div>loading...</div>
  }


  return (
   
    <div>
      <h1>Users Page</h1>
      <input type="search" name="" id="" placeholder='John Doe' onChange={(e)=> search(e.target.value)}/>
      <DataTable columns={columns} data={users} selectableRows title="Your Application's Users" highlightOnHover pointerOnHover pagination onRowClicked={
        (row)=> {
          console.log(row);
          
          navigate(row.id)}
      }/>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt enim cumque nulla et voluptatibus tempore animi, labore ea voluptas saepe quod ad ducimus blanditiis accusamus molestias voluptates, recusandae adipisci. Laborum ad voluptas impedit esse dolorum voluptates beatae dolor qui, est consectetur eveniet mollitia et natus minus quae ipsam cupiditate quos error incidunt officiis distinctio suscipit quasi, numquam quam. Nesciunt quae repellendus sapiente, facilis eos fugiat autem odio hic ab nisi maxime incidunt eaque mollitia alias ex. Doloribus debitis quasi atque laudantium voluptatibus inventore officia officiis illo. Earum quisquam ratione sint necessitatibus repellat dolores doloremque vel labore. Voluptates quam quasi perferendis possimus? Quis, odio! Dolorem molestiae necessitatibus eaque atque distinctio, rem reprehenderit omnis dolorum provident laboriosam voluptatem commodi enim soluta aliquam error sit, veniam, ipsam culpa ex dolore deserunt ea. Nihil aliquam aut, obcaecati voluptatum dolorum commodi. Quasi optio quaerat vitae, sed dolorem recusandae nostrum odio, aspernatur distinctio veniam dolor, molestiae explicabo modi. Neque laudantium aut voluptates recusandae dolor quae tempore veniam nam ratione a dolore fugit vitae consequuntur, dignissimos nihil fugiat ut minus ducimus sunt aperiam, consectetur saepe. Aliquid, iste? Nihil perspiciatis pariatur harum nostrum, culpa quidem ea ut quis rerum. Praesentium similique natus dignissimos consequatur est cumque quod eaque nihil labore illo odio accusantium tempore vero dicta porro quia, asperiores ipsam sed voluptas placeat repellendus molestiae officia? Laboriosam quos officiis nobis suscipit, mollitia perferendis quisquam saepe vitae qui deserunt atque nam aliquid excepturi esse est provident, illo sint officia consectetur. Explicabo commodi beatae sint. Illum quo mollitia accusantium sit dignissimos possimus soluta eius. Necessitatibus aperiam voluptatem ea delectus ullam at natus incidunt ratione, mollitia hic vero deserunt maxime error dolores reprehenderit quia corrupti animi adipisci, iure, tenetur earum doloribus. Nam enim vel porro corrupti saepe vitae numquam dignissimos. Vitae eius ut architecto, error itaque aspernatur quasi voluptate dolorem velit provident alias, dolorum libero quia sequi suscipit mollitia. Obcaecati similique quibusdam ex in corrupti repellendus, quod, expedita doloremque, sint eveniet nisi ipsum. Nisi, dolores! Aspernatur maxime ducimus dolore consequatur! Laudantium porro non impedit eius earum fugit, officiis repudiandae cumque aspernatur harum placeat explicabo laboriosam dolores odit ex corporis repellat atque autem, nihil iure ad veritatis voluptatum quae! Voluptates, voluptas asperiores placeat praesentium soluta, ea reprehenderit expedita officiis distinctio ducimus, tenetur adipisci illo veniam. Quaerat quam, maxime consectetur nam, a adipisci nulla asperiores nisi molestiae nesciunt reiciendis facere doloremque repellendus impedit culpa, sequi dolor distinctio. Autem modi tenetur corporis veniam voluptatem necessitatibus unde nesciunt beatae ipsa illum. Quo commodi sequi doloremque, laudantium error adipisci iste, quidem beatae eos tempora asperiores autem, possimus libero accusamus inventore! Aspernatur cum ex mollitia earum molestias blanditiis accusantium rerum odio voluptate nulla incidunt error minus possimus odit numquam nisi optio, fuga impedit quos autem repellendus, natus doloremque. Nemo laborum fuga officiis labore blanditiis ullam unde impedit sed, corporis reiciendis ab quia et quas voluptatibus temporibus quis adipisci ipsum repudiandae animi distinctio perspiciatis iure delectus ad? Molestiae laboriosam rem culpa dolor, error exercitationem corporis? Amet, asperiores itaque officiis cum delectus officia autem non repellendus quam, rem hic?</p>
    </div>
    
  )

}

export default UsersPage