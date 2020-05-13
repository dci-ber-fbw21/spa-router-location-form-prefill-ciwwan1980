import React from 'react';
import queryString from "query-string"
import './index.css';

const HomePage =(props)=> {
console.log(props)
// http://localhost:3000/?language=english
console.log(props.location.search, "here----")
// http://localhost:3000/?customerRating=5&bookType=paperback,hardcover&language=english,german

const data=queryString.parse(props.location.search); 
console.log(data)

        return (
            <div style={{ backgroundColor: 'blue' }}>
                <div className="home-page">
                    <h1>Filters</h1>

                    <form>
                        {/* Search term */}
                        <div className="form-field">
                            <label className="form-field__label">Search</label>

                            <input
                                name="search-term"
                                type="text"
                            />
                        </div>

                        {/* Used */}
                        <div className="form-field">
                            <label className="checkbox-field">
                                <input name="used" type="checkbox" />
                                <span className="checkbox-field__label">Include used copies</span>
                            </label>
                        </div>

                        {/* Preferred language */}
                        <div className="form-field">
                            <label className="form-field__label">Language</label>

                            <label className="checkbox-field">
                                <input name="language" type="checkbox"
                                checked={data.language.includes("english")}
                                 />
                                <span className="checkbox-field__label">English</span>
                            </label>

                            <label className="checkbox-field">
                                <input name="language" type="checkbox" 
                                 checked={data.language.includes("german")}
                                />
                                <span className="checkbox-field__label">German</span>
                            </label>

                            <label className="checkbox-field">
                                <input name="language" type="checkbox"
                                checked={data.language.includes("italian")}
                                 />
                                <span className="checkbox-field__label">Italian</span>
                            </label>

                            <label className="checkbox-field">
                                <input name="language" type="checkbox" 
                                  checked={data.language.includes("chineese")}
                                />
                              
                                <span className="checkbox-field__label">Chineese</span>
                            </label>

                            <label className="checkbox-field">
                                <input name="language" type="checkbox"
                                  checked={data.language.includes("russian")} 
                                  />
                              
                                <span className="checkbox-field__label">Russian</span>
                            </label>
                        </div>

                        {/* Book type */}
                        <div className="form-field">
                            <label className="form-field__label">Book type</label>

                            <label className="checkbox-field">
                                <input name="book-type" type="checkbox" />
                                <span className="checkbox-field__label">E-Book</span>
                            </label>
                            <label className="checkbox-field">
                                <input name="book-type" type="checkbox" />
                                <span className="checkbox-field__label">Paperback</span>
                            </label>
                            <label className="checkbox-field">
                                <input name="book-type" type="checkbox" />
                                <span className="checkbox-field__label">Hardcover</span>
                            </label>
                        </div>

                        {/* Rating */}
                        <div className="form-field">
                            <label className="form-field__label">Rating</label>
                            <label className="radio-field">
                                <input
                                    name="customer-rating"
                                    type="radio"
                                         checked={"1"===data.customerRating}
                                />
                                <span className="radio-field__label">1 and up</span>
                            </label>

                            <label className="radio-field">
                                <input
                                    name="customer-rating"
                                    type="radio"
                                         checked={"2"===data.customerRating}
                                />
                                <span className="radio-field__label">2 and up</span>
                            </label>

                            <label className="radio-field">
                                <input
                                    name="customer-rating"
                                    type="radio"
                                     checked={"3"===data.customerRating}
                                />
                                <span className="radio-field__label">3 and up</span>
                            </label>

                            <label className="radio-field">
                                <input
                                    name="customer-rating"
                                    type="radio"
                                    checked={"4"===data.customerRating}
                                />
                                <span className="radio-field__label">4 and up</span>
                            </label>

                            <label className="radio-field">
                                <input
                                    name="customer-rating"
                                    type="radio"
                                    checked={"5"===data.customerRating}
                                   
                                  
                                />
                                <span className="radio-field__label">5 and up</span>
                            </label>
                        </div>
                    </form>
                </div>
            </div>
        )
}


export default HomePage