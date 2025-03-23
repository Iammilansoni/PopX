"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Camera } from "lucide-react"

export default function AccountSettingsPage() {
  const router = useRouter()
  const [user] = useState({
    name: "Marry Doe",
    email: "Marry@Gmail.Com",
    profilePicture: "/placeholder-user.jpg",
  })

  const handleLogout = () => {
    // In a real app, you would clear authentication state here
    router.push("/")
  }

  return (
    <div className="flex flex-col h-full">
      <div className="p-6 border-b">
        <h1 className="text-xl font-medium text-gray-800">Account Settings</h1>
      </div>

      <div className="p-6 border-b border-dashed">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200">
              <Image
                src="/placeholder.svg?height=64&width=64"
                alt="Profile"
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 right-0 bg-purple-600 rounded-full p-1">
              <Camera className="w-3 h-3 text-white" />
            </div>
          </div>

          <div>
            <h2 className="font-medium text-gray-800">{user.name}</h2>
            <p className="text-gray-600 text-sm">{user.email}</p>
          </div>
        </div>

        <div className="mt-6">
          <p className="text-gray-600 text-sm">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et
            Dolore Magna Aliquyam Erat, Sed Diam
          </p>
        </div>
      </div>

      <div className="flex-1 border-b border-dashed"></div>

      <div className="p-6">
        <button onClick={handleLogout} className="text-red-500 font-medium">
          Logout
        </button>
      </div>
    </div>
  )
}

