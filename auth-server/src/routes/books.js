'use strict';

const express = require('express');
const router = express.Router();

router.get('/books', handleGetAll);
router.get('/books/:id', handleGetOne);

// Route Handlers
function handleGetAll(req, res, next) {
  console.log('LOG: Im in the handleGetAll books route');
  let books = {
    count: 3,
    results: [
      { title:'Moby Dick' },
      { title:'Little Women' },
      { title: 'Eloquent Javascript' },
    ],
  };
  res.status(200).json(books);
}

function handleGetOne(req, res, next) {
  console.log('LOG: Im in the handleGetOne books route');
  let book = {
    title:'Moby Dick',
  };
  res.status(200).json(book);
}

module.exports = router;
