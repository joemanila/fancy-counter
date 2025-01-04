export default function Title({ locked}) {
  return (
      
      <h1 className='title'>{
        locked ? <span>You've reached the limit!</span> : 'Fancy Counter'
      }</h1>
  )
}

