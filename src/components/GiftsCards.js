import React, {Fragment}  from 'react'
import '../styles/GiftsCards.css'

const GiftsCards = ({products, reseñas}) => (
<Fragment>
    <div className="album py-5 bg-light">
        <div className="container container-cards">
            <div className="row">
                {
                    products.map((product, index) => (
                        <div className="col-md-3" key={product.id}>
                            <div className="card mb-4 shadow-sm">

                                <img src={product.img} className="rounded" alt="Responsive" width="100%" height="260"/>
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <p className="card-text small">{product.name}</p>
                                        </div>
                                        <small className="text-muted"><strong>${product.specialPrice}</strong></small>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <p className="card-text small">&nbsp;</p>
                                        </div>
                                        <small className="text-muted">${product.price}</small>
                                    </div>
                                    <h5 className="card-text small">{product.category}</h5>
                                        {
                                            reseñas.map((reseña, y) =>
                                                {if (product.id===reseña.id) {
                                                    if (reseña.stars===0) {
                                                        return (
                                                            <ul className="list-unstyled list-inline rating mb-0 small"  key={y}>
                                                                <li className="list-inline-item mr-0"><i className="far fa-star"></i></li>
                                                                <li className="list-inline-item mr-0"><i className="far fa-star"></i></li>
                                                                <li className="list-inline-item mr-0"><i className="far fa-star"></i></li>
                                                                <li className="list-inline-item mr-0"><i className="far fa-star"></i></li>
                                                                <li className="list-inline-item mr-0s"><i className="far fa-star"></i></li>
                                                            </ul>
                                                        )
                                                    }
                                                    if (reseña.stars===1) {
                                                        return (
                                                            <ul className="list-unstyled list-inline rating mb-0 small"  key={y}>
                                                                <li className="list-inline-item mr-0"><i className="fas fa-star"></i></li>
                                                                <li className="list-inline-item mr-0"><i className="far fa-star"></i></li>
                                                                <li className="list-inline-item mr-0"><i className="far fa-star"></i></li>
                                                                <li className="list-inline-item mr-0"><i className="far fa-star"></i></li>
                                                                <li className="list-inline-item mr-0s"><i className="far fa-star"></i></li>
                                                            </ul>
                                                        )
                                                    }
                                                    if (reseña.stars===2) {
                                                        return (
                                                            <ul className="list-unstyled list-inline rating mb-0 small"  key={y}>
                                                                <li className="list-inline-item mr-0"><i className="fas fa-star"></i></li>
                                                                <li className="list-inline-item mr-0"><i className="fas fa-star"></i></li>
                                                                <li className="list-inline-item mr-0"><i className="far fa-star"></i></li>
                                                                <li className="list-inline-item mr-0"><i className="far fa-star"></i></li>
                                                                <li className="list-inline-item mr-0s"><i className="far fa-star"></i></li>
                                                            </ul>
                                                        )
                                                    }
                                                    if (reseña.stars===3) {
                                                        return (
                                                            <ul className="list-unstyled list-inline rating mb-0 small"  key={y}>
                                                                <li className="list-inline-item mr-0"><i className="fas fa-star"></i></li>
                                                                <li className="list-inline-item mr-0"><i className="fas fa-star"></i></li>
                                                                <li className="list-inline-item mr-0"><i className="fas fa-star"></i></li>
                                                                <li className="list-inline-item mr-0"><i className="far fa-star"></i></li>
                                                                <li className="list-inline-item mr-0s"><i className="far fa-star"></i></li>
                                                            </ul>
                                                        )
                                                    }
                                                    if (reseña.stars===4) {
                                                        return (
                                                            <ul className="list-unstyled list-inline rating mb-0 small"  key={y}>
                                                                <li className="list-inline-item mr-0"><i className="fas fa-star"></i></li>
                                                                <li className="list-inline-item mr-0"><i className="fas fa-star"></i></li>
                                                                <li className="list-inline-item mr-0"><i className="fas fa-star"></i></li>
                                                                <li className="list-inline-item mr-0"><i className="fas fa-star"></i></li>
                                                                <li className="list-inline-item mr-0s"><i className="far fa-star"></i></li>
                                                            </ul>
                                                        )
                                                    }
                                                    if (reseña.stars===5) {
                                                        return (
                                                            <ul className="list-unstyled list-inline rating mb-0 small"  key={y}>
                                                                <li className="list-inline-item mr-0"><i className="fas fa-star"></i></li>
                                                                <li className="list-inline-item mr-0"><i className="fas fa-star"></i></li>
                                                                <li className="list-inline-item mr-0"><i className="fas fa-star"></i></li>
                                                                <li className="list-inline-item mr-0"><i className="fas fa-star"></i></li>
                                                                <li className="list-inline-item mr-0"><i className="fas fa-star"></i></li>
                                                            </ul>
                                                        )
                                                    }
                                                    return (
                                                        <div className="productText" key={y}>

                                                        </div>
                                                    )}
                                                    return(
                                                        <div className="productText" key={y}>
                                                        </div>
                                                    )
                                                }
                                            )
                                        }
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
</Fragment>
)
export default GiftsCards