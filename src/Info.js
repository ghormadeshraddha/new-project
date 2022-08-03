import React from "react";
import { Image } from "antd";
import 'antd/dist/antd.css';

function Info() {
    return (
        <>
            <div className="info_container">

                <div className="bg">
                    <Image preview={false} width={1400} height={450} className="image_part" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0Xx-MRinbTy8M9QabkDFNcttjn2z2Jb2AkQ&usqp=CAU" />
                </div>

                <div className="myname">
                    <h1 className="me">Shraddha  Ghormade</h1>

                    <h1>Your  Friendly  Neighbourhood  Software Developer</h1>
                </div>
                
                <Image className="my_img" src="Image/mypic.jpg" preview={false} width={255} />

            </div>
        </>
    )
}

export default Info;