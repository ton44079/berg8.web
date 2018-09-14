import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { Col, Row, Steps, Button, message, Card } from 'antd';
import Intinerary from '../../components/forms/Intinerary';
import CostChangeTo from '../../components/forms/CostChangeTo';
import './RequestPage.css';
import { changeStepRequestPage } from '../../actions';
//const Step = Steps.Step;
const steps = [
    {
        title: 'INTINERARY',
        content: <Intinerary />,
    },
    {
        title: 'COST CHARGE TO',
        content: <CostChangeTo />
    },
    {
        title: 'EXPENDITURE',
        content: <p>HII</p>
    }
];
class RequestPage extends React.Component {
    next() {
        const current = this.props.stepCurrent + 1;
        this.props.changeStep(current);
    }

    prev() {
        const current = this.props.stepCurrent - 1;
        this.props.changeStep(current);
    }
    render() {

        const { stepCurrent } = this.props;

        return (
            <Card title="Travel Request" bordered={false}>
                <Row>
                    <Col>
                        <Steps current={stepCurrent}>
                            {steps.map(item => <Steps.Step key={item.title} title={item.title} />)}
                        </Steps>
                    </Col>
                </Row>
                <div className="steps-content">{steps[stepCurrent].content}</div>
                <div className="steps-action">
                    {
                        stepCurrent < steps.length - 1 && <Button type="primary" onClick={() => this.next()}>Next</Button>
                    }
                    {
                        stepCurrent === steps.length - 1 && <Button type="primary" onClick={() => message.success('Processing complete!')}>Done</Button>
                    }
                    {
                        stepCurrent > 0 && (<Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>Previous</Button>)
                    }
                </div>
            </Card>
        );
    }
}


RequestPage.propTypes = {
    stepCurrent: PropTypes.number.isRequired
}


const mapStateToProps = state => {
    return {
        stepCurrent: state.requestPage.current,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        changeStep: (step) => dispatch(changeStepRequestPage(step))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(RequestPage);