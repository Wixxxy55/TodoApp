import React from 'react'
import PropTypes from 'prop-types'

import Task from '../task'

function TodoList({ items, onDeleted, onEdit, onToggleDone }) {
  const elements = items.map((item) => {
    const { id, ...itemProps } = item

    return (
      <Task
        key={id}
        {...itemProps}
        onDeleted={() => onDeleted(id)}
        onToggleDone={() => onToggleDone(id)}
        onEdit={(newLabel) => onEdit(id, newLabel)}
      />
    )
  })

  return <ul className="todo-list">{elements}</ul>
}

TodoList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDeleted: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onToggleDone: PropTypes.func.isRequired,
}

TodoList.defaultProps = {
  items: '',
  onDeleted: () => {},
  onEdit: () => {},
  onToggleDone: () => {},
}
export default TodoList
