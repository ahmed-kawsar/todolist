import { useEffect } from 'react'
import { useState } from 'react'
import AddItem from './AddItem'
import RenderList from './RenderList'

function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem('tasks')) || []
  )
  const [newItem, setNewItem] = useState('')

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(items))
  }, [items])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!newItem) return
    const id = items.length ? items[items.length - 1].id + 1 : 1
    const myNewItem = { id, checked: false, item: newItem }
    const listItem = [...items, myNewItem]
    setItems(listItem)
    setNewItem('')
  }

  const handleCheck = (id) => {
    const listItem = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    )
    setItems(listItem)
  }

  return (
    <div className='App'>
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <RenderList items={items} setItems={setItems} handleCheck={handleCheck} />
    </div>
  )
}

export default App
