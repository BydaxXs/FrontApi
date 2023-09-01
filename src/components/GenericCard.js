import React from 'react'

function GenericCard(){
    return(
        <div className='container d-flex justify-content-center align-items-center h-100'>
            <div class="card border-0 text-white">
                <div className='input-box'>
                    <div class="card-body">
                        <h1 class="card-title text-center">Titulo de la tarjeta</h1>
                        <br/>
                        <div className='container'>
                            <div className='row justify-content-md-center'>
                                <div className='col col-xl-6 input-field'>
                                    <input type='text' className='input' required />
                                    <label for='something'>Titulo del input</label>
                                </div>
                                <div className='col col-xl-6 input-field'>
                                    <input type='text' className='input' required />
                                    <label for='something'>Titulo del input</label>
                                </div>
                            </div>
                            <div className='row justify-content-md-center'>
                                <div className='col col-xl-6 input-field'>
                                    <input type='text' className='input' required />
                                    <label for='something'>Titulo del input</label>
                                </div>
                                <div className='col col-xl-6 input-field'>
                                    <input type='text' className='input' required />
                                    <label for='something'>Titulo del input</label>
                                </div>
                            </div>
                            <div className='row justify-content-md-center'>
                                <div className='col col-xl-6 input-field'>
                                    <input type='text' className='input' required />
                                    <label for='something'>Titulo del input</label>
                                </div>
                                <div className='col col-xl-6 input-field'>
                                    <input type='text' className='input' required />
                                    <label for='something'>Titulo del input</label>
                                </div>
                            </div>
                            <div className='row justify-content-md-center'>
                                <div className='col col-xl-3 input-field'>
                                    <a name="" id="" class="btn btn-outline-light" href="#" role="button">Button</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GenericCard;