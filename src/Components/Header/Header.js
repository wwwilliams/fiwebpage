import React from 'react';


const Header = () => {

    return (
            <div class="ui inverted menu">
            <div class="header item">
                CFI Page
  </div>

            <a class="item">
                CFI
  </a>
            <a class="item">
                CFII
  </a>
            <a class="item">
                MEI
  </a>
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