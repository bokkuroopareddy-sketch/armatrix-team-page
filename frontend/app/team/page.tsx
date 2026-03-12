"use client"

import { useEffect, useState } from "react"
import { FaLinkedin } from "react-icons/fa"
import { motion } from "framer-motion"

export default function TeamPage() {

  const [team, setTeam] = useState<any[]>([])

  const [name, setName] = useState("")
  const [role, setRole] = useState("")
  const [bio, setBio] = useState("")
  const [photo, setPhoto] = useState("")
  const [linkedin, setLinkedin] = useState("")

  useEffect(() => {
    fetch("http://127.0.0.1:8000/team")
      .then(res => res.json())
      .then(data => setTeam(data))
  }, [])

  const addMember = async () => {

    await fetch("http://127.0.0.1:8000/team",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        name:name,
        role:role,
        bio:bio,
        photo_url:photo,
        linkedin:linkedin
      })
    })

    location.reload()
  }

  const deleteMember = async (id:number) => {

    await fetch(`http://127.0.0.1:8000/team/${id}`,{
      method:"DELETE"
    })

    location.reload()
  }

  return (

<motion.div
initial={{ opacity:0 }}
animate={{ opacity:1 }}
transition={{ duration:0.6 }}
className="min-h-screen bg-black text-white p-10"
>

{/* HERO SECTION */}

<div className="text-center mb-20">

<h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
Meet Our Team
</h1>

<p className="text-gray-400 max-w-xl mx-auto text-lg">
Engineers, designers and innovators building the future of robotics and automation.
</p>

</div>


{/* ADD MEMBER FORM */}

<div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl mb-20">

<h2 className="text-2xl font-semibold mb-6 text-center">
Add Team Member
</h2>

<div className="grid md:grid-cols-2 gap-4">

<input
placeholder="Name"
className="bg-black/40 border border-white/10 p-3 rounded-lg"
onChange={(e)=>setName(e.target.value)}
/>

<input
placeholder="Role"
className="bg-black/40 border border-white/10 p-3 rounded-lg"
onChange={(e)=>setRole(e.target.value)}
/>

<input
placeholder="Photo URL"
className="bg-black/40 border border-white/10 p-3 rounded-lg"
onChange={(e)=>setPhoto(e.target.value)}
/>

<input
placeholder="LinkedIn URL"
className="bg-black/40 border border-white/10 p-3 rounded-lg"
onChange={(e)=>setLinkedin(e.target.value)}
/>

<textarea
placeholder="Bio"
className="bg-black/40 border border-white/10 p-3 rounded-lg md:col-span-2"
onChange={(e)=>setBio(e.target.value)}
/>

<motion.button
whileHover={{ scale:1.05 }}
whileTap={{ scale:0.95 }}
onClick={addMember}
className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-3 rounded-lg md:col-span-2"
>
Add Member
</motion.button>

</div>

</div>


{/* TEAM GRID */}

<motion.div
initial="hidden"
animate="visible"
variants={{
hidden:{},
visible:{
transition:{staggerChildren:0.15}
}
}}
className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10"
>

{team.map((member:any)=>(

<motion.div
key={member.id}
variants={{
hidden:{opacity:0,y:40},
visible:{opacity:1,y:0}
}}
whileHover={{scale:1.05,y:-10}}
whileTap={{scale:0.97}}
transition={{duration:0.4}}
className="relative bg-white/5 backdrop-blur-xl border border-white/10 
rounded-2xl p-6 text-center overflow-hidden group 
hover:border-blue-400/60 transition"
>

{/* Glow Hover Effect */}

<div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>


{/* Profile Image */}

<img
src={member.photo_url}
className="relative w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-blue-400/30"
/>


{/* Name */}

<h2 className="relative text-xl font-semibold">
{member.name}
</h2>


{/* Role */}

<p className="relative text-blue-400 font-medium">
{member.role}
</p>


{/* Bio */}

<p className="relative text-gray-400 text-sm mt-2">
{member.bio}
</p>


{/* LinkedIn */}

<a
href={member.linkedin}
target="_blank"
className="relative flex justify-center mt-4 text-blue-400 hover:text-blue-300"
>
<FaLinkedin size={22}/>
</a>


{/* Delete */}

<button
onClick={()=>deleteMember(member.id)}
className="relative mt-4 text-sm text-red-400 hover:text-red-300"
>
Delete
</button>

</motion.div>

))}

</motion.div>

</motion.div>

  )
}
