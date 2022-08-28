const RenderList = ({ items, setItems, handleCheck }) => {
  return (
    <div className='lists'>
      {items.length ? (
        <>
          <header className='header'>
            <h2>To Do List</h2>
            <button className='clear-btn' onClick={() => setItems([])}>
              Clear
            </button>
          </header>
          <hr className='line' />
          <ul>
            {items.map((item) => (
              <li key={item.id} className='listItems'>
                <input
                  className='checkbox'
                  type='checkbox'
                  checked={item.checked}
                  onChange={() => handleCheck(item.id)}
                />
                <label
                  onDoubleClick={() => handleCheck(item.id)}
                  style={{
                    textDecoration: item.checked ? 'line-through' : null,
                  }}
                >
                  {item.item}
                </label>
              </li>
            ))}
          </ul>
        </>
      ) : null}
    </div>
  )
}

export default RenderList
