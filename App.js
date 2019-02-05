import React from 'react';

const range = (size) =>
    [...Array(size).keys()].map(i => i);

const Cube = () => (
    <div style={{
        margin: '5px',
        width: '5px',
        height: '5px',
        backgroundColor: 'pink'
    }}/>
);

const Cubes = () => (
    <div style={{
        display: 'flex',
        flexWrap: 'wrap'
    }}>
        <Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/><Cube/>
    </div>
);

const App = () => (
    <div>
        <Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes /><Cubes />
    </div>
);

export default App;