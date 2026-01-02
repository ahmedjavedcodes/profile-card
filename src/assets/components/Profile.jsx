import React from 'react'

const Profile = ({ name, username, email, url }) => {
  return (
    /* 1. This wrapper represents ONE card in your horizontal scroll */
    <div className="snap-center flex flex-col gap-y-4 items-start w-[290px] flex-shrink-0">

      {/* 2. Main Image Container */}
      <div className="w-[300px] h-[400px] rounded-2xl shadow-md shadow-gray-400">
        <img
          src={url}
          alt="wedding"
          className="h-full w-full object-cover rounded-sm"
          /* Add a fallback if the URL fails */
          onError={(e) => { e.target.src = 'https://picsum.photos/300/400' }}
        />
      </div>
      
      <div className="w-full">
        <h1 className="font-bold text-4xl pb-1">{name}</h1>

        <div className="flex items-center justify-between py-2">
          <div className="flex items-center gap-2">
            <div className="w-[60px] h-[60px] rounded-full overflow-hidden shadow">
              <img
                src={url}
                alt="profile"
                className="w-full h-full object-center"
                onError={(e) => { e.target.src = 'https://picsum.photos/300/400' }}
              />
            </div>
            <div>
              <h2 className="text-lg font-semibold">{username}</h2>
              <p className="text-sm text-gray-500">{email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
