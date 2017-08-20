import test from 'ava'
import render from 'react-test-renderer'
import TrendingBarItem from '../trendingBarItem'

const props = {
  iconClass: 'fa-user',
  title: 'Total Users',
  currentValue: 2500,
  changeInPercent: 4,
  isIncreased: false
}

test('[TrendingBarItem] should render a TrendingBarItem', t => {
  const tree = render.create(<TrendingBarItem {...props} />).toJSON()
  t.snapshot(tree)
})
