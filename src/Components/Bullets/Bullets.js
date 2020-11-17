import React from 'react';

const Bullet = () => {
    return (
        <div class="ui bulleted list">
            <div class="item">Pre-flight Procedures</div>
            <div class="item">Aeromedical Factors</div>
            <div class="item">
                <div>Takeoffs and Landings</div>
                <div class="list">
                    <a class="item" href="#">Soft-field Takeoffs</a>
                    <div class="item">Short field Takeoffs</div>
                    <div class="item">Normal Takeoffs</div>
                </div>
            </div>
            <div class="item">Post-flight Procedures</div>
        </div>
        );

};

export default Bullet;