import React from 'react';

const copyright = (props) => {
    const date = new Date().getFullYear()
    return (
        <div className="container-fluid px-0 py-5" style={{ background: "#050d21" }}>
            <div className="container-xl">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <p className="mb-0" style={{ color: "rgba(255,255,255,.5)", fontSize: "13px" }}>
                            Copyright &#169;
                            {date} All Rights Reserved | Designed By <span style={{ color: 'darkred' }}> Laxana Rana</span>
                        </p>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default copyright