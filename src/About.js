import React from "react";
import { Row, Col, Carousel, Image } from "antd";
import 'antd/dist/antd.css';
import { DiReact, DiAws, DiJavascript, DiHtml5, DiCss3 } from 'react-icons/di';

function About() {
    return (
        <>
            <div className="about_container" id="about">
                <Carousel autoplay>

                    {/* -------About Me------- */}
                    <div>
                        <Row className="about_me">
                            <h1>About Me</h1>

                            <h2>Hi , I'm Shraddha Ghormade, Software developer from India, I like to solve the real world problems using the technology.
                                I have done six Month Internship & Training in Amazon Web Services from Pune.
                                Last but not the least , I also love to design websites and webapps using ReactJS ,HTML & CSS.
                                Apart from technology I like to play Badminton or reading Historical Books or even listen to music in my free time.</h2>
                        </Row>
                    </div>

                    {/* ----------Experience----------- */}
                    <div className="experience_container">

                        <h1>Experience</h1>

                        <h2 className="company_name">Maxscripts Technologies 2021-2022</h2>

                        <h2> Maxscripts Technologies is a small company.
                            I worked as a software developer where I worked on many technologies
                            like  ReactJS , HTML,CSS and many more.  Maxscripts Technologies makes mobile games specially for android platform.
                            Rolling Planets , Flakky Run , Shape Patcher , Flying Puffy and  The Indian Bingo are the games launched under Maxscripts Technologies .
                            Apart from that we have worked on many other games using the recent idealogies of AR and VR.
                        </h2>

                    </div>

                    {/* ----------Skills-------- */}

                    <div>

                        <h1 className="skills_container">Skills</h1>

                        <Row className="container">
                            <Col className="skills_column">
                                <h1> <DiReact className="skills_icon" /></h1>
                                <h3 className="skill_name">React</h3>
                            </Col>

                            <Col className="skills_column">
                                <h1><DiAws className="skills_icon" /></h1>
                                <h3 className="skill_name">AWS</h3>
                            </Col>

                            <Col className="skills_column">
                                <h1><DiJavascript className="skills_icon" /></h1>
                                <h3 className="skill_name">JavaScript</h3>
                            </Col>

                            <Col className="skills_column">
                                <h1><DiHtml5 className="skills_icon" /></h1>
                                <h3 className="skill_name">HTML</h3>
                            </Col>

                            <Col className="skills_column">
                                <h1><DiCss3 className="skills_icon" /></h1>
                                <h3 className="skill_name">CSS</h3>
                            </Col>
                        </Row>
                    </div>

                    {/* ----------Hobbies & Intrest----------- */}

                    <div>
                        <h1 className="Hobbies_container">Hobbies & Intrest</h1>

                        <Row className="image_container">
                            <Col className="Images">
                                <Image className="img1" width={350} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyIKs6KJO3v-MtDwPtxMmyd-6fL0cjz4yQ2Q&usqp=CAU" preview={false} />
                                <h2 className="hobbies1">Music</h2>
                            </Col>


                            <Col className="Images">
                                <Image className="img2" width={300} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDeVwbcjmn26uqOx_PCAfbTVhUvubARRfpYA&usqp=CAU" preview={false} />
                                <h2 className="hobbies">Badminton</h2>
                            </Col>

                            <Col className="Images">
                                <Image className="img3" width={350} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa7Iemw7gtlIXnmQxVsYoYXg4dqOKbJUWjgg&usqp=CAU" preview={false} />
                                <h2 className="hobbies">Reading Books</h2>
                            </Col>

 
                            <Col className="Images">
                                <Image className="img4" width={300} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_mNarobRSv1nb0jUSVqTmg-gUVKgEM7wMEA&usqp=CAU" preview={false} />
                                <h2 className="hobbies">Travelling</h2>
                            </Col> 
                        </Row>
                    </div>
                </Carousel>
            </div>
        </>
    )
}

export default About;