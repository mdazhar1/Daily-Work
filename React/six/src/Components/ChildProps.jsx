import React from 'react';
import { Card, Button } from "react-bootstrap";

const ChildProps = ({ initialState }) => {
    // console.log("initialState===>",initialState.Cards)
    return (
        <div style={{ display: "flex" }}>
            {initialState.map((item) => {
                console.log("item==>", item);
                return (
                    <Card style={{ width: '18rem' }} key={item.id}>
                        <Card.Img variant="top" src={item.CardImg} />
                        <Card.Body>
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Text>{item.desc}</Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                );
            })}
        </div>
    );
};

export default ChildProps;