import test from 'ava'
import render from 'react-test-renderer'
import TrendingBar from '../trendingBar'

const trendData = [
  {
    id: 'ghreoi',
    iconClass: 'fa-user',
    title: 'Total Users',
    currentValue: 2500,
    changeInPercent: 4,
    isIncreased: false
  },
  {
    id: 'myjytt',
    iconClass: 'fa-clock-o',
    title: 'Total Time',
    currentValue: 150,
    changeInPercent: 10,
    isIncreased: true
  },
  {
    id: 'grehtr',
    iconClass: 'fa-user',
    title: 'Total Males',
    currentValue: 25000,
    changeInPercent: 90,
    isIncreased: true
  },
  {
    id: '5o4i',
    iconClass: 'fa-user',
    title: 'Total Females',
    currentValue: 992,
    changeInPercent: 87.5,
    isIncreased: false
  }
]

test('[TrendingBar] should render a TrendingBar', t => {
  const tree = render.create(<TrendingBar trendData={trendData} />).toJSON()
  t.snapshot(tree)
})
