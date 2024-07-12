import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
function Layout() {
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        setLoaded(true);
    }, []);
    if (!loaded)
        return _jsx(_Fragment, {});
    return (_jsx("div", { children: _jsx(Outlet, {}) }));
}
export default Layout;
