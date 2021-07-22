import ErrorBoundary from '../class/ErrorBoundary'
import ErrorScreen from './ErrorScreen'
// import BreakThings from './BreakThings'

// import SiteLayout from './SiteLayout'
import Agreement from './Agreement'

import { useState, lazy, Suspense } from 'react'

const SiteLayout = lazy(() => import('./SiteLayout'))

function SuspenseTest() {
  const menu = <div>TODO: build Menu</div>

  const [answer, setAnswer] = useState(false)

  if (!answer) {
    return <Agreement onAgree={setAnswer} />
  }

  const ChildrenComponent = <>
    <b>but what the heck is CALLOUT?</b>
    <h1>Content</h1>
    <ErrorBoundary fallback={ErrorScreen}>
      <p>This is the main part of the example layout</p>
      {/*<BreakThings />*/}
    </ErrorBoundary>
  </>
  const suspenseStyle = {
    width: '100vw',
    height: '100vh',
    backgroundColor: 'black'
  }

  return (
    <ErrorBoundary>
      <Suspense fallback={<div style={suspenseStyle}>now suspense</div>}>
        <SiteLayout {...{menu}}>
          {ChildrenComponent}
        </SiteLayout>
      </Suspense>
    </ErrorBoundary>
  )
}

export default SuspenseTest
