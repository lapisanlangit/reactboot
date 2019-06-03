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



                    <ul className="navbar-nav navbar-nav-right">
                        <li className="nav-item search-wrapper d-none d-md-block">
                            <form action="#">
                                <div className="form-group mb-0">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">
                                                <i className="mdi mdi-magnify"></i>
                                            </span>
                                        </div>
                                        <input type="text" className="form-control" placeholder="Search" />
                                    </div>
                                </div>
                            </form>
                        </li>



                        <li className="nav-item dropdown d-none d-xl-inline-block user-dropdown">
                            <a className="nav-link dropdown-toggle" id="UserDropdown" href="#" data-toggle="dropdown" aria-expanded="false">
                                <div className="dropdown-toggle-wrapper">
                                    <div className="inner">
                                        <img className="img-xs rounded-circle" src="https://www.placehold.it/37x37" alt="Profile image" />
                                    </div>
                                    <div className="inner">
                                        <div className="inner">
                                            <span className="profile-text font-weight-bold">Larry Garner</span>
                                            <small className="profile-text small">Admin</small>
                                        </div>
                                        <div className="inner">
                                            <div className="icon-wrapper">
                                                <i className="mdi mdi-chevron-down"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="UserDropdown">
                                <a className="dropdown-item p-0">
                                    <div className="d-flex border-bottom">
                                        <div className="py-3 px-4 d-flex align-items-center justify-content-center">
                                            <i className="mdi mdi-bookmark-plus-outline mr-0 text-gray"></i>
                                        </div>
                                        <div className="py-3 px-4 d-flex align-items-center justify-content-center border-left border-right">
                                            <i className="mdi mdi-account-outline mr-0 text-gray"></i>
                                        </div>
                                        <div className="py-3 px-4 d-flex align-items-center justify-content-center">
                                            <i className="mdi mdi-alarm-check mr-0 text-gray"></i>
                                        </div>
                                    </div>
                                </a>
                                <a className="dropdown-item mt-2">
                                    Manage Accounts
              </a>
                                <a className="dropdown-item">
                                    Change Password
              </a>
                                <a className="dropdown-item">
                                    Check Inbox
              </a>
                                <a className="dropdown-item">
                                    Sign Out
              </a>
                            </div>
                        </li>


                        <li className="nav-item dropdown">
                            <a className="nav-link count-indicator dropdown-toggle" id="notificationDropdown" href="#" data-toggle="dropdown">
                                <i className="mdi mdi-bell-outline"></i>
                                <span className="count">4</span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="notificationDropdown">
                                <a className="dropdown-item">
                                    <p className="mb-0 font-weight-normal float-left">You have 4 new notifications
                </p>
                                    <span className="badge badge-pill badge-warning float-right">View all</span>
                                </a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item preview-item">
                                    <div className="preview-thumbnail">
                                        <div className="preview-icon bg-success">
                                            <i className="mdi mdi-alert-circle-outline mx-0"></i>
                                        </div>
                                    </div>
                                    <div className="preview-item-content">
                                        <h6 className="preview-subject font-weight-medium text-dark">Application Error</h6>
                                        <p className="font-weight-light small-text">
                                            Just now
                  </p>
                                    </div>
                                </a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item preview-item">
                                    <div className="preview-thumbnail">
                                        <div className="preview-icon bg-warning">
                                            <i className="mdi mdi-comment-text-outline mx-0"></i>
                                        </div>
                                    </div>
                                    <div className="preview-item-content">
                                        <h6 className="preview-subject font-weight-medium text-dark">Settings</h6>
                                        <p className="font-weight-light small-text">
                                            Private message
                  </p>
                                    </div>
                                </a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item preview-item">
                                    <div className="preview-thumbnail">
                                        <div className="preview-icon bg-info">
                                            <i className="mdi mdi-email-outline mx-0"></i>
                                        </div>
                                    </div>
                                    <div className="preview-item-content">
                                        <h6 className="preview-subject font-weight-medium text-dark">New user registration</h6>
                                        <p className="font-weight-light small-text">
                                            2 days ago
                  </p>
                                    </div>
                                </a>
                            </div>
                        </li>


                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle count-indicator" id="messageDropdown" href="#" data-toggle="dropdown" aria-expanded="false">
                                <i className="mdi mdi-email-outline"></i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="messageDropdown">
                                <div className="dropdown-item">
                                    <p className="mb-0 font-weight-normal float-left">You have 7 unread mails
                </p>
                                    <span className="badge badge-info badge-pill float-right">View all</span>
                                </div>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item preview-item">
                                    <div className="preview-thumbnail">
                                        <img src="https://www.placehold.it/36x36" alt="image" className="profile-pic" />
                                    </div>
                                    <div className="preview-item-content flex-grow">
                                        <h6 className="preview-subject ellipsis font-weight-medium text-dark">David Grey
                    <span className="float-right font-weight-light small-text">1 Minutes ago</span>
                                        </h6>
                                        <p className="font-weight-light small-text">
                                            The meeting is cancelled
                  </p>
                                    </div>
                                </a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item preview-item">
                                    <div className="preview-thumbnail">
                                        <img src="https://www.placehold.it/36x36" alt="image" className="profile-pic" />
                                    </div>
                                    <div className="preview-item-content flex-grow">
                                        <h6 className="preview-subject ellipsis font-weight-medium text-dark">Tim Cook
                    <span className="float-right font-weight-light small-text">15 Minutes ago</span>
                                        </h6>
                                        <p className="font-weight-light small-text">
                                            New product launch
                  </p>
                                    </div>
                                </a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item preview-item">
                                    <div className="preview-thumbnail">
                                        <img src="https://www.placehold.it/36x36" alt="image" className="profile-pic" />
                                    </div>
                                    <div className="preview-item-content flex-grow">
                                        <h6 className="preview-subject ellipsis font-weight-medium text-dark"> Johnson
                    <span className="float-right font-weight-light small-text">18 Minutes ago</span>
                                        </h6>
                                        <p className="font-weight-light small-text">
                                            Upcoming board meeting
                  </p>
                                    </div>
                                </a>
                            </div>
                        </li>
                        <li className="nav-item dropdown color-setting d-none d-md-block">
                            <a className="nav-link count-indicator" href="#">
                                <i className="mdi mdi-invert-colors"></i>
                            </a>
                        </li>

                    </ul>

                    <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
          <span className="mdi mdi-menu"></span>
        </button>
      
                </div>
            </nav>

        );
    }
}

export default Header;