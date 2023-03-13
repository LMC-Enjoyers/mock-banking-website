import React from 'react'
import './featuredInfo.css'
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { PieChart, Pie, Cell, Legend } from 'recharts';

export default function FeaturedInfo(this: any) {
    const moneyRate: number = 10.30;
    let moneyRateIcon: any;
    let moneyRateString: string = moneyRate as unknown as string;
    if (moneyRate > 0) {
        moneyRateIcon = <TrendingUpIcon  className='featuredIcon positive'/>
        moneyRateString='+' + moneyRate
    } else if (moneyRate < 0) {
        moneyRateIcon = <TrendingDownIcon  className='featuredIcon'/>
    }

    const colours = ["#1e1e1e", "#565656", "#a4a5a5"]
    const data = [
        {name: 'Electronics', value: 400},
        {name: 'Laptops', value: 700},
        {name: 'Phones', value: 200},
      ];
  return (
    <div className='featured'>
        <div>
            <div className="featuredItem">
            <div className="featuredTitle">
                <div className="bankIcon">
                    <AccountBalanceIcon sx={{ fontSize: 60}}/>
                </div>
                <div className="account">
                    <span className="titleName">NAME</span><br></br>
                    <span className="accountInfo">ACC_NO | SORT_CODE</span>
                </div>
            </div>
            <div className="featuredMoney">£10,000</div>
            <div className="featuredMoneyContainer">
                <span className="featuredMoneyRate">
                    {moneyRateIcon}{moneyRateString}%
                </span>

                <span className="featuredRecentMoney">
                +£1,000 this week
                </span>
            </div>
        </div>

        <div className="featuredItem light">
            <div className="featuredTitle">
                <div className="bankIcon dark">
                    <AccountBalanceWalletIcon sx={{ fontSize: 60}}/>
                </div>
                <div className="account">
                    <span className="titleName small">Account Name (SAVINGS)</span><br></br>
                    <span className="accountInfo dark">Start Date</span>
                </div>
            </div>
            <div className="featuredMoney">£10,000</div>
            <div className="featuredMoneyContainer">
                <span className="featuredMoneyRate">
                    5% interest rate
                </span>

                <span className="featuredRecentMoney">
                +£5,000 this month
                </span>
            </div>
        </div>
        </div>
        <div className="featuredItem pie">
            <div className="featuredTitle pie">
                <span className="titleName">Top Categories</span>
            </div>
            <div>
                <PieChart width={500} height={500}>
                    <Pie data={data} dataKey="value" nameKey='name' cx='50%' cy='50%' innerRadius={130} outerRadius={160} fill="#1e1e1e" paddingAngle={2} legendType='square' label>  
                    {
                    data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colours[index]}/>
                    ))
                    }
                    </Pie>
                    <Legend iconSize={25} layout='vertical' height={10}/>
                </PieChart>
            </div>
        </div>
    </div>
  )
}
