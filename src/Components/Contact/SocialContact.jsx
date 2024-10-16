import { CiFacebook, CiInstagram} from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";

const SocialContact = () => {
  return (
    <div>
      <div className='border bg-white py-2 px-4 flex items-center '><CiFacebook  className="h-6 w-6"/>Facebook</div>
      <div className='border bg-white py-2 px-4 flex items-center '><FaXTwitter  className="h-4 w-4"/>Twitter</div>
      <div className='border bg-white py-2 px-4 flex items-center '><CiInstagram className="h-6 w-6"/>Instragram</div>
    </div>
  )
}

export default SocialContact
