'use client';


export default function Navbar() {
    return (
        <div className="navbar sticky top-0 z-50 bg-white bg-opacity-80 px-8 py-3 backdrop-blur-md backdrop-filter">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                </div>
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
            </div>

            <div className="navbar-end mx-16 hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    
                    <li tabIndex={0}>
                        <details>
                            <summary>Menú</summary>
                            <ul className="p-2">
                                <li><a>Mis cultivos</a></li>
                                <li><a>Enfermedades</a></li>
                                <li><a>Configuración</a></li>
                                <li><a>Cerrar sesión</a></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
        </div>
    );
}
