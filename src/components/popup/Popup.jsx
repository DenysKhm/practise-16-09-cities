import React, { Component } from 'react';

export class Popup extends Component {
    render() {
        const { children, id } = this.props;

        return (
            <div className="modal fade" id={id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        {children}
                    </div>
                </div>
            </div>
        )
    }
}

export default Popup