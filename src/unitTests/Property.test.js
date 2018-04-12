import React from 'react';
import ReactDOM from 'react-dom';
import Properties from '../Property';

describe('Property', () => {

  it ('get card', () => {
    let testData = {propertyid: 5,
                    imageurl: 'wwww.somewhereSpecial',
                    propertyaddress: '123 happy court lane',
                    propertycity: 'Denver',
                    propertystate: 'CO',
                    propertydescription: 'This is a 3 unit 9 Bedroom property that is renting for $3020.00 a month',
                    }
    const actual = Properties.loadCard(testData);
    expect(actual).toBe('testCard')
  })

})