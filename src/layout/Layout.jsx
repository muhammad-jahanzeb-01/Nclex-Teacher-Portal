import Header from "./Header/Header"
import Sidebar from "./Sidebar/Sidebar"
// import Footer from "./Footer/Footer"
import "./Layout.css"

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <div className="layout-body">
        <Sidebar />
        <main className="main-content">{children}</main>
      </div>
      {/* <Footer /> */}
    </div>
  )
}

export default Layout
