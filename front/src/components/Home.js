import React, { Fragment } from 'react'

export const Home = () => {
  return (
    <Fragment>
        <h1 id= 'encabezado_productos'> Ultimos productos</h1>
        <section id ='productos' className= 'container mt-5'>
            <div className='row'> 
            {/*produtco 1 */}
                <div className= 'col-sm-12 col-md-6 col-lg-3 my-3'>
                    <div className='card p-3 roubded'>
                        <img className='card-img-top mx-auto' src="./images/nutra_gold.avif" alt="Nutra gold" />
                        <div className='card-body d-flex flex-column'>
                            <h5 id='titulo_producto'><a href="http://localhost:3000"> Nutra Gold Holistic Gatos</a></h5>
                            <div className = 'rating mt-auto'>
                                <div className='rating-outer'>
                                    <div className="rating-inner"></div>

                                </div>
                                <span id="No_de_opinioines"> 5 reviews</span>
                            </div>
                            <p className="card-text">$72.000</p><a href="http://localhost:3000" className="btn-btn-block" id="view_btn">Ver Detalles</a>
                        </div>
                    </div>
                </div>
                {/*produtco 2 */}
                <div className= 'col-sm-12 col-md-6 col-lg-3 my-3'>
                    <div className='card p-3 roubded'>
                        <img className='card-img-top mx-auto' src="./images/nutra-nuggets-mantenimiento.webp" alt="Nutra nugget" />
                        <div className='card-body d-flex flex-column'>
                            <h5 id='titulo_producto'><a href="http://localhost:3000"> Nutra Nuggets Mantimiento</a></h5>
                            <div className = 'rating mt-auto'>
                                <div className='rating-outer'>
                                    <div className="rating-inner"></div>

                                </div>
                                <span id="No_de_opinioines"> 2 reviews</span>
                            </div>
                            <p className="card-text">$52.000</p><a href="http://localhost:3000" className="btn-btn-block" id="view_btn">Ver Detalles</a>
                        </div>
                    </div>
                </div>
                {/*produtco 3 */}
                <div className= 'col-sm-12 col-md-6 col-lg-3 my-3'>
                    <div className='card p-3 roubded'>
                        <img className='card-img-top mx-auto' src="./images/nutra_red.avif" alt="Nutra red" />
                        <div className='card-body d-flex flex-column'>
                            <h5 id='titulo_producto'><a href="http://localhost:3000"> Nutra Red</a></h5>
                            <div className = 'rating mt-auto'>
                                <div className='rating-outer'>
                                    <div className="rating-inner"></div>

                                </div>
                                <span id="No_de_opinioines"> 12 reviews</span>
                            </div>
                            <p className="card-text">$80.000</p><a href="http://localhost:3000" className="btn-btn-block" id="view_btn">Ver Detalles</a>
                        </div>
                    </div>
                </div>
                {/*produtco 4 */}
                <div className= 'col-sm-12 col-md-6 col-lg-3 my-3'>
                    <div className='card p-3 roubded'>
                        <img className='card-img-top mx-auto' src="./images/nutra_green.jpg" alt="Nutra green" />
                        <div className='card-body d-flex flex-column'>
                            <h5 id='titulo_producto'><a href="http://localhost:3000"> Nutra Green</a></h5>
                            <div className = 'rating mt-auto'>
                                <div className='rating-outer'>
                                    <div className="rating-inner"></div>

                                </div>
                                <span id="No_de_opinioines"> 8 reviews</span>
                            </div>
                            <p className="card-text">$74.000</p><a href="http://localhost:3000" className="btn-btn-block" id="view_btn">Ver Detalles</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </Fragment>
  )
}

export default Home