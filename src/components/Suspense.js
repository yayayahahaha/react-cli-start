import ErrorBoundary from '../class/ErrorBoundary'
import ErrorScreen from './ErrorScreen'
import BreakThings from './BreakThings'

import SiteLayout from './SiteLayout'

function Suspense() {
  const menu = <p>Menu</p>

  return (
    <SiteLayout {...{menu}}>
      <>
        <b>but what the heck is CALLOUT?</b>
        <h1>Content</h1>
        <ErrorBoundary fallback={ErrorScreen}>
          <p>This is the main part of the example layout</p>
          <BreakThings />
        </ErrorBoundary>
      </>
    </SiteLayout>
  )
}

export default Suspense
