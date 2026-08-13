"use client";

import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");

        if (savedTheme === "dark") {
            document.body.classList.add("dark-mode");
            setIsDark(true);
        }
    }, []);

    function toggleTheme() {
        if (isDark) {
            document.body.classList.remove("dark-mode");
            localStorage.setItem("theme", "light");
            setIsDark(false);
        } else {
            document.body.classList.add("dark-mode");
            localStorage.setItem("theme", "dark");
            setIsDark(true);
        }
    }

    return (
        <button
            className="theme-switcher"
            onClick={toggleTheme}
            type="button"
        >
            {isDark ? "🌟 Light Mode" : "🌙 Dark Mode"}
        </button>
    );
}