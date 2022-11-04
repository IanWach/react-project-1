import React from 'react'

function Comment(props) {
  
    return (
    <div className='comment'>
        <div className='user-info'>
        <img className='avatar'
            src ={props.author.avatarUrl}
            alt={props.author.name}
            />
            <div className='UserInfo-Name'>
                {props.author.name}
            </div>
        </div>
        <div className='comment-text'>
            {props.text}
        </div>
        <div className='comment-date'>
            {FormData(props.date)}
        </div>
    </div>
  );
}

export default Comment