import { useState } from 'react';
import TodoFilter from './TodoFilter'
import { createPortal } from 'react-dom';
import Modal from '../ui/Modal';
import TodoForm from './TodoForm';

// 함수형 컴포넌트(TodoHeader)
const TodoHeader = ({ onAdd }) => {
  const [openModal, open] = useState(false);
  const closeModal = () => open(false);
  
  return (
    <div className="flex items-center justify-between mb-2" id="task-control">
    <button 
      className="animate-bounce-slow px-6 py-2 font-semibold text-gray-100 bg-gray-800 border-none rounded cursor-pointer"
      data-cy="add-todo-button"
      onClick={() => open(true)}
      >Add Todo
    </button>
    {/* Modal 호출 부분 */}
    {openModal && createPortal(
      <Modal onClose={closeModal}>
        <TodoForm onAdd={onAdd} onClose={closeModal}/>
      </Modal>, document.body)}
    <TodoFilter />
    </div> 
  )
}

export default TodoHeader;