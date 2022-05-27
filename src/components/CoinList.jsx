import React from 'react'

const CoinList = ({screenCoins}) => {
    return (
        <div>
            {
                screenCoins && screenCoins.map(item => {
                    return (
                        <div key={item._id} className="cell">
                            <div className='cell-image'>
                                <img src={item.coinImage} alt="coin" />
                                <span>{item.coinName}</span>
                            </div>
                            <div className='price'>
                                ${item.usd_price}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CoinList