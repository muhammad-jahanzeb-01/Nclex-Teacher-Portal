import TeacherHeader from "./Header/TeacherHeader";
import TeacherSidebar from "./Sidebar/TeacherSidebar";
import "./Layout.css"; // Common layout styling

const AdminLayout = ({ children }) => {
  return (
    <div className="layout">
      <TeacherHeader />
      <div className="layout-body">
        <TeacherSidebar />
        <main className="main-content">{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;
