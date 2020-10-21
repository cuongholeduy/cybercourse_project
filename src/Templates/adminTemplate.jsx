import React from "react";
import AdminSidebar from "../Components/AdminSidebar/adminSidebar";

const AdminTemplate = (Component) => {
  return (props) => {
    return (
      <div>
        <AdminSidebar />
        <div className="container-fluid">
          <Component {...props} />
        </div>
      </div>
    );
  };
};

export default AdminTemplate;
