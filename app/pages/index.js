import Page from '../layouts/page'
import {DatePicker} from "antd"
import AuthenticationForm from "../components/AuthenticationForm"


const Index = props => (
    <Page>
        <h1>Hello from NEXTJS</h1>
        <DatePicker/>
        <AuthenticationForm/>
    </Page>
)

export default Index