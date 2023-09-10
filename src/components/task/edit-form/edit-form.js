import React, { Component } from 'react'

import './edit-form.css'

export default class EditForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editedText: this.props.initialValue,
    }
  }

  handleChange = (event) => {
    this.setState({ editedText: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { onSave } = this.props
    const { editedText } = this.state
    onSave(editedText)
  }

  render() {
    const { editedText } = this.state

    return (
      <form onSubmit={this.handleSubmit}>
        <input className="edit" type="text" value={editedText} onChange={this.handleChange} placeholder="" />
      </form>
    )
  }
}
