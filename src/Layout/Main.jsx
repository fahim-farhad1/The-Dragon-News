import { Outlet } from "react-router-dom"
import Header from "../Shared/Header/header"
import Footer from "../Shared/Footer/Footer"


const Main = () => {
  return (
    <div>
      <Header />
      <div className="min-h-[calc(100vh-285px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Main
