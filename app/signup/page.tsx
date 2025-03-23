"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from "@/components/ui/button"

export default function SignupPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    emailAddress: "",
    password: "",
    companyName: "",
    isAgency: "yes",
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      isAgency: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      // Navigate to account settings after successful signup
      router.push("/account")
    }, 1000)
  }

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold mb-6">
        Create your
        <br />
        PopX account
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="fullName" className="text-purple-600">
            Full Name<span className="text-red-500">*</span>
          </Label>
          <Input
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
            className="w-full p-3 border rounded-md"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phoneNumber" className="text-purple-600">
            Phone number<span className="text-red-500">*</span>
          </Label>
          <Input
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Enter your phone number"
            required
            className="w-full p-3 border rounded-md"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="emailAddress" className="text-purple-600">
            Email address<span className="text-red-500">*</span>
          </Label>
          <Input
            id="emailAddress"
            name="emailAddress"
            type="email"
            value={formData.emailAddress}
            onChange={handleChange}
            placeholder="Enter your email address"
            required
            className="w-full p-3 border rounded-md"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="password" className="text-purple-600">
            Password<span className="text-red-500">*</span>
          </Label>
          <Input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Create a password"
            required
            className="w-full p-3 border rounded-md"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="companyName" className="text-purple-600">
            Company name
          </Label>
          <Input
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            placeholder="Enter your company name"
            className="w-full p-3 border rounded-md"
          />
        </div>

        <div className="space-y-2">
          <Label className="text-black">
            Are you an Agency?<span className="text-red-500">*</span>
          </Label>
          <RadioGroup value={formData.isAgency} onValueChange={handleRadioChange} className="flex gap-4">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="yes" className="text-purple-600" />
              <Label htmlFor="yes">Yes</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="no" />
              <Label htmlFor="no">No</Label>
            </div>
          </RadioGroup>
        </div>

        <Button
          type="submit"
          disabled={isLoading}
          className="w-full py-3 mt-6 bg-purple-600 hover:bg-purple-700 text-white rounded-md"
        >
          {isLoading ? "Creating Account..." : "Create Account"}
        </Button>
      </form>
    </div>
  )
}

