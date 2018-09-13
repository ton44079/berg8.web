import React from 'react'
import PropType from 'prop-types';
import { Card, Button, Form, Col, Row, Input, Select } from 'antd';
import { Radio, DatePicker, TimePicker,InputNumber } from 'antd';
import moment from 'moment';

const RadioGroup = Radio.Group;
const Option = Select.Option;
const Intinerary = (props) => {
    const formItemLayout = {
        labelCol: {
            xs: { span: 24 },
            sm: { span: 8 },
            md: { span: 8 },
            lg: { span: 6 }

        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 16 },
            md: { span: 16 },
            lg: { span: 18 }
        },
    };

    return (


        <Card>
            <Form onSubmit={props.handleSubmitIntinerary}>

                <Row gutter={16}>
                    <Col xs={{ span: 12 }} >
                        <Form.Item
                            {...formItemLayout}
                            label="Objective"
                        >
                            <Select>
                                <Option value="1">On duty</Option>
                                <Option value="2">Meeting</Option>
                                <Option value="3">Seminar</Option>
                                <Option value="4">Exhibition</Option>
                                <Option value="5">Traning</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col xs={{ span: 12 }} >
                        <Form.Item>
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col xs={{ span: 12 }} >
                        <Form.Item
                            {...formItemLayout}
                            label="Travel"
                        >
                            <RadioGroup value={1}>
                                <Radio value={1}>Domestic</Radio>
                                <Radio value={2}>Oversea</Radio>
                            </RadioGroup>
                        </Form.Item>
                    </Col>
                    <Col xs={{ span: 12 }} >

                    </Col>
                </Row>

                <Row gutter={16}>
                    <Col xs={{ span: 12 }} >
                        <Form.Item
                            {...formItemLayout}
                            label="From Country"
                        >
                            <Select>
                                <Option value="1">Thailand</Option>
                                <Option value="2">Japan</Option>
                                <Option value="3">US</Option>
                                <Option value="4">UK</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col xs={{ span: 12 }} >
                        <Form.Item
                            {...formItemLayout}
                            label="Destination Country"
                        >
                            <Select>
                                <Option value="1">Thailand</Option>
                                <Option value="2">Japan</Option>
                                <Option value="3">US</Option>
                                <Option value="4">UK</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={16}>
                    <Col xs={{ span: 12 }} >
                        <Form.Item
                            {...formItemLayout}
                            label="Province or City"
                        >
                            <Select>
                                <Option value="1">Thailand</Option>
                                <Option value="2">Japan</Option>
                                <Option value="3">US</Option>
                                <Option value="4">UK</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col xs={{ span: 12 }} >
                        <Form.Item
                            {...formItemLayout}
                            label="Province or City"
                        >
                            <Select>
                                <Option value="1">Thailand</Option>
                                <Option value="2">Japan</Option>
                                <Option value="3">US</Option>
                                <Option value="4">UK</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={16}>
                    <Col xs={{ span: 12 }} >
                        <Form.Item
                            {...formItemLayout}
                            label="Date : From"
                        >
                            <DatePicker style={{ width: '100%' }} />
                        </Form.Item>
                    </Col>
                    <Col xs={{ span: 12 }} >
                        <Form.Item
                            {...formItemLayout}
                            label="Date : To"
                        >
                            <DatePicker style={{ width: '100%' }} />
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={16}>
                    <Col xs={{ span: 12 }} >
                        <Form.Item
                            {...formItemLayout}
                            label="Time : From"
                        >
                            <TimePicker defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} style={{ width: '100%' }} />
                        </Form.Item>
                    </Col>
                    <Col xs={{ span: 12 }} >
                        <Form.Item
                            {...formItemLayout}
                            label="Time : To"
                        >
                            <TimePicker defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} style={{ width: '100%' }} />
                        </Form.Item>
                    </Col>
                </Row>

                   <Row gutter={16}>
                    <Col xs={{ span: 12 }} >
                        <Form.Item
                            {...formItemLayout}
                            label="Duration (days)"
                        >
                          <InputNumber min={1} style={{width:'100%'}}/>
                        </Form.Item>
                    </Col>
                    <Col xs={{ span: 12 }} >
                      
                    </Col>
                </Row>


                <Form.Item className="text-right"><Button type="primary" htmlType="submit">SAVE</Button></Form.Item>
            </Form>
        </Card>
    )
}

Intinerary.propType = {
    // data : PropType.object.isRequest,
}

export default Intinerary