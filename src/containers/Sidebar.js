import { connect } from 'react-redux';
import Sidebar from '../components/SideBar'


export default connect(state=>({
       users: state.users
}), null) (Sidebar)