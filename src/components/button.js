import React, { Component } from 'react';
class SuhanaButton extends Component {
   constructor(){
super();
// this.state = {
//     text: null,
// }
   }
    render() { 
        const { text,toggle } = this.props;
        return ( 
            <button
             onClick={toggle}
             >{text}</button>
         );
    }
}
 
export default SuhanaButton;