import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminProtected = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {   
      const user = JSON.parse(localStorage.getItem("user"))
      if (!user) {
        navigate("/");
      } else if (!user.isAdmin) {
        navigate("/");
      }  
  }, []);

  return children;
};

export default AdminProtected;
