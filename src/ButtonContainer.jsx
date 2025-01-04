import CountButton from './CountButton.jsx'

export default function ButtonContainer({ children}) {
  return (
    <div className='button-container'>
      { children }
    </div>
  )
}