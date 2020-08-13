import * as React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import Counter from './components/Counter';
import FetchData from './components/FetchData';

import './custom.css'
import {useEffect} from "react";
import { connect, create } from "./SignalR";
import {ConsoleLogger} from "@microsoft/signalr/dist/esm/Utils";

export default () => {
    useEffect(() => {
        create().start().then(
            (d) => console.log("connected---", d)
        ).catch((d) => console.log(d));

    }, [])
    return(
        <Layout>
            <Route exact path='/' component={Home} />
            <Route path='/counter' component={Counter} />
            <Route path='/fetch-data/:startDateIndex?' component={FetchData} />
        </Layout>
    );
}
