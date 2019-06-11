import Page from '../layouts/page'
import {DatePicker} from "antd"
import AuthenticationForm from "../components/AuthenticationForm"

export const LOGIN = "login"
export const REGISTER = "register"


const Index = props => (
    <Page>
        <h1>BridgeA Asia Database Management</h1>
        <AuthenticationForm view={LOGIN}/>
    </Page>
)

export default Index