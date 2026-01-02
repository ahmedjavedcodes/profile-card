import React, { useEffect, useState } from 'react'
import Profile from './assets/components/Profile'

const App = () => {
  const [users, setUsers] = useState([])
  const [photos, setPhotos] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  async function fetchUsers() {
    try {
      let res = await fetch("https://jsonplaceholder.typicode.com/users");
      let users = await res.json();
      // console.log(users);
      setUsers(users);
    }
    catch (err) {
      setError("Failed to load users")
    }

  }
  async function fetchPhotos() {
    try {
      let res = await fetch("https://jsonplaceholder.typicode.com/photos?_limit=10");
      let photos = await res.json();
      // console.log(photos);
      setPhotos(photos);
    }
    catch (err) {
      setError("Failed to load photos")
    }

  }

  useEffect(() => {
    Promise.all([fetchUsers(), fetchPhotos()]).finally(() => {
      setLoading(false)
    });
  }, [])


  // let urls=[]
  // urls = photos.map(
  //   photo => (
  //     photo.url
  //   )
  // )

  return (
    <>
      {/* text */}
      <div className="flex justify-center items-center p-4 pb-10 md:pb-8 mb-4">
        <h1 className="text-3xl sm:text-5xl font-semibold">
          Our Workers Profiles
        </h1>
      </div>

      {loading &&
        (
          <h2>Loading....</h2>
        )
      }
      {
        error &&
        (
          <h2 style={{ color: "red" }}>{error}</h2>
        )
      }
      {/* Add the grid/flex wrapper here */}
      <div className="grid grid-flow-col gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide px-2 xl:gap-20">
        {users.map((user, index) => (
          <Profile
            key={user.id || index}
            name={user.name}
            username={user.username}
            email={user.email}
            url={photos[index]?.url}
          />
        ))}
      </div>

      {/* <!-- buttons --> */}
      <div className="flex justify-center pt-0 gap-4 md:gap-6 md:pt-5">
        <button id="prev-arrow" className="bg-[#e9f5b4] px-2 py-2 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
            className="lucide lucide-arrow-left-icon lucide-arrow-left">
            <path d="m12 19-7-7 7-7" />
            <path d="M19 12H5" />
          </svg>
        </button>
        <button id="next-arrow" className="bg-[#e9f5b4] px-2 py-2 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
            className="lucide lucide-arrow-right-icon lucide-arrow-right">
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </button>
      </div>


    </>
  )
}

export default App
