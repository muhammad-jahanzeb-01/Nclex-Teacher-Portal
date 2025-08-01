import AdminHeader from "./Header/AdminHeader";
import AdminSidebar from "./Sidebar/AdminSidebar";
import "./Layout.css"; // Common layout styling

const AdminLayout = ({ children }) => {
  return (
    <div className="layout">
      <AdminHeader />
      <div className="layout-body">
        <AdminSidebar />
        <main className="main-content">{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;
