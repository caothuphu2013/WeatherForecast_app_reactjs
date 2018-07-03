import React from 'react';

const form = (props) => (
    <form onSubmit={props.getWeather}>
        <div className="form-group">
            <input type='text' name='city' placeholder='Nhập tỉnh/thành phố' />
            
        </div>
        <div className="form-group">
            <input type='text' name='country' placeholder='Nhập quốc gia' />    
        </div>
        <div className="form-group form-button">
            <button>Xem thời tiết</button>      
        </div>
          
    </form>
);

export default form;