import React from 'react'
import './featuredInfo.css'
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { PieChart, Pie, Cell, Legend } from 'recharts';

export default function FeaturedInfo(this: any) {

    //measures the rate by which the money in your bank account has increases / decreased
    // if it has increased it will show a positive trend line, otherwise it will show a negative trend line
    const moneyRate: number = 10.30;
    let moneyRateIcon: any;
    let moneyRateString: string = moneyRate as unknown as string;
    if (moneyRate > 0) {
        moneyRateIcon = <TrendingUpIcon  className='featuredIcon positive'/>
        moneyRateString='+' + moneyRate
    } else if (moneyRate < 0) {
        moneyRateIcon = <TrendingDownIcon  className='featuredIcon'/>
    }

    // colours used for the pie chart
    const colours = ["#1e1e1e", "#565656", "#a4a5a5"]
    // data for the pie chart
    const data = [
        {name: 'Electronics', value: 400},
        {name: 'Laptops', value: 700},
        {name: 'Phones', value: 200},
      ];
  return (
    <div className='featured'>
        <div>
            {/* everything in the featured Item, including Bank Name, Account Number, Sort Code, Ammount in Account, and how much was earned / spent this week */}
            <div className="featuredItem"> 
                <div className="featuredTitle">
                    <div className="bankIcon">
                        <AccountBalanceIcon sx={{ fontSize: 60}}/>
                    </div>
                    <div className="account">
                        <span className="titleName">BANK NAME</span><br></br>
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

            {/* second featured item including Account Name, Amount in Account, interest rate and how much was added / removed from the account this month */}
            <div className="featuredItem light">
                <div className="featuredTitle">
                    <div className="bankIcon dark">
                        <AccountBalanceWalletIcon sx={{ fontSize: 60}}/>
                    </div>
                    <div className="account">
                        <span className="titleName small">Account Number 1 (SAVINGS)</span><br></br>
                        <span className="accountInfo dark">20/03/2023</span>
                    </div>
                </div>
                <div className="featuredMoney">£17,000</div>
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

        {/* everything in the pie chart, including catagories and values */}
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
