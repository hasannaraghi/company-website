import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './index.css';

export default () =>{
    return (
        <Jumbotron fluid className="jumbo border rounded">
            <div class="row">
                <div className="jumbotron-text float-right text-center offset-md-6">
                    <div className="jumbotron-header">Company Website</div>
                    <div class="row">
                        <div className="col-md-8 offset-md-2">
                            This is where the company <b>mission</b> goes. Or a similar slogan that represents what they stand for.
                        </div>
                    </div>
                </div>
            </div>
            
        </Jumbotron>
    )
}