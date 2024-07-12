import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
function Counter() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        setCount(0);
    }, []);
    return (_jsxs("div", { children: [_jsxs("div", { children: [_jsx("a", { href: 'https://vitejs.dev', target: '_blank', children: _jsx("img", { src: viteLogo, className: 'logo', alt: 'Vite logo' }) }), _jsx("a", { href: 'https://react.dev', target: '_blank', children: _jsx("img", { src: reactLogo, className: 'logo react', alt: 'React logo' }) })] }), _jsx("h1", { children: "Vite + React" }), _jsxs("div", { className: 'card', children: [_jsx("button", { onClick: () => setCount((count) => count + 1), children: `count is ${count}` }), _jsxs("div", { children: ["Edit ", _jsx("code", { children: "src/App.tsx" }), " and save to test HMR"] })] }), _jsx("div", { className: 'read-the-docs', children: "Click on the Vite and React logos to learn more" })] }));
}
export default Counter;
