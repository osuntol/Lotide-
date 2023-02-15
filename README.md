# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @osuntol/lotide`

**Require it:**

`const _ = require('@osuntol/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: checking if arrays are equal 
* `assertEqual`: checking if data is equal
* `assertObjectEquals`: checking if objects are equal
* `countLetters`: counting letters 
* `countOnly`: counting only element occurs in an array
* `eqArrays`: checking if arrays equal
* `eqObjects`: checking if data in object are equal
* `findKey`: finding key in an object
* `findKeyByValue`: finding key by value
* `flatten`: remove arrays within an array
* `head`: first element within an array
* `letterPosition`: find the position of the letter
* `map`: creates a new array based on calling a function 
* `middle`: find middle values of an array
* `tail`: find the last element withinm an array
* `takeUntil`: take until value is truthy 
* `without`: remove a specific element from an array