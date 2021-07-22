function SiteLayout(props) {
  const {
    children = <div>default children</div>,
    menu = null
  } = props

  return (
    <div className="site-container">
      <div>{menu}</div>
      <div>{children}</div>
    </div>
  )
}

export default SiteLayout
