import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
    return (
        <div>
            <nav className={`navbar navbar-expand-lg bg-${props.mode}`} data-bs-theme={props.mode}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="{`/`}">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href={`/`}>Home</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href={`/about`}>About</a>
                            </li>
                        </ul>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="themeMode" onChange={props.toggleMode}/>
                            <label className={`form-check-label text-${props.mode === 'dark' ? 'light' : 'dark'}`}>{props.btnModeText}</label>
                        </div>
                    </div>
                </div>
            </nav>
            <div id="detail"></div>
        </div>
    )
}

Navbar.propTypes = {
    title: PropTypes.string,
    aboutText: PropTypes.string
}

Navbar.defaultProps  = {
    title: 'Title here',
    aboutText: 'About Text here'
}