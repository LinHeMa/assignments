const { createRoot } = ReactDOM
const { useState, useEffect } = React
const container = document.getElementById('root')
const root = createRoot(container)

const App = () => {
  const [countersData, setCountersData] = useState([])
  const [id, setId] = useState(0)

  const generateId = () => {
    setId(id + 1)
    return id
  }

  const updateCounter = (id, updateFunction) => {
    const updatedCounters = countersData.map((data) => {
      if (data.id !== id) return data
      return { ...data, count: updateFunction(data.count) }
    })
    setCountersData(updatedCounters)
  }

  const resetCounter = (id) => updateCounter(id, (count) => 0)

  const incrementCounter = (id) => updateCounter(id, (count) => count + 1)

  const addCounter = (id) => {
    setCountersData([
      ...countersData,
      {
        count: 0,
        id: generateId()
      }
    ])
  }

  const addAllCounters = () => {
    const updatedData = countersData.map((data) => ({
      ...data,
      count: data.count + 1
    }))
    setCountersData(updatedData)
  }

  return (
    <div className='container'>
      <div className='addCounter' onClick={addCounter}>Add Counter</div>
      <div className='addAllCounters'onClick={addAllCounters}>All +1</div>
      <div>
        {countersData.map((data) => (
          <Counter
            {...data}
            resetCounter={resetCounter}
            incrementCounter={incrementCounter}
          />
        ))}
      </div>
    </div>
  )
}

const Counter = ({ count, id, resetCounter, incrementCounter }) => (
  <div className='counter'>
    <div>{count} </div>
    <div className='add' onClick={() => incrementCounter(id)}>+</div>
    <div className='reset' onClick={() => resetCounter(id)}>Reset</div>
  </div>
)

root.render(<App />)
