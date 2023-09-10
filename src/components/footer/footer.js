import React from 'react'
import PropTypes from 'prop-types'

import TaskFilter from '../task-filter'

function Footer({ todo, filter, setFilter, clearCompleted }) {
  return (
    <footer className="footer">
      <span className="todo-count">{todo} items left</span>
      <TaskFilter filter={filter} setFilter={setFilter} />
      <button className="clear-completed" onClick={clearCompleted}>
        Clear completed
      </button>
    </footer>
  )
}

Footer.defaultProps = {
  todo: '',
  filter: '',
  setFilter: () => {},
  clearCompleted: () => {},
}

Footer.propTypes = {
  todo: PropTypes.number,
  filter: PropTypes.string,
  setFilter: PropTypes.func,
  clearCompleted: PropTypes.func,
}

export default Footer
