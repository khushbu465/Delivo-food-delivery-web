import React from 'react'

const LocationModal = () => {
    return (
        <>
            <div
                className="modal fade location-modal"
                id="location"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex={-1}
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div className="modal-title">
                                <h5 className="fw-semibold">Select a Location</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                />
                            </div>
                        </div>
                        <div className="modal-body">
                            <div className="search-section">
                                <form className="form_search" role="form">
                                    <input
                                        type="search"
                                        placeholder="Search Location"
                                        className="nav-search nav-search-field"
                                    />
                                </form>
                            </div>
                            <a href="#!" className="current-location">
                                <div className="current-address">
                                    <i className="ri-focus-3-line focus" />
                                    <div>
                                        <h5>Use current-location</h5>
                                        <h6>Wellington St., Ottawa, Ontario, Canada</h6>
                                    </div>
                                </div>
                                <i className="ri-arrow-right-s-line arrow" />
                            </a>
                            <h5 className="mt-sm-3 mt-2 fw-medium recent-title dark-text">
                                Recent Location
                            </h5>
                            <a href="#!" className="recent-location">
                                <div className="recant-address">
                                    <i className="ri-map-pin-line theme-color" />
                                    <div>
                                        <h5>Bayshore</h5>
                                        <h6>kingston St., Ottawa, Ontario, Canada</h6>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="modal-footer">
                            <a href="#" className="btn gray-btn" data-bs-dismiss="modal">
                                Close
                            </a>
                            <a href="#" className="btn theme-btn mt-0" data-bs-dismiss="modal">
                                Save
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default LocationModal
