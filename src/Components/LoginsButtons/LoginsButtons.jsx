import { FaGoogle,FaGithub } from "react-icons/fa";

const LoginsButtons = () => {
  return (
    <div className='mt-10 space-y-3'>
      <button className="flex items-center gap-1 outline outline-blue-500 text-blue-500 py-1 px-6 rounded-sm"><FaGithub /> Login with Github</button>
      <button className="flex items-center gap-1 outline py-1 px-6 rounded-sm"><FaGoogle /> Login with Google</button>

    </div>
  )
}

export default LoginsButtons
