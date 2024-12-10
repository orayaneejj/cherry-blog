function SignUpForm() {
  return (
    <div className="flex-grow py-10 px-4 md:px-8 lg:px-16 xl:px-20">
      <main className="max-w-5xl mx-auto">
        <div className="bg-[#EFEEEB] rounded-xl p-6 md:p-12">
          <h1 className="text-3xl font-semibold text-center mb-10">Sign up</h1>
          <form className="space-y-6 max-w-md mx-auto">
            <div>
              <label
                htmlFor="name"
                className="block text-sm text-gray-600 mb-2"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Full name"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 bg-white"
                required
              />
            </div>
            <div>
              <label
                htmlFor="username"
                className="block text-sm text-gray-600 mb-2"
              >
                Username
              </label>
              <input
                id="username"
                type="text"
                placeholder="Username"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 bg-white"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm text-gray-600 mb-2"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 bg-white"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm text-gray-600 mb-2"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 bg-white"
                required
              />
            </div>
            <div className="pt-4">
              <button
                type="submit"
                className="w-full md:w-auto md:min-w-[120px] md:mx-auto md:flex md:justify-center bg-gray-900 text-white rounded-full py-2.5 px-8 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2"
              >
                Sign up
              </button>
            </div>
          </form>
          <p className="mt-8 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <a href="/login" className="text-gray-900 hover:underline">
              Log in
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}
export default SignUpForm;
