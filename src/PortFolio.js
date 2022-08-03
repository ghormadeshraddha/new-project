import React from "react";
import { Row, Col, Image } from "antd";
import 'antd/dist/antd.css';

function PortFolio() {
    return (
        <>
            <div className="portfolio_container" id="portfolio">

                <Row className="Projects">
                    <h1>PortFolio</h1>
                </Row>

                <Row className="project_links">
                    <Col>
                        <Image className="portfolio_images1" width={450} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb7FnQ4ZD7BZLm8Gkhx6gy8eS3yHK57la9kg&usqp=CAU" preview={false} />
                        <h2 className="img_name">Web Development</h2>
                    </Col>

                    <Col >
                        <Image className="portfolio_images2" width={370} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuWBPQGtbhFVJsc-EV9DTFuLTdO_JvD3esOw&usqp=CAU" preview={false} />
                        <h2 className="img_name2">Web Design & Development</h2>
                    </Col>
                    
                    <Col >
                        <Image className="portfolio_images3" width={420} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj1I9ra72Wakdq-jiPQJF7zTEQP-eXPu3sSA&usqp=CAU" preview={false} />
                        <h2 className="img_name3">MARIO</h2>
                    </Col>

                </Row>

            </div>

        </>
    )
}

export default PortFolio;