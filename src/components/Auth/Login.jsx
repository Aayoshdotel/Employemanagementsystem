import React from "react";
import { useState } from "react";

function Login({handleLogin}) {


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function submitHandler(e){
        e.preventDefault()
        handleLogin(email,password)

    }
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-100">
      <div className="w-80 rounded-lg bg-white p-6 shadow-lg">
        <h2 className="mb-6 text-center text-2xl font-bold">
          Login
        </h2>

        <form 
            onSubmit={(e)=>{
                submitHandler(e)
            }}

            className="flex flex-col gap-4">
            <input

            value={email}

            onChange={(e)=>{
                setEmail(e.target.value)
            }}
            
            required

            type="email"

            placeholder="Enter your Email"

            className="rounded border border-gray-300 p-3 text-black outline-none focus:border-blue-500 placeholder-gray-400"

            />

            <input

            value={password}

            onChange={(e)=>{
                setPassword(e.target.value)
            }}

            required

            type="password"

            placeholder="Enter Password"

            className="rounded border border-gray-300 p-3 text-black outline-none focus:border-blue-500 placeholder-gray-400"

            />

          <button
            type="submit"
            className="rounded bg-blue-600 p-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}  

export default Login;