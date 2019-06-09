import React, {Component} from 'react'
import {Form, Input, Button} from 'antd'
import fetch from 'isomorphic-unfetch'

class AuthenticationForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: "",
            password: "",
            loginError: false
        }
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.form.validateFields((err, values) => {
            fetch("/signin", {
                method: "post",
                headers: {
                    Accpet: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(values)
            }).then(async res => {
                res.status !== 200 && this.setState({loginError: true})
                return await res.json()
            }).then(data => {
                if(data.token){
                    localStorage.setItem("b5aDBtoken", data.token)
                    console.log("logged in!!")
                }
            }).catch(err => {
                if (err) this.setState({loginError: true})
            })
        })
    }

    render(){
        //console.log(this.props)
        const {getFieldDecorator} = this.props.form

        return(
            <Form layout="inline" onSubmit={this.handleSubmit}>
                { this.state.loginError && <p>LOGIN ERROR!</p>}
                <Form.Item>
                    {
                        getFieldDecorator("username", {rules: [{required: true, message: "Please enter valid username"}] })(
                            <Input name="username" placeholder="Please enter your username"/>
                        )
                    }
                </Form.Item>
                <Form.Item>
                    {
                        getFieldDecorator("password", {rules: [{required: true, message: "Please enter valid password"}] })(
                            <Input name="password" type="password" placeholder="Please enter your password"/>
                        )
                    }
                    
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Login
                    </Button>
                </Form.Item>
            </Form>
        )
    }
}

export default Form.create({ name: "authForm"})(AuthenticationForm)