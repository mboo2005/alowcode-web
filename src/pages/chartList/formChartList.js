import React, { Component, forwardRef } from 'react'
import InputItem from "../../components/Form/InputItem"
import { Form } from 'antd'


const FormItemMap = {
    input: [
        {
            id: 'id',
            options: {
            },
            formItemParams: {
                label: 'id',
                style: {
                    display: 'none'
                }
            },
            props: {
                type: 'text',
                placeholder: '请输入卡片标题',
                style: {
                    display: 'none'
                }
            }
        },
        {
            id: 'title',
            options: {
                rules: [
                    {
                        required: true,
                        message: 'Please enter title!',
                    },
                ],
            },
            formItemParams: {
                label: '卡片标题'
            },
            props: {
                type: 'text',
                placeholder: '请输入卡片标题',
            }
        },
        {
            id: 'auth',
            options: {
                rules: [
                    {
                        required: false,
                        message: 'Please enter auth!',
                    },
                ],
            },
            formItemParams: {
                label: '权限'
            },
            props: {
                type: 'text',
                placeholder: '开发中……',
            }
        },
    ]
}


export class FormChartList extends Component {

    async componentDidMount() {
        const fieldsValue = this.props.recordData;
        if (Object.keys(fieldsValue).length > 0) {
            this.props.form.setFieldsValue(fieldsValue)
        }
    }
    render() {
        const form = this.props.form

        return (
            <div>
                <Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} onSubmit={() => {
                    this.props.onConfirm(this.props.form)
                }}>
                    {
                        FormItemMap.input.map(item => (
                            <InputItem
                                key={item.id}
                                id={item.id}
                                options={item.options}
                                form={form}
                                formItemParams={item.formItemParams}
                                {...item.props} />
                        ))
                    }
                </Form>
            </div>
        )
    }
}

export default Form.create()(FormChartList)