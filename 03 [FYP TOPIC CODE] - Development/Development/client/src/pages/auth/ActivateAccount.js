// AccountActivate.js
import { useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth";

export default function AccountActivate() {
  const [auth, setAuth] = useAuth();
  // hooks
  const { token } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (token) requestActivation();
  }, [token]);

  const requestActivation = async () => {
    const { data } = await axios.post(`/register`, {
      token,
    });
    if (data.error) {
      toast.error(data.error);
    } else {

      setAuth(data);

      //saving in local storage
      localStorage.setItem("auth", JSON.stringify(data));


      toast.success("MyRoom Registeration successful.");
      navigate("/");
    }
  };

  return (
    <div
      className="display-1 d-flex justify-content-center align-items-center vh-100"
      style={{ marginTop: "-5%" }}
    >
      Please wait...
    </div>
  );
}