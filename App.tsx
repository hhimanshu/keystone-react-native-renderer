import React, {useEffect, useState} from 'react';
import {AppRegistry} from 'react-native';
import {ApolloProvider} from '@apollo/client';
import {client, getPlanData} from "./db";
import Home from "./Home";

const App = () => {
    const [slides, setSlides] = useState()
    useEffect(() => {
        getPlanData().then(d => {
            const plans = d.data.plans
            console.log(plans)

            const sections = plans.map(plan => plan.sections).flat()
            console.log(sections)

            const slides = sections.map(section => section.slides).flat()
            console.log(slides)
            setSlides(slides)
        })
    }, [slides])

    return <ApolloProvider client={client}>
        <Home/>
        <pre>{JSON.stringify(slides, null, 2)}</pre>
    </ApolloProvider>
};

AppRegistry.registerComponent('MyApplication', () => App);

export default App;