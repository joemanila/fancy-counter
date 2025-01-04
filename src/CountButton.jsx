import { PlusIcon, MinusIcon } from "@radix-ui/react-icons";

export default function CountButton({ type, setCount, locked }) {
    const countLimit = 5
    const handleClick = (event) => {
      setCount(prev => {
        if (type === 'minus') {
          const newCount = prev - 1
          if (newCount < 0) {
            return 0      
        }
          return newCount
      }
       else {
        const newCount = prev + 1
        if (newCount > countLimit) {
          return countLimit
        }
        return newCount
      }
    })
    event.currentTarget.blur()
    }

  return (
    <button 
    disabled={locked}
    onClick={handleClick}
    className='count-btn'>
        {type === 'minus' && <MinusIcon className="count-btn-icon" />}
        {type === 'plus' && <PlusIcon className="count-btn-icon" />}
    </button>
    )
}