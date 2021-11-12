/* (function()=>
{
    const document_element = document.documentElement;
    const display = document.getElementById('cvs').getContext('2d', {alpha:false});

    display.canvas.width = document_element.clientWidth - 32;


})(); */

const canvas = document.getElementById('cvs');
const ctx = canvas.getContext('2d', {alpha: true});
