import React, { Component } from 'react';
class Image extends Component {
    constructor(props){
        super(props);
        this.state = {
           
        }}
    render() { 
        const { bulbOn } = this.props;
        console.log(bulbOn);
        return ( 
            <div>
           {bulbOn &&  <img src="https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzAwMi83NTkvb3JpZ2luYWwvMDgxMjA5LWxpZ2h0LWJ1bGItMDIuanBn" style={{width: 300}} />}
           {!bulbOn && <img src="https://www.industrytap.com/wp-content/uploads/2016/02/incandescent-e1456179151174.jpg" style={{width: 300}} />}
           </div>
         );
    }
}
 
export default Image;