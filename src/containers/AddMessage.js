import { connect } from 'react-redux';
import AddMessage from '../components/AddMessage'
import { addMessage } from '../actions';


const mapDispatchToProps = dispatch =>({
    dispatch: (message, author) => {
        dispatch(addMessage(message, author))
    }
})

export default connect(null, mapDispatchToProps) (AddMessage)