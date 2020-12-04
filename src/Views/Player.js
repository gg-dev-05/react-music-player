import React from 'react'
import Drawer from '../Components/Drawer'
import MainPlayer from '../Components/MainPlayer'

// import Button from '@material-ui/core/Button'

export default function Player() {
    return (
        <div>
            <Drawer />
            <MainPlayer />
            {/* <Button variant="contained" color="primary">Hello World</Button> */}
        </div>
    )
}
