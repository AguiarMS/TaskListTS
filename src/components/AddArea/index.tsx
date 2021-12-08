import * as Component from './styles'
import { useState, KeyboardEvent } from 'react'

type Props = {
  onEnter: (taskName: string) => void
}

export const AddArea = ({onEnter}: Props) => {

  const [inputText, setInputText] = useState('')

  const handleKeyUp = (e: KeyboardEvent) => {
    if(e.code === 'Enter' && inputText !== ''){
      onEnter(inputText)
      setInputText('')
    }
  }

  return (
    <Component.Container>
      <div className="image">➕</div>
      <input
        type="text"
        placeholder="Adicione uma tarefa"
        value={inputText}
        onChange={e => setInputText(e.target.value)}  // oque tiver no campo input quando estiver digitando ele joga no input text

        onKeyUp={handleKeyUp}
      />
    </Component.Container>
  )
}