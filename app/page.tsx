import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function WelcomePage() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-1"></div>
      <div className="p-6 space-y-6">
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-gray-800">Welcome to PopX</h1>
          <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div className="space-y-3">
          <Link href="/signup" className="block w-full">
            <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">Create Account</Button>
          </Link>

          <Link href="/login" className="block w-full">
            <Button variant="secondary" className="w-full bg-purple-200 hover:bg-purple-300 text-gray-800">
              Already Registered? Login
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

