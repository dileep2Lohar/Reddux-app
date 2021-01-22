import {connect} from "react-redux";
import Header from '../components/Header'

const mapStateToProps = state => (
    {
        Data: state.cardItem 
    }
)

const mapDispatchProps = dispatch => (
    {
        
    }
)

export default connect(mapStateToProps, mapDispatchProps)(Header)


// export default Home