import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <nav className="navbar default-layout col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
                <div className="text-center navbar-brand-wrapper d-flex align-items-top justify-content-center">
                    <a className="navbar-brand brand-logo" href="index.html">
                        <img src="images/logo.svg" alt="logo" />
                    </a>
                    <a className="navbar-brand brand-logo-mini" href="index.html">
                        <img src="images/logo-mini.svg" alt="logo" />
                    </a>
                </div>
                <div className="navbar-menu-wrapper d-flex align-items-center">
                    <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
                        <span className="mdi mdi-menu"></span>
                    </button>

                    <ul className="navbar-nav d-none d-md-block">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="LanguageDropdown" href="#" data-toggle="dropdown" aria-expanded="false">
                                <i className="flag-icon flag-icon-us"></i>
                                English
            </a>
                            <div className="dropdown-menu navbar-dropdown pb-0" aria-labelledby="LanguageDropdown">
                                <a className="dropdown-item preview-item px-3 py-0">
                                    <div className="preview-thumbnail">
                                        <div className="preview-icon">
                                            <i className="flag-icon flag-icon-cn"></i>
                                        </div>
                                    </div>
                                    <div className="preview-item-content">
                                        <p className="font-weight-light mb-0 small-text">
                                            Chinese
                  </p>
                                    </div>
                                </a>
                                <a className="dropdown-item preview-item px-3 py-0">
                                    <div className="preview-thumbnail">
                                        <div className="preview-icon">
                                            <i className="flag-icon flag-icon-es"></i>
                                        </div>
                                    </div>
                                    <div className="preview-item-content">
                                        <p className="font-weight-light mb-0 small-text">
                                            Spanish
                  </p>
                                    </div>
                                </a>
                                <a className="dropdown-item preview-item px-3 py-0">
                                    <div className="preview-thumbnail">
                                        <div className="preview-icon">
                                            <i className="flag-icon flag-icon-bl"></i>
                                        </div>
                                    </div>
                                    <div className="preview-item-content">
                                        <p className="font-weight-light mb-0 small-text">
                                            French
                  </p>
                                    </div>
                                </a>
                                <a className="dropdown-item preview-item px-3 py-0">
                                    <div className="preview-thumbnail">
                                        <div className="preview-icon">
                                            <i className="flag-icon flag-icon-ae"></i>
                                        </div>
                                    </div>
                                    <div className="preview-item-content">
                                        <p className="font-weight-light mb-0 small-text">
                                            Arabic
                  </p>
                                    </div>
                                </a>
                            </div>
                        </li>
                    </ul>








                </div>
            </nav>

        );
    }
}

export default Header;