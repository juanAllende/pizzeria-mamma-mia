import React from 'react';

const Navbar = () => {
    const total = 25000;
    const token = false;

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">🍕 Mamma Mía</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Home</a>
                    </li>
                    {token ? (
                        <>
                            <li className="nav-item">
                                <a className="nav-link" href="#">🔓 Profile</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">🔒 Logout</a>
                            </li>
                        </>
                    ) : (
                        <>
                            <li className="nav-item">
                                <a className="nav-link" href="#">🔐 Login</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">🔐 Register</a>
                            </li>
                        </>
                    )}
                    <li className="nav-item">
                        <a className="nav-link" href="#">🛒 Total: {total.toLocaleString('es-ES', { style: 'currency', currency: 'CLP' })}</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
