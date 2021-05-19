import React, { FC, useState } from 'react';
import { v1 as uuid } from "uuid";

const TodoInput: FC = () => {
  const [name, setName] = useState('')

  return (
    <div>
      <input type="text" />
      <button>Add</button>
    </div>
  )

}

export default TodoInput;