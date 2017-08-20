import React from 'react'
import TrendingBarItem from './trendingBarItem'

const TrendingBar = ({ trendData }) => {
  const trendingBarItems = trendData.map(data =>
    <TrendingBarItem
      key={data.id}
      iconClass={data.iconClass}
      title={data.title}
      currentValue={data.currentValue}
      changeInPercent={data.changeInPercent}
      isIncreased={data.isIncreased}
    />
  )

  return (
    <div className='row tile_count'>
      {trendingBarItems}
    </div>
  )
}

export default TrendingBar
