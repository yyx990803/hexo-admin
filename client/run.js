
var admin = require('./')
  , api = require('./api')

// for debugging
window.React = require('react')

api.init('rest', '/admin/api');

document.addEventListener('DOMContentLoaded', () => {
    var node = document.createElement('div')
    document.body.appendChild(node)
    admin(node)
});

