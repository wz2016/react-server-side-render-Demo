// const express = require('express');

// // Require react rendering
// const React = require('react');
// const renderToString = require('react-dom/server').renderToString;
// const Home = require('./client/components/Home').default;

// create route handler/store to know the API/request is complete then render page
import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import Routes from './client/Routes';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
    const store = createStore();

    // argument: route config, path need to be fetch
    matchRoutes(Routes, req.path).map(({ route }) => {
        console.log('route: ', route);
        return route.loadData ? route.loadData() : null;
    });

    // some logic to initialze and load data into the store
    res.send(renderer(req, store));
});

app.listen(3000, () => {
    console.log('listening on port 3000');
});