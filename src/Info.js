import React from "react";
import { Image } from "antd";
import 'antd/dist/antd.css';

function Info() {
    return (
        <>
            <div className="info_container">

                <h1 className="me">Shraddha  Ghormade</h1>
                <h1 className="tag">Your  Friendly  Neighbourhood  Software Developer</h1>

                <Image className="my_img" src="Image/mypic.jpg" preview={false} />

            </div>
        </>
    )
}

export default Info;