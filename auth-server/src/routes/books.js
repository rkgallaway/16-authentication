'use strict';

const express = require('express');
const router = express.Router();

router.get('/books', auth, handleGetAll);
router.get('/books/:id', auth, handleGetOne);

//Route Handlers
/**
 * Get all saved books
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
function handleGetAll(req, res, next) {
  console.log('LOG: Im in the handleGetAll books route');
  let books = {
    count: 3,
    results: [
      { title: 'Moby Dick' },
      { title: 'Little Women' },
      { title: 'Eloquent Javascript' },
    ],
  };
  res.status(200).json(books);
}

/**
 *Get one saved book
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
function handleGetOne(req, res, next) {
  console.log('LOG: Im in the handleGetOne books route');
  let book = {
    title:'Moby Dick',
  };
  res.status(200).json(book);
}

module.exports = router;
