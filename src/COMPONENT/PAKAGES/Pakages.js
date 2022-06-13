import React from 'react'
import {Card,Row ,Col} from 'react-bootstrap'
import './Pakages.css'


export default function Pakages() {
    return (

        <div className="container8">
            <div className="section-header">
                <h2 className="section-title wow fadeInDown h24">Packages</h2>
                <p className="wow fadeInDown p3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget risus vitae massa <br /> semper aliquam quis mattis quam.</p>
            </div>

   <br/> <br/>
   <Row xs={1} sm={1} md={2} lg={4} xl={4} >
            {[
                'Success',
                'Danger',
                'Warning',
                'Info',
            ].map((variant) => (
                <Col >
                <Card
                    bg={variant.toLowerCase()}
                    key={variant}
                    text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                    style={{ width: '18rem' }}
                    className="mb-2"
                >
                    <Card.Header>Packages</Card.Header>
                    <Card.Body>
                        <Card.Title>{variant} Pricing </Card.Title>
                        <Card.Text>
                        <div className="wow zoomIn" data-wow-duration="400ms" data-wow-delay="0ms">
                        <ul className="pricing">
                        <li className="plan-header">
                        <div className="price-duration">
                                    <span className="price">
                                        $45
                                    </span>
                                    <span className="duration">
                                        per month
                                    </span>
                                </div>

                                <div className="plan-name">
                                    Basic
                                </div>
                            </li>
                            <li><strong>1</strong> DOMAIN</li>
                            <li><strong>100GB</strong> DISK SPACE</li>
                            <li><strong>UNLIMITED</strong> BANDWIDTH</li>
                            <li>SHARED SSL CERTIFICATE</li>
                            <li><strong>10</strong> EMAIL ADDRESS</li>
                            <li><strong>24/7</strong> SUPPORT</li>
                            <li className="plan-purchase"><a class="btn btn-primary" href="#">Get It Now!</a></li>
                        </ul>
                    </div>
                        </Card.Text>
                    </Card.Body>
                </Card></Col>

            ))}
            </Row>
        </div>

    )
}



