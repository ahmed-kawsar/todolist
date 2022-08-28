import { FaPlus } from 'react-icons/fa'

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className='addForm'>
      <input
        type='text'
        placeholder='Add Task'
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button type='submit' className='plus-btn'>
        <FaPlus className='plus-icon' />
      </button>
    </form>
  )
}

export default AddItem
