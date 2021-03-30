import React from 'react'
import {Link} from 'react-router-dom'

const QuitCircuit = () => {
        return (
            <section>
                <div className="quit-container">
                    <div className="container-fluid quit-content">
                    <Link to="/landing">
                     <img className="closing-btn" src="https://img.icons8.com/ios-glyphs/24/ffffff/cancel.png"/>
                     </Link>
                    <div>
                    I'm the QuitCircuit Component
                    </div>

                    </div>
                </div>
            </section>
        )
    }
export default QuitCircuit