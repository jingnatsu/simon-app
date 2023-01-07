import React from 'react';
import '../SearchComponent/index.scss'

function SearchComponent() {
    return (
      <React.Fragment>
        <a id="SearchComponent" className="search-toggle toggle-link"></a>
        <div className="search-container">
        <div className="search-box">
            <form role="search" method="get" className="search-form" action="#">
                <label>Search for
                    <input type="search" id="search-field" placeholder="type and hit enter" name="s"/>
                </label>
                <input type="submit" className="search-submit" value="Search"/>
            </form>
        </div>
      </div>
      </React.Fragment>
       
    )
}

export default SearchComponent;