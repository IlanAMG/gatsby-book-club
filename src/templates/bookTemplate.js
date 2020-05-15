import React from 'react'

import Layout from '../components/layout';
import StyledBookItem from '../components/StyledBookItem';

const bookTemplate = (props) => {
    return (
        <Layout>
            <StyledBookItem>
                <h2>
                    {props.pageContext.title} - <small>{props.pageContext.author.name}</small>
                </h2>
                <p>
                    {props.pageContext.summary}
                </p>
            </StyledBookItem>
        </Layout>
    )
}

export default bookTemplate;
