import React, { Component } from 'react';

class Country extends Component {
    constructor(props) {
                super(props);
                this.state = {
                    id: 101,
                    cityName:'india'
                }
            }
            changestateName = () => {
                        this.setState ({
                          cityName:'American'
                        })
                    }
  render() {
    return (
                 <div>
                     {this.state.cityName}
                         <button onClick={() => this.changestateName()}>changestateName</button>
                 </div>
             )
  }
}


export default Country;