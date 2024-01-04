import React from 'react'
import { Link } from 'react-router-dom'
import "./Messages.scss"

const Messages = () => {

  const currentUser = {
    id: 1,
    username: 'John wick',
    isSeller: true,
  }

  const message = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, fugit quas facere dolore eos excepturi?'
  return (
    <div className='messages'>
      <div className="container">
        <div className="title">
          <h1>Messages</h1>
        </div>
        <table>
          <tr>
            <th>Buyer</th>
            <th>Last message</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
          <tr className='active'>
            <td>John doe</td>
            <td><Link to='/message/123' className='link'>{message.substring(0, 100)}...</Link></td>
            <td>1 day ago</td>
            <td>
              <button>Mark as read</button>
            </td>
          </tr>
          <tr className='active'>
            <td>John doe</td>
            <td><Link to='/message/123' className='link'>{message.substring(0, 100)}...</Link></td>
            <td>1 day ago</td>
            <td>
              <button>Mark as read</button>
            </td>
          </tr>
          <tr>
            <td>John doe</td>
            <td><Link to='/message/123' className='link'>{message.substring(0, 100)}...</Link></td>
            <td>1 day ago</td>
          </tr>
          <tr>
            <td>John doe</td>
            <td><Link to='/message/123' className='link'>{message.substring(0, 100)}...</Link></td>
            <td>1 day ago</td>
          </tr>
          <tr>
            <td>John doe</td>
            <td><Link to='/message/123' className='link'>{message.substring(0, 100)}...</Link></td>
            <td>1 day ago</td>
          </tr>
          <tr>
            <td>John doe</td>
            <td><Link to='/message/123' className='link'>{message.substring(0, 100)}...</Link></td>
            <td>1 day ago</td>
          </tr>
        </table>

      </div>
    </div>
  )
}

export default Messages