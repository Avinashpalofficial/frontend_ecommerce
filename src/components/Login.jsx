function Login() {
  return (
    <div>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-2xl font-bold">Admin Panel</h1>
            <form action="" className="flex flex-col gap-4 bg-white p-6 rounded shadow-md w-80">
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input type="text" placeholder="Email" className="border p-2 rounded w-full" />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Password</label>
                    <input type="password" placeholder="Password" className="border p-2 rounded w-full" />
                </div>
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login;

