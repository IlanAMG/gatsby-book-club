import React from 'react'

import Layout from '../components/layout';
import styled from 'styled-components';

const bookTemplate = (props) => {
    return (
        <Layout>
            <section>
                <h2>
                    {props.pageContext.title} - <small>{props.pageContext.author.name}</small>
                </h2>
                <p>
                    {props.pageContext.summary}
                </p>
            </section>
        </Layout>
    )
}

export default bookTemplate;
