import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const React = require("react");


export default class Spinner extends React.Component {
    constructor(props) {
        super(props);
        this.size = this.props.size || "3x";
    }

    render() {
        return(
            <Container>
                <Row className="justify-content-center">
                    <FontAwesomeIcon icon="spinner" className="standAloneIcon" size={this.size} spin/>
                </Row>
            </Container>
        );
    }
}