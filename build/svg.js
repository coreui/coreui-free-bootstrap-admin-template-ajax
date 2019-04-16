#!/usr/bin/env node

'use strict'

const http = require('http');
const fs = require('fs');

const lines = fs.readFileSync('dist/index.html', 'ascii').toString().split('\n')

// go through the list of code lines
lines.forEach((line) => {
  // console.log(line)
  const svg = line.match(/(?:data|src)=\"([^"]*svg)\"/).match(/\"nav-ivon\"/)
  const navIcon = line.match(/\"nav-ivon\"/)
  if (svg && navIcon) {
    const src = svg[1]
    console.log(src)
  }
})

// <img([\w\W]+?)>

// fs.readFile('dist/index.html', 'utf8', function (err,data) {
//   if (err) {
//     return console.log(err);
//   }
//   // var result = data.replace(/string to be replaced/g, 'replacement');
//
//   // fs.writeFile(someFile, result, 'utf8', function (err) {
//   //    if (err) return console.log(err);
//   // });
// });
