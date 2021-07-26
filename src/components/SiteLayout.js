const createResource = function(promise) {
  let error = null
  let response = null
  let isThen = false
  promise.then(r => { response = r; isThen = true }).catch(e => { error = e })
  return {
    read: function() {
      console.count('in read function') // have no idea why it triggered third-times

      if (error) throw error
      if (isThen) return response
      throw promise
    }
  }
}
const doPromise = () => new Promise(resolve => setTimeout(() => resolve(), 3000))

const readInfo = createResource(doPromise())

function Status() {
  const status = readInfo.read()
  return <p>this is status {status}</p>
}

function SiteLayout(props) {
  const {
    children = <div>default children</div>,
    menu: Menu = <p>default Menu Component</p>
  } = props

  return (
    <div className="site-container">
      <Status></Status>
      <div>{Menu}</div>
      <div>{children}</div>
    </div>
  )
}

export default SiteLayout
