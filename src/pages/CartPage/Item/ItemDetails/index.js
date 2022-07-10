import React, { Component } from 'react'
import { connect } from 'react-redux';
import Attributes from './Attributes'
import './styles.scss'

class ItemDetails extends Component {
    render() {
        return (
        <div className='cart-item-details'>
            <div className='cart-item-vitals'>
                <span className='cart-item-brand'>
                    {this.props.item.item.brand}
                </span>
                <span className='cart-item-name'>
                    {this.props.item.item.name}
                </span>
            </div>
            {this.props.item.item.prices.map((curr, idx) => {
                if (curr.currency.label.toLowerCase() === this.props.currency.currency) {
                    return <span key={idx} className='cart-item-price'>{curr.currency.symbol} {curr.amount}</span>
                }
            })}
            <div className='cart-item-attr-container'>
                {this.props.item.item?.attributes?.map((attr, idx) => 
                    <Attributes
                        key={idx}
                        attr={attr}
                    />
                )}
            </div>
        </div>
    )
  }
}

const mapStateToProps = state => ({
    currency: state.Currency
});

export default connect(mapStateToProps, null)(ItemDetails)
