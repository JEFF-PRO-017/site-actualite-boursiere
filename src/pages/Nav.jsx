import React from 'react';

function Nav(params) {
    return (
        <React.StrictMode>
            {/* -- Navigation-- */}
            <header>
                <nav class="navbar  navbar-expand-lg navbar-light bg-success">
                    <div class="container justify-content-end px-2 px-lg-3">
                        <a class="navbar-brand text-white" href="#!">
                            Home
                        </a>
                        <button
                            class="navbar-toggler bg-white"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div
                            class="collapse navbar-collapse"
                            id="navbarSupportedContent"
                        >
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                                <li class="nav-item">
                                    <a
                                        class="nav-link active text-white"
                                        aria-current="page"
                                        href="#!"
                                    >
                                        Indicateurs Techniques
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-white" href="#!">
                                    Sentiment Social                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-white" href="#!">
                                        Nouvelles des entreprises
                                    </a>
                                </li>
                                <li class="nav-item dropdown">
                                    <a
                                        class="nav-link dropdown-toggle text-white"
                                        id="navbarDropdown"
                                        href="#"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Nouvelles du Marche
                                    </a>
                                    <ul
                                        class="dropdown-menu"
                                        aria-labelledby="navbarDropdown"
                                    >
                                        <li>
                                            <a class="dropdown-item" href="#!">
                                                General
                                            </a>
                                        </li>
                                        <li>
                                            {/* <hr class="dropdown-divider" /> */}
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="#!">
                                                Forex
                                            </a>
                                        </li>
                                        {/* <hr class="dropdown-divider" /> */}
                                        <li>
                                            <a class="dropdown-item" href="#!">
                                                Crypto
                                            </a>
                                        </li>
                                        {/* <hr class="dropdown-divider" /> */}
                                        <li>
                                            <a class="dropdown-item" href="#!">
                                                Merge
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <form class="d-flex"></form>
                            <h6>
                                <button
                                    type="button"
                                    class="btn btn-outline-dark"
                                >
                                    Espace Menbres
                                </button>
                            </h6>
                        </div>
                    </div>
                </nav>
            </header>
        </React.StrictMode>
    );
}
export default Nav;
