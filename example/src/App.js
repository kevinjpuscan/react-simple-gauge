import React from 'react'

import { SimpleGauge } from 'react-simple-gauges'


const App = () => {
  return (<div style={{margin:'10px'}}>
        <SimpleGauge width="250px" percent="89" color="rgba(255,243,12,.5)" intervals={[60,85,101]} colors={['green','rgba(255,255,40,.8)','#d73a49']} />
  </div>
  )
}

export default App
