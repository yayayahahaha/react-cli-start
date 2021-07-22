function SiteLayout(props) {
  const {
    children = <div>default children</div>,
    menu: Menu = <p>default Menu Component</p>
  } = props

  return (
    <div className="site-container">
      <div>{Menu}</div>
      <div>{children}</div>
    </div>
  )
}

export default SiteLayout
