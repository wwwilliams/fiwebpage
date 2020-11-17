import React from 'react';
import { Link } from 'react-router-dom';




const Header = () => {

    return (
            <div class="ui inverted menu">
            <div class="header item">
                <Link to={'/'}> CFI Page
                    </Link>
  </div>

            <Link to={'/CFI'} className="item">
                CFI
  </Link>
            <Link to={'/CFII'} className="item">
                CFII
  </Link>
            <Link to={'/MEI'} className="item">
                MEI
  </Link>
            <div class="right menu">
                <div class="item">
                    <div class="ui button">Sign up</div>
                </div>
                <div class="item">
                    <div class="ui button">Log-in</div>
                </div>
           < div class="ui category search item">
            <div class="ui transparent icon input">
                <input class="prompt" type="text" placeholder="Search CFI Page..."/>
                    <i class="search link icon"></i>
    </div>
                <div class="results"></div>
            </div>
            </div >
            </div>



        
    );
};

export default Header;