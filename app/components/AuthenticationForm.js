import React, {Component} from 'react'
import {Form, Input, Button} from 'antd'
import fetch from 'isomorphic-unfetch'
import {LOGIN, REGISTER} from "../pages"

const RegisterFields = props =>  {
    return<>
        <Form.Item>
            Email: 
            {
                props.getFieldDecorator("email", {rules: [{required: true, message: "Please enter valid email"}] })(
                    <Input name="email" placeholder="Please enter your email"/>
                )
            }
        </Form.Item>
    </>
}

class AuthenticationForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: "",
            password: "",
            error: false,
            success: false
        }
        this.view = {
            login:{
                path: "/signin",
                name: "Login"
            },
            register:{
                path: "/signup",
                name: "Register"
            }
        }
        if (this.props.view === LOGIN) this.vManager = this.view.login
        else this.vManager = this.view.register
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.form.validateFields((err, values) => {
            fetch(this.vManager.path, {
                method: "post",
                headers: {
                    Accpet: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(values)
            }).then(res => res.json()
            ).then(data => {
                if(data.token){
                    localStorage.setItem("b5aDBtoken", data.token)
                }
                this.setState({error: false, success: true})
                console.log("success, current state is ", this.state)
                console.log("data returned:", data)
            }).catch(err => {
                if (err) this.setState({error: true,  success: false})
            })
        })
    }

    render(){
        //console.log(this.props)
        const {getFieldDecorator} = this.props.form

        return(
            <Form onSubmit={this.handleSubmit}>
                { this.state.success && (<p> {this.vManager.name} successful!</p>)}
                { this.state.error && (<p>{this.vManager.name} ERROR!</p>)}
                
                <Form.Item>
                    Username: 
                    {
                        getFieldDecorator("username", {rules: [{required: true, message: "Please enter valid username"}] })(
                            <Input name="username" placeholder="Please enter your username"/>
                        )
                    }
                </Form.Item>
                <Form.Item>
                    Password:
                    {
                        getFieldDecorator("password", {rules: [{required: true, message: "Please enter valid password"}] })(
                            <Input name="password" type="password" placeholder="Please enter your password"/>
                        )
                    }
                </Form.Item>
                {this.props.view === REGISTER && (
                    <RegisterFields getFieldDecorator={getFieldDecorator} />
                )}
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        {this.vManager.name}
                    </Button>
                </Form.Item>
            </Form>
        )
    }
}

export default Form.create({ name: "authForm"})(AuthenticationForm)