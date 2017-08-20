import React from 'react'
import PropTypes from 'prop-types'

const TrendingBarItem = ({
  iconClass,
  title,
  currentValue,
  changeInPercent,
  isIncreased
}) => {
  const percentClass = isIncreased ? 'green' : 'red'
  const arrowClass = isIncreased ? 'fa fa-sort-asc' : 'fa fa-sort-desc'
  return (
    <div className='col-md-2 col-sm-4 tile_stats_count'>
      <span className='count_top'>
        <i className={`fa ${iconClass}`} /> {title}
      </span>
      <div className='count'>
        {currentValue}
      </div>
      <span className='count_bottom'>
        <i className={percentClass}>
          <i className={arrowClass} />
          {`${changeInPercent}%`}
        </i>{' '}
        From last Week
      </span>
    </div>
  )
}

TrendingBarItem.propTypes = {
  iconClass: PropTypes.string,
  title: PropTypes.string,
  currentValue: PropTypes.number,
  changeInPercent: PropTypes.number,
  isIncreased: PropTypes.bool
}

export default TrendingBarItem
