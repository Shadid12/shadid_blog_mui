import React from 'react';
import DefaultAppBar from './Nav';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

export default function Layout({ children }) {
    return (
        <>
            <CssBaseline />
            <DefaultAppBar />
            <Container maxWidth="md" >
                {children}
                <footer>@ Footer</footer>
            </Container>
        </>
    )
}