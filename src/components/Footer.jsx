function Footer() {
    return (
        <footer className="border-t border-white/10 py-8 text-center text-gray-500">
            <p>
                © {new Date().getFullYear()} Jonas Romano · Portfolio Developer
            </p>

            <p className="mt-2 text-sm">
                Desarrollado con React, Vite y Tailwind CSS
            </p>
        </footer>
    );
}

export default Footer;