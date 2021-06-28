import React from 'react'
import Menu from '../Menu'

function Layout({children}) {
    return (
        <div style={{backgroundColor:"rgba(253, 18, 18,0.8)"}}>
            <Menu/>
            {children}
        </div>
    )
}

export default Layout
