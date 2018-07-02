import React from 'react';

class Form extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.getWeather}>
                <input type='text' name='city' placeholder='Nhập tỉnh/thành phố' />
                <input type='text' name='country' placeholder='Nhập quốc gia' />
                <button>Xem thời tiết</button>
            </form>
        )
    }
}

export default Form;