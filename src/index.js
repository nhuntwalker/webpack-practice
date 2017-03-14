import _ from 'lodash';

function component() {
    var element = document.createElement('div');
    element.innerHTML = '<h1>' + _.join(['Hello', 'webpack'], ' ') + '</h1>';
    return element;
}

document.body.appendChild(component());
