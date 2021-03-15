import React from 'react';
import DefaultAppBar from './Nav';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import {MDXProvider} from '@mdx-js/react';


import CodeBlock from './CodeBlock';


const components = {
    h1: props => <h1 style={{color: 'tomato'}} {...props} />,
    pre: props => <div {...props} />,
    code: CodeBlock
}

export default function Layout({ children }) {
    return (
        <>
            <CssBaseline />
            <DefaultAppBar />
            <Container maxWidth="lg" >
                <MDXProvider components={components}>
                    <div className="wrap">
                        {children}
                    </div>
                </MDXProvider>
                {/* <footer>@ Footer</footer> */}
            </Container>
        </>
    )
}