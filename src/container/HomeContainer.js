import {connect} from "react-redux";
import Home from '../components/Home'
import {addToCart} from '../Services/Action/Action'

const mapStateToProps = state => (
    {
        Data: state.cardItem 
    }
)

const mapDispatchProps = dispatch => (
    {
        addToCartHandler: data => dispatch(addToCart(data))
    }
)

export default connect(mapStateToProps, mapDispatchProps)(Home)


// export default Home