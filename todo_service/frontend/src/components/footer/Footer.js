import React from 'react';
import {Card} from "react-bootstrap";


const Footer = () => {
    return (
        <Card bg="dark" variant="dark" style={{'position' : 'sticky'}}>
            <Card.Body>
                <blockquote className="blockquote mb-0 me-auto">
                    <p className="text-light">
                        {' '}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                        erat a ante.{' '}
                    </p>
                    <footer className="blockquote-footer">
                        Someone famous in <cite title="Source Title">Source Title</cite>
                    </footer>
                </blockquote>
            </Card.Body>
        </Card>
    )
}

export default Footer;
