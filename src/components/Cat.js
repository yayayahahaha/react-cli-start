function Cat(props) {
  const { name, image, style: imageStyle } = props
  console.log(`rendering ${name}`)
  return (
    <>
      <p>my name is {name}</p>
      {image ? <img src={image} alt={name} style={imageStyle} /> : <span>no image!</span>}
    </>
  )
}

// export default memo(Cat)
export default Cat
