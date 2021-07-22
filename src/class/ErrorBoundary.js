import { Component } from 'react'

export default class ErrorBoundary extends Component {
  state = { error: null }

  static getDerivedStateFromError(error) {
    console.log('in static function getDerivedStateFromError')
    return { error }
  }

  render() {
    const defaultFallback = <div style={{
      backgroundColor: '#ff0063',
      color: 'black'
    }}>this is the default fallback</div>

    const { error } = this.state
    const { children, fallback: Fallback = defaultFallback } = this.props

    if (error) return <Fallback error={error} />
    return children
  }
}