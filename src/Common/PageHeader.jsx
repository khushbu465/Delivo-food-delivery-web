import React from 'react'
import { Link } from 'react-router-dom'

const PageHeader = (props) => {
    return (
        <>
            <section className="page-head-section">
                <div className="container page-heading">
                    <h2 className="h3 mb-3 text-white text-center">{props.title}</h2>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb flex-lg-nowrap justify-content-center justify-content-lg-star">
                            <li className="breadcrumb-item"> <Link to="/"><i className="ri-home-line" />  Home</Link> </li>
                            <li className="breadcrumb-item active" aria-current="page"> {props.title} </li>
                        </ol>
                    </nav>
                </div>
            </section>

        </>
    )
}

export default PageHeader
