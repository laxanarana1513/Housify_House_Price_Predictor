import React from 'react';

const reviewsContent = (props) => {
    const Class = ['carousel-item', props.active]
    return (
        <div className={Class.join(' ')}>
            <div className="row">

                <div className="col-md-4 mb-3">
                    <div className="card" style={{ backgroundColor: '#fbfbfbf0', color: 'darkblue', padding: '23px 12px' }}>
                        
                        <div className="card-body">

                            <p className="card-text">Far far away, behind the word mountains, far from
                                the countries Vokalia and Consonantia, there live the blind texts.
                            </p>

                        </div>
                        <div className="d-flex align-items-center" style={{justifyContent: 'flex-end'}}>
                            
                            <div className="pl-3">
                                <p className="name"> - Roger Scott</p>
                                
                            </div>
                        </div>

                    </div>
                </div>
                <div className="col-md-4 mb-3">
                    <div className="card" style={{ backgroundColor: '#fbfbfbf0', color: 'darkblue', padding: '23px 12px' }}>

                        <div className="card-body">
                            <p className="card-text">Far far away, behind the word mountains, far from
                                the countries Vokalia and Consonantia, there live the blind texts.
                            </p>

                        </div>
                        <div className="d-flex align-items-center" style={{justifyContent: 'flex-end'}}>
                            
                            <div className="pl-3">
                                <p className="name"> - Jenifer Williams</p>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-3">
                    <div className="card" style={{ backgroundColor: '#fbfbfbf0', color: 'darkblue', padding: '23px 12px' }}>
                        
                        <div className="card-body">
                            <p className="card-text">Far far away, behind the word mountains, far from
                                the countries Vokalia and Consonantia, there live the blind texts.
                            </p>

                        </div>
                        <div className="d-flex align-items-center" style={{justifyContent: 'flex-end'}}>
                            
                            <div className="pl-3">
                                <p className="name"> - Lorence Smith</p>
                                
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default reviewsContent