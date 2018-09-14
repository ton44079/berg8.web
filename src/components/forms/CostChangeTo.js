import React from 'react'
import PropType from 'prop-types';
import { Card, Button, Form, Col, Row, Input, AutoComplete } from 'antd';
import moment from 'moment';


const costSource = ['Burns Bay Road', 'Downing Street', 'Wall Street'];
const budgetSource = ['IO4-001', 'IO4-002', 'IO4-M20'];
const projectSource = ['P101-0222', 'P203-192M', 'P415-001'];

class CostChangeTo extends React.Component {
    constructor() {
        super();

    }
    render() {
        const { getFieldDecorator } = this.props.form;

        const formItemLayout2 = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 24 },
                md: { span: 24 },
                lg: { span: 5 }

            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 24 },
                md: { span: 24 },
                lg: { span: 19 }
            },
        };


        return (
            <Card>
                <Form onSubmit={this.props.handleSubmitCostChangeTo}>

                    <Row gutter={16}>
                        <Col xs={{ span: 24 }} >
                            <Form.Item
                                {...formItemLayout2}
                                label="Cost Center"
                            >
                                <Row gutter={16}>
                                    <Col xs={{ span: 12 }} >
                                        {getFieldDecorator('costType', {
                                            rules: [{ required: true, message: 'Please input Cost Center!' }],
                                        })(
                                            <AutoComplete
                                                dataSource={costSource}
                                                filterOption={(inputValue, option) => option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
                                            />
                                        )}
                                    </Col>
                                    <Col xs={{ span: 12 }} >

                                        <Input />

                                    </Col>
                                </Row>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col xs={{ span: 24 }} >
                            <Form.Item
                                {...formItemLayout2}
                                label="Budget"
                            >
                                <Row gutter={16}>
                                    <Col xs={{ span: 12 }} >
                                        {getFieldDecorator('budgetType', {
                                            rules: [{ required: true, message: 'Please input Budget!' }],
                                        })(
                                            <AutoComplete
                                                dataSource={budgetSource}
                                                filterOption={(inputValue, option) => option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
                                            />
                                        )}
                                    </Col>
                                    <Col xs={{ span: 12 }} >

                                        <Input />

                                    </Col>
                                </Row>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col xs={{ span: 24 }} >
                            <Form.Item
                                {...formItemLayout2}
                                label="Project Code"
                            >
                                <Row gutter={16}>
                                    <Col xs={{ span: 12 }} >
                                        {getFieldDecorator('projectCode', {
                                            rules: [{ required: true, message: 'Please input Project Code!' }],
                                        })(
                                            <AutoComplete
                                                dataSource={projectSource}
                                                filterOption={(inputValue, option) => option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
                                            />
                                        )}


                                    </Col>
                                    <Col xs={{ span: 12 }} >

                                        <Input />

                                    </Col>
                                </Row>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Form.Item className="text-right"><Button type="primary" htmlType="submit">SAVE</Button></Form.Item>
                </Form>
            </Card>
        )
    }
}

CostChangeTo.propType = {
    // data : PropType.object.isRequest,
}

export default Form.create()(CostChangeTo); 