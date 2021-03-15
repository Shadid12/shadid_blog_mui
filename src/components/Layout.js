import React from 'react';
import DefaultAppBar from './Nav';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { MDXProvider } from '@mdx-js/react';
import Typography from '@material-ui/core/Typography';


import CodeBlock from './CodeBlock';


const components = {
    h1: props => <Typography variant="h1" component="h2" gutterBottom {...props}/>,
    h2: props => <Typography variant="h2" gutterBottom {...props}/>,
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
                    {children}
                </MDXProvider>
                {/* <footer>@ Footer</footer> */}
            </Container>
        </>
    )
}