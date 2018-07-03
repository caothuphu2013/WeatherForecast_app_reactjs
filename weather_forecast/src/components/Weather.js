import React from 'react';

const weather = (props) => (
    <div>
        <div className='weather_info'>
            {props.weather.temperature && <p>Nhiệt độ: {props.weather.temperature}</p>}
            {props.weather.humidity && <p>Độ ẩm: {props.weather.humidity} %</p>}
            {props.weather.description && <p>Điều kiện: {props.weather.description}</p>}
        </div>
        <div className='weather_error'>
            {props.weather.error && <p>Lỗi: {props.weather.error}</p>}
        </div>
    </div>
)

export default weather;