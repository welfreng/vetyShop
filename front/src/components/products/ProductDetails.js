import React, { Fragment } from 'react'
import MetaData from "../layout/MetaData"

export const ProductDetails = () => {
  return (
    <Fragment>
        <MetaData title="Agility Alimento Blando Gatos"></MetaData>
        <div className="row d-flex justify-content-around">
          <div className="col-12 col-lg-5 img-fuid" id="imagen_producto" >
            <img src="../../images/nutra_gold.avif" height="450" width="450" alt=""  />
          </div>
          <div className="col-12 col-lg-5 mt-5">
            <h3>alimento humedoagylity Gatpos</h3>
            <p id="product_id"> Prduct #332256</p>
          </div>
        </div>
       

    </Fragment>
  )
}