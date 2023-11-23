import _ from 'lodash';
import  './style.css';
import Icon from './icon.png';

// import myName from './myName';

function component() {
    const element = document.createElement('div');
  
    //  Lodash is now imported by this script
     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
     element.classList.add('hello');

    //element.innerHTML = myName('Cody');

    const myIcon = new Image();

    myIcon.src = Icon;

    element.appendChild(myIcon);
  
    return element;
  }
  
  document.body.appendChild(component());