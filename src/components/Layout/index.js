import React from 'react'
import Menu from '../Menu'

function Layout({children}) {
    return (
        <div style={{backgroundColor:"black"}}>
            <Menu/>
            {children}
        </div>
    )
}

export default Layout
