import { connect } from 'react-redux';
import MessagesList from '../components/MessagesList'


export default connect(state=>({
       messages: state.messages
}), null) (MessagesList)