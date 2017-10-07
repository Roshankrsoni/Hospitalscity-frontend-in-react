import React from 'react'
import {Grid, Col, Row} from 'react-bootstrap'

class SearchComponent extends React.Component {
  render() {
    return (
        <div id="imaginary_container">
            <div className="input-group stylish-input-group">
                <input type="text" className="form-control"  placeholder="Search" />
                <span className="input-group-addon">
                    <button type="submit">
                        <span className="glyphicon glyphicon-search"></span>
                    </button>
                </span>
            </div>
        </div>
    );
  }
}

export default SearchComponent;
