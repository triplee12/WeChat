import GenderCheckbox from "./GenderCheckbox"
function Signup() {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-rd bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">SignUp
          <span className="text-green-500"> wChat</span>
        </h1>
        <form className="flex flex-col items-center justify-center mt-4">
          <div>
              <label className="label p-2">
                  <span className="text-base label-text">Full Name</span>
              </label>
              <input type="text" className="w-full input input-bordered h-10 px-3 py-2 mt-2" placeholder="Enter Full Name" />
          </div>
          <div>
              <label className="label p-2">
                  <span className="text-base label-text">Username</span>
              </label>
              <input type="text" className="w-full input input-bordered h-10 px-3 py-2 mt-2" placeholder="Enter Username" />
          </div>
          <div>
              <label className="label">
                  <span className="text-base label-text">Password</span>
              </label>
              <input type="password" className="w-full input input-bordered h-10 px-3 py-2 mt-2" placeholder="Enter Password" />
          </div>
          <div>
              <label className="label">
                  <span className="text-base label-text">Confirm Password</span>
              </label>
              <input type="password" className="w-full input input-bordered h-10 px-3 py-2 mt-2" placeholder="Confirm Password" />
          </div>
          <GenderCheckbox />
          <a href="#" className="text-w hover:underline hover:text-blue-600 mt-2 inline-block">Already have an account?</a>
          <div>
            <button className="btn btn-block btn-sm mt-2">signup</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup