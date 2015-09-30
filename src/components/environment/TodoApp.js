import React from 'react';
import { World } from '../organisms/World';
import {TodoActions} from '../../actions/TodoActions'

export class TodoApp extends React.Component {
  render () {
    return (
      <div>
        Hello, <World />
      </div>
    );
  }
}