import React, { Component } from 'react'

import Header from '../header'
import TodoList from '../todo-list'
import Footer from '../footer'
import { all, active, completed } from '../../constants'

export default class TodoApp extends Component {
  maxId = 1

  state = {
    tasks: [],
    filter: all,
  }

  createTodoItem(label) {
    return {
      label,
      completed: false,
      date: new Date(),
      id: this.maxId++,
    }
  }

  onItemAdded = (label) => {
    this.setState((state) => {
      const item = this.createItem(label)
      return { items: [...state.items, item] }
    })
  }

  deleteItem = (id) => {
    this.setState(({ tasks }) => {
      const idx = tasks.findIndex((el) => el.id === id)
      const newArray = [...tasks.slice(0, idx), ...tasks.slice(idx + 1)]
      return {
        tasks: newArray,
      }
    })
  }

  onEdit = (id, newLabel) => {
    this.setState(({ tasks }) => {
      const idx = tasks.findIndex((el) => el.id === id)
      const updatedTasks = [...tasks]
      updatedTasks[idx].label = newLabel
      return { tasks: updatedTasks }
    })
  }

  onToggleDone = (id) => {
    this.setState(({ tasks }) => {
      const idx = tasks.findIndex((el) => el.id === id)

      const oldItem = tasks[idx]

      const newItem = { ...oldItem, completed: !oldItem.completed }

      const newArray = [...tasks.slice(0, idx), newItem, ...tasks.slice(idx + 1)]
      return {
        tasks: newArray,
      }
    })
  }

  addTask = (text) => {
    if (text.trim() === '') {
      return
    }
    const newTask = this.createTodoItem(text)
    this.setState(({ tasks }) => {
      const newArr = [...tasks, newTask]
      return {
        tasks: newArr,
      }
    })
  }

  onFilter = (filter) => {
    switch (filter) {
      case all:
        return this.state.tasks
      case active:
        return this.state.tasks.filter((item) => !item.completed)
      case completed:
        return this.state.tasks.filter((item) => item.completed)
      default:
        return this.state.tasks
    }
  }

  setFilter = (filter) => {
    this.setState({ filter })
  }

  clearCompleted = () => {
    this.setState(({ tasks }) => {
      const updatedTasks = tasks.filter((task) => !task.completed)
      return { tasks: updatedTasks }
    })
  }

  render() {
    const { tasks, filter } = this.state
    const doneFilter = tasks.filter((el) => el.completed).length
    const doneCount = tasks.length - doneFilter
    const filteredTasks = this.onFilter(filter)
    return (
      <div className="todoapp">
        <Header onItemAdded={this.addTask} />
        <TodoList
          items={filteredTasks}
          onDeleted={this.deleteItem}
          onEdit={this.onEdit}
          onToggleDone={this.onToggleDone}
        />
        <Footer
          todo={doneCount}
          filter={filter}
          setFilter={this.setFilter}
          onFilter={this.onFilter}
          clearCompleted={this.clearCompleted}
        />
      </div>
    )
  }
}
