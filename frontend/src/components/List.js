import React from 'react'
import Card from './Card'

function List({users, setCurUser}) {
  return (
    <div className='px-10 my-5 flex flex-wrap'>
        {users?.map((user) => <Card setCurUser={setCurUser} key={user._id} user={user} />)}
    </div>
  )
}

export default List