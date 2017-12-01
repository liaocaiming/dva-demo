import React from 'react'

import { connect } from 'dva'

class Example extends React.Component {

  constructor(props) {
    super(props)
    this.getData = this.getData.bind(this)
  }

  getData() {
    const { dispatch } = this.props
    dispatch({ type: 'example/getCartData', payload: { name: 'liaocaiming' } })
  }

  render() {
    return (
      <div>fdafafadadfa</div>
    )
  }

  componentDidMount() {
    this.getData()
  }
}

export default connect((state) => { return { example: state.example } })(Example)