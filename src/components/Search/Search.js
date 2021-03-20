import React, { useState } from 'react';
import { useParams } from 'react-router';
import fakeData from '../../fakeData/fakeData';
import { Button } from "react-bootstrap";
import "./Search.css";
import Map from "./Map.png";
import GoogleMapReact from 'google-map-react';

const Search = (props) => {
    const { id } = useParams();
    const data = fakeData.find(item => item.id === id);
    const { name, image } = data;
    const [search, setSearch] = useState(false);
    return (
        <div>
            <div className="container">
                <div className="row pt-5">
                    <div className="col-md-3">
                        {!search ? [
                            <div className="search-area">
                                <form onSubmit={() => setSearch(true)}>
                                    <label htmlFor="Pick From">Pick From</label>
                                    <br />
                                    <input type="text" className="field" name="from" placeholder="from" />
                                    <br />
                                    <label htmlFor="Pick To">Pick To</label>
                                    <br />
                                    <input type="text" className="field" name="to" placeholder="to" />
                                    <hr />
                                    <input className="submit-btn" type="submit" value="Submit" />
                                </form>
                            </div>] :
                            [
                                <div className="destination" >
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
                            ]}
                    </div>

                    <div className="col-md-9">
                        <div className="map">
                            <GoogleMapReact
                                bootstrapURLKeys={{ key: "AIzaSyCjDN7u0sYBzGe0njODwIX7MzpOQZEWW3k" }}
                                defaultCenter={
                                    {
                                        lat: 23.8103,
                                        lng: 90.4125
                                    }
                                }
                                defaultZoom={6}
                            >
                            </GoogleMapReact>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    );
};

export default Search;