const Button = props => {
  const {className, buttonText} = props
  return <button className={`${className}`}>{buttonText}</button>
}

const element = (
  <div>
    <h1>Social Bottons</h1>
    <div className='buttonContainer'>
      <Button buttonText='Like' className='Like-Button' />
      <Button buttonText='Comment' className='Comment-Button' />
      <Button buttonText='Share' className='Share-Botton' />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
