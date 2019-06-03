import React, { Component } from 'react';

class Sidebar extends Component {
    render() {
        return (
            <div>
                <div className="theme-setting-wrapper">
                    <div id="theme-settings" className="settings-panel">
                        <i className="settings-close mdi mdi-close"></i>
                        <div className="d-flex align-items-center justify-content-between border-bottom">
                            <p className="settings-heading font-weight-bold border-top-0 mb-3 pl-3 pt-0 border-bottom-0 pb-0">Template Skins</p>
                        </div>
                        <div className="sidebar-bg-options" id="sidebar-light-theme"><div className="img-ss rounded-circle bg-light border mr-3"></div>Light</div>
                        <div className="sidebar-bg-options selected" id="sidebar-dark-theme"><div className="img-ss rounded-circle bg-dark border mr-3"></div>Dark</div>
                        <p className="settings-heading font-weight-bold mt-2">Header Skins</p>
                        <div className="color-tiles mx-0 px-4">
                            <div className="tiles primary"></div>
                            <div className="tiles success"></div>
                            <div className="tiles warning"></div>
                            <div className="tiles danger"></div>
                            <div className="tiles pink"></div>
                            <div className="tiles info"></div>
                            <div className="tiles dark"></div>
                            <div className="tiles default"></div>
                        </div>
                    </div>
                </div>

                <nav className="sidebar sidebar-offcanvas sidebar-dark" id="sidebar">
                    <ul className="nav">
                        <li className="nav-item nav-profile">
                            <img src="https://www.placehold.it/100x100" alt="profile image" />
                            <p className="text-center font-weight-medium">Larry Garner</p>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="index.html">
                                <i className="menu-icon icon-diamond"></i>
                                <span className="menu-title">Dashboard</span>
                                <div className="badge badge-success">3</div>
                            </a>
                        </li>
                        <li className="nav-item d-none d-md-block">
                            <a className="nav-link" data-toggle="collapse" href="#page-layouts" aria-expanded="false" aria-controls="page-layouts">
                                <i className="menu-icon icon-compass"></i>
                                <span className="menu-title">Page Layouts</span>
                            </a>
                            <div className="collapse" id="page-layouts">
                                <ul className="nav flex-column sub-menu">
                                    <li className="nav-item">
                                        <a className="nav-link" href="pages/layout/boxed-layout.html">Boxed</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="pages/layout/rtl-layout.html">RTL</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="pages/layout/horizontal-menu.html">Horizontal Menu</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="pages/layout/horizontal-menu-2.html">Horizontal Menu 2</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="collapse" href="#apps-dropdown" aria-expanded="false" aria-controls="apps-dropdown">
                                <i className="menu-icon icon-settings"></i>
                                <span className="menu-title">Apps</span>
                                <div className="badge badge-info">2</div>
                            </a>
                            <div className="collapse" id="apps-dropdown">
                                <ul className="nav flex-column sub-menu">
                                    <li className="nav-item">
                                        <a className="nav-link" href="pages/apps/email.html">E-mail</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="pages/apps/calendar.html">Calendar</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="pages/apps/todo.html">Todo List</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="pages/apps/gallery.html">Gallery</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="pages/widgets.html">
                                <i className="menu-icon icon-speedometer"></i>
                                <span className="menu-title">Widgets</span>
                                <div className="badge badge-warning">7</div>
                            </a>
                        </li>
                        <li className="nav-item d-none d-md-block">
                            <a className="nav-link" data-toggle="collapse" href="#sidebar-layouts" aria-expanded="false" aria-controls="sidebar-layouts">
                                <i className="menu-icon icon-layers"></i>
                                <span className="menu-title">Sidebar Layouts</span>
                            </a>
                            <div className="collapse" id="sidebar-layouts">
                                <ul className="nav flex-column sub-menu">
                                    <li className="nav-item">
                                        <a className="nav-link" href="pages/layout/compact-menu.html">Compact menu</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="pages/layout/sidebar-collapsed.html">Icon menu</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="pages/layout/sidebar-hidden.html">Sidebar Hidden</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="pages/layout/sidebar-hidden-overlay.html">Sidebar Overlay</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="pages/layout/sidebar-fixed.html">Sidebar Fixed</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
                                <i className="menu-icon icon-star"></i>
                                <span className="menu-title">Basic UI Elements</span>
                                <div className="badge badge-danger">2</div>
                            </a>
                            <div className="collapse" id="ui-basic">
                                <ul className="nav flex-column sub-menu">
                                    <li className="nav-item">
                                        <a className="nav-link" href="pages/ui-features/accordions.html">Accordions</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="pages/ui-features/buttons.html">Buttons</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="pages/ui-features/badges.html">Badges</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="pages/ui-features/breadcrumbs.html">Breadcrumbs</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="pages/ui-features/dropdowns.html">Dropdowns</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="pages/ui-features/modals.html">Modals</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="pages/ui-features/progress.html">Progress bar</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="pages/ui-features/pagination.html">Pagination</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="pages/ui-features/tabs.html">Tabs</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="pages/ui-features/typography.html">Typography</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="pages/ui-features/tooltips.html">Tooltips</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="collapse" href="#ui-advanced" aria-expanded="false" aria-controls="ui-advanced">
                                <i className="menu-icon icon-equalizer"></i>
                                <span className="menu-title">Advanced Elements</span>
                                <div className="badge badge-success">3</div>
                            </a>
                            <div className="collapse" id="ui-advanced">
                                <ul className="nav flex-column sub-menu">
                                    <li className="nav-item">
                                        <a className="nav-link" href="pages/ui-features/dragula.html">Dragula</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="pages/ui-features/clipboard.html">Clipboard</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="pages/ui-features/context-menu.html">Context menu</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="pages/ui-features/slider.html">Sliders</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="pages/ui-features/carousel.html">Carousel</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="pages/ui-features/colcade.html">Colcade</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="pages/ui-features/loaders.html">Loaders</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="collapse" href="#form-elements" aria-expanded="false" aria-controls="form-elements">
                                <i className="menu-icon icon-screen-desktop"></i>
                                <span className="menu-title">Form elements</span>
                            </a>
                            <div className="collapse" id="form-elements">
                                <ul className="nav flex-column sub-menu">
                                    <li className="nav-item">
                                        <a className="nav-link" href="pages/forms/basic_elements.html">Basic Elements</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="pages/forms/advanced_elements.html">Advanced Elements</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="pages/forms/validation.html">Validation</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="pages/forms/wizard.html">Wizard</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="collapse" href="#editors" aria-expanded="false" aria-controls="editors">
                                <i className="menu-icon icon-loop"></i>
                                <span className="menu-title">Editors</span>
                            </a>
                            <div className="collapse" id="editors">
                                <ul className="nav flex-column sub-menu">
                                    <li className="nav-item">
                                        <a className="nav-link" href="pages/forms/text_editor.html">Text editors</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="pages/forms/code_editor.html">Code editors</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="collapse" href="#charts" aria-expanded="false" aria-controls="charts">
                                <i className="menu-icon icon-pie-chart"></i>
                                <span className="menu-title">Charts</span>
                            </a>
                            <div className="collapse" id="charts">
                                <ul className="nav flex-column sub-menu">
                                    <li className="nav-item">
                                        <a className="nav-link" href="pages/charts/chartjs.html">ChartJs</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="pages/charts/morris.html">Morris</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="pages/charts/flot-chart.html">Flot</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="pages/charts/google-charts.html">Google charts</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="pages/charts/sparkline.html">Sparkline js</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="pages/charts/c3.html">C3 charts</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="pages/charts/chartist.html">Chartists</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="pages/charts/justGage.html">JustGage</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="collapse" href="#tables" aria-expanded="false" aria-controls="tables">
                                <i className="menu-icon icon-grid"></i>
                                <span className="menu-title">Tables</span>
                                <div className="badge badge-danger">4</div>
                            </a>
                            <div className="collapse" id="tables">
                                <ul className="nav flex-column sub-menu">
                                    <li className="nav-item">
                                        <a className="nav-link" href="pages/tables/basic-table.html">Basic table</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="pages/tables/data-table.html">Data table</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="pages/tables/js-grid.html">Js-grid</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="pages/tables/sortable-table.html">Sortable table</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="pages/ui-features/popups.html">
                                <i className="menu-icon icon-bubbles"></i>
                                <span className="menu-title">Popups</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="pages/ui-features/notifications.html">
                                <i className="menu-icon icon-support"></i>
                                <span className="menu-title">Notifications</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="collapse" href="#icons" aria-expanded="false" aria-controls="icons">
                                <i className="menu-icon icon-badge"></i>
                                <span className="menu-title">Icons</span>
                            </a>
                            <div className="collapse" id="icons">
                                <ul className="nav flex-column sub-menu">
                                    <li className="nav-item">
                                        <a className="nav-link" href="pages/icons/flag-icons.html">Flag icons</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="pages/icons/font-awesome.html">Font Awesome</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="pages/icons/simple-line-icon.html">Simple line icons</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="pages/icons/themify.html">Themify icons</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="collapse" href="#maps" aria-expanded="false" aria-controls="maps">
                                <i className="menu-icon icon-map"></i>
                                <span className="menu-title">Maps</span>
                            </a>
                            <div className="collapse" id="maps">
                                <ul className="nav flex-column sub-menu">
                                    <li className="nav-item">
                                        <a className="nav-link" href="pages/maps/mapeal.html">Mapeal</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="pages/maps/vector-map.html">Vector Map</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="pages/maps/google-maps.html">Google Map</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="collapse" href="#auth" aria-expanded="false" aria-controls="auth">
                                <i className="menu-icon icon-lock"></i>
                                <span className="menu-title">User Pages</span>
                                <div className="badge badge-danger">4</div>
                            </a>
                            <div className="collapse" id="auth">
                                <ul className="nav flex-column sub-menu">
                                    <li className="nav-item">
                                        <a className="nav-link" href="pages/samples/login.html"> Login </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="pages/samples/login-2.html"> Login 2 </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="pages/samples/register.html"> Register </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="pages/samples/register-2.html"> Register 2 </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="pages/samples/lock-screen.html"> Lockscreen </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="collapse" href="#error" aria-expanded="false" aria-controls="error">
                                <i className="menu-icon icon-folder"></i>
                                <span className="menu-title">Error pages</span>
                                <div className="badge badge-info">1</div>
                            </a>
                            <div className="collapse" id="error">
                                <ul className="nav flex-column sub-menu">
                                    <li className="nav-item">
                                        <a className="nav-link" href="pages/samples/error-404.html"> 404 </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="pages/samples/error-500.html"> 500 </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="collapse" href="#general-pages" aria-expanded="false" aria-controls="general-pages">
                                <i className="menu-icon icon-user"></i>
                                <span className="menu-title">General Pages</span>
                                <div className="badge badge-success">2</div>
                            </a>
                            <div className="collapse" id="general-pages">
                                <ul className="nav flex-column sub-menu">
                                    <li className="nav-item">
                                        <a className="nav-link" href="pages/samples/blank-page.html"> Blank Page </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="pages/samples/profile.html"> Profile </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="pages/samples/faq.html"> FAQ </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="pages/samples/faq-2.html"> FAQ 2 </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="pages/samples/news-grid.html"> News grid </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="pages/samples/timeline.html"> Timeline </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="pages/samples/search-results.html"> Search Results </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="pages/samples/portfolio.html"> Portfolio </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="collapse" href="#e-commerce" aria-expanded="false" aria-controls="e-commerce">
                                <i className="menu-icon icon-briefcase"></i>
                                <span className="menu-title">E-commerce</span>
                            </a>
                            <div className="collapse" id="e-commerce">
                                <ul className="nav flex-column sub-menu">
                                    <li className="nav-item">
                                        <a className="nav-link" href="pages/samples/invoice.html"> Invoice </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="pages/samples/pricing-table.html"> Pricing Table </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="pages/samples/orders.html"> Orders </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="documentation/documentation.html">
                                <i className="menu-icon icon-docs"></i>
                                <span className="menu-title">Documentation</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>

        );
    }
}

export default Sidebar;
