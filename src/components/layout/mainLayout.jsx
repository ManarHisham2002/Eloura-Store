import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Loader from "../common/loader";
import Header from "./header";
import ElouraModal from "../common/modal";
import Footer from "./footer";

const MainLayout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="d-flex flex-column min-vh-100">
          <Header />
          <main style={{ flex: 1 }}>
            <ElouraModal />
            <Outlet />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
};

export default MainLayout;
