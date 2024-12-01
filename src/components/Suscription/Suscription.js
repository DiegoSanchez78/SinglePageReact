import React from 'react'
import "./suscription.css"

const Suscription = () => {
  return (
    <div className='container-fluid subscription'>
        <div className='container'>
            <div className='row'>
                <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12'>
                    <div className='subscription_title'>
                        <h5>Suscribase</h5>
                    </div>
                    <div className='subscription-form'>
                        <input type='text' placeholder='Ingrese su mail' />
                    </div>
                    <div className='subscription_button'>
                        <p>Suscribete</p>                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Suscription