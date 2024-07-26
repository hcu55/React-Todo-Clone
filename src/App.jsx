import TodoBody from './components/todos/TodoBody'
import TodoHeader from './components/todos/TodoHeader'
import DefaultLayout from './layouts/DefaultLayout'

function App() {

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
          <TodoHeader />
          <TodoBody />
        </section>
      </DefaultLayout> 
    </>
  )
}

export default App
