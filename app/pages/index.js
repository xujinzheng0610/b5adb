import { connect } from 'react-redux'

import LayoutDesign from '../layouts/layoutDesign'
import AuthenticationForm from "../components/AuthenticationForm"
import Project from '../components/ProjectData'



export const LOGIN = "login"
export const REGISTER = "register"

const Index = props => (
    <LayoutDesign>
        {
        props.loggedIn ? (<Project></Project>) : (<div>
            <h1>Welcome to BridgeA Asia Database Management</h1>
            <AuthenticationForm view={LOGIN}/>
        </div>)
        }
    </LayoutDesign>    
)

const mapStateToProps = ({ loggedIn }) => ({ loggedIn })

export default connect(
  mapStateToProps
)(Index)

