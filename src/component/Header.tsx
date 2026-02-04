import React, { useEffect } from "react";
import { RootState, useAppDispatch, useAppSelector } from "../app/store";
import { logout } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const { isLogout } = useAppSelector((state: RootState) => state.auth);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const logoutHandler = () => {
    dispatch(logout());
  };

  useEffect(() => {
    if (isLogout) {
      navigate("/login");
    }
  }, [isLogout]);
  return (
    <div className="bg-emerald-600 py-2">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <h3 className="text-white font-semibold uppercase text-xl">Dashboard</h3>
          <button onClick={() => logoutHandler()} className="bg-white px-5 py-2 rounded-lg text-emerald-600 text-center font-medium cursor-pointer">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
