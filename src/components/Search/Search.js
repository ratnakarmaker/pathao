import React from 'react';
import { useParams } from 'react-router';
import fakeData from '../../fakeData/fakeData';
import { Button } from "react-bootstrap";
import "./Search.css";
import Map from "./Map.png";

const Search = (props) => {
    const { id } = useParams();
    const data = fakeData.find(item => item.id === id);
    const { name, image } = data;
    return (
        <div>
            <div className="container">
                <div className="row pt-5">
                    <div className="col-md-3">
                        <div className="search-area">
                            <label htmlFor="Pick From">Pick From</label>
                            <br />
                            <input type="text" className="field" name="from" placeholder="from" required />
                            <br />
                            <label htmlFor="Pick To">Pick To</label>
                            <br />
                            <input type="text" className="field" name="to" placeholder="to" required />
                            <hr/>
                            <Button variant="warning" className="submit-btn">Submit</Button>
                        </div>
                        {/* destination */}
                        <div className="destination">
                            <div className="text-area text-center">
                                <h4>Gazipur</h4>
                                <h4>Banani</h4>
                            </div>
                            <div className="details-area d-flex justify-content-between align-items-center">
                                <img className="vehical-img" src={image} alt="" />
                                <h6> {name}</h6>
                                <h6>$67</h6>
                            </div>
                            <div className="details-area d-flex justify-content-between align-items-center">
                                <img className="vehical-img" src={image} alt="" />
                                <h6> {name}</h6>
                                <h6>$67</h6>
                            </div>
                            <div className="details-area d-flex justify-content-between align-items-center">
                                <img className="vehical-img" src={image} alt="" />
                                <h6> {name}</h6>
                                <h6>$67</h6>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-9">
                        <img src={Map} alt="" />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Search;