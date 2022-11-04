import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
import './index.css'
import { Product } from './containers/product'
import { Icons } from './components'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <React.StrictMode>
    <div className='flex justify-center'>
      <Product
        onCancel={() => alert('canceled')}
        onContinue={() => alert('continue')}
        onTerms={() => alert('terms')}
        title='My Mock Product'
        description='Introducing our cool new product which is specifically designed for take home problem!'
        features={[
          {
            title: 'Schedule an Appointment',
            description: 'Easy scheduling of an appointment',
            Icon: Icons.SvgCalendar
          },
          {
            title: 'Use Our Tools',
            description: 'Use our automative tool',
            Icon: Icons.SvgSetting
          },
          {
            title: 'Monitor Your Progress',
            description: 'Check our monitoring tools',
            Icon: Icons.SvgChart
          }
        ]}
      />
    </div>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
