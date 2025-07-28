import CoordinatorHeader from "./Header/CoordinatorHeader";
import CoordinatorSidebar from "./Sidebar/CoordinatorSidebar";
import "./Layout.css"; // Common layout styling

const AdminLayout = ({ children }) => {
  return (
    <div className="layout">
      <CoordinatorHeader />
      <div className="layout-body">
        <CoordinatorSidebar />
        <main className="main-content">{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;
