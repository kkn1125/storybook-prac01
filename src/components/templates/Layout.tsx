import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

function Layout() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) return <></>;

  return (
    <div>
      <Outlet />
    </div>
  );
}

export default Layout;
