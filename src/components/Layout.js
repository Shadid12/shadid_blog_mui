import React from 'react';
import DefaultAppBar from './Nav'

export default function Layout({ children }) {
    return (
        <>
            <DefaultAppBar />
            {children}
            <footer>@ Footer</footer>
        </>
    )
}