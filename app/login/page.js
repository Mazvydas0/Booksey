export default function LogIn({ classes = "" }) {
  return (
    <div className="flex items-center justify-center">
      <div
        className={`mt-40 bg-gray-50 p-8 rounded shadow-md w-full max-w-md ${classes}`}
      >
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Username
            </label>
            <input className="shadow  border rounded w-full py-2 px-1 text-gray-700" />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              className="shadow  border rounded w-full py-2 px-1 text-gray-700"
            />
          </div>
          <div className="flex items-center justify-between mt-6">
            <button
              type="button"
              className="bg-orange-300 hover:bg-orange-500 font-bold py-2 px-4 rounded"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
