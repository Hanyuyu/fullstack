import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './part1/App';
import Part1C from "./part1/Part1C";
import Part1Counter from "./part1/Part1Counter";
import Part1State from "./part1/Part1State";
import Counter from "./part1/Counter";
import CounterPlus from "./part1/CounterPlus";
import UniCaft from "./part1/UniCaft";
import Anecdotes from "./part1/Anecdotes";
import Note from "./part2/Note";
import Course from "./part2/part2-a/Course";
import PhoneBook from "./part2/PhoneBook";
import axios from "axios";
import Contries from "./part2/Contries";
import './index.css'

// axios.get("https://restcountries.com/v3.1/all")
//     .then(res => {
//         console.log(res.data)
//         console.log(res.data.length)
//     });

ReactDOM.createRoot(document.getElementById('root')).render(<Note />)

