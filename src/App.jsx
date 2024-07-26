import { useState } from 'react'
import TodoBody from './components/todos/TodoBody'
import TodoHeader from './components/todos/TodoHeader'
import DefaultLayout from './layouts/DefaultLayout'

const dummyTodos = [
  {
    id: 1,
    title: 'React 공부',
    summary: 'React를 공부한다.',
    category: 'TODO',
  },
  {
    id: 2,
    title: '점심 먹기',
    summary: '점심을 먹는다.',
    category: 'PROGRESS',
  },
  {
    id: 3,
    title: '커피 마시기',
    summary: '커피를 마신다.',
    category: 'DONE',
  }
]

function App() {

  const [todos, setTodos] = useState(dummyTodos);

  // Todo 등록 기능, 파라미터로 새롭게 추가할 Todo 객체를 받음
  const addTodoHandler = ({ title, summary, category }) => {

    // id값을 추가해서 Todo 등록
    const newTodo = {
      id: self.crypto.randomUUID(), // Web Crypto API
      title,
      summary,
      category
    }

    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
  }

  return (
    <>
      <DefaultLayout>
        <header>
          <div className="flex justify-center">
            <a to="/" className='flex'>
              <h1 className='animate-bounce-slow py-8 text-red-200 max-w-max text-7xl'>todos</h1>
            </a>
          </div>
        </header>
        <section className="max-w-xl m-4 mx-auto">
          {/* onAdd라는 이름으로 addTodoHandler 함수를 props로 내려줌 */}
          <TodoHeader onAdd={addTodoHandler}/>
          <TodoBody todos={todos}/>
        </section>
      </DefaultLayout> 
    </>
  )
}

export default App
