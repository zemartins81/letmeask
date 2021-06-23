import { ReactElement, useState } from 'react'
import { useParams } from 'react-router-dom'
import logoImg from '../assets/images/logo.svg'
import { Button } from '../components/Button'
import '../styles/room.scss'
import { RoomCode } from '../components/RoomCode'
import { useAuth } from '../hooks/useAuth'

type RoomParams = {
  id: string
}

export function Room(): ReactElement {
  const { user } = useAuth()
  const params = useParams<RoomParams>()
  const roomId = params.id
  const [newQuestion, setNewQuestion] = useState('')

  async function handleSendQuestion() {
    if (newQuestion.trim() === '') return

    if (!user) {
      throw new Error('You must be logged in')
    }

    const question = {
      content: newQuestion,
      author: {
        name: user.name,
        avatar: user.avatar,
      },
      isHightLighted: false,
      isAnswered: false,
    }
  }
  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="letmeask" />
          <div>
            <RoomCode code={roomId} />
          </div>
        </div>
      </header>

      <main className="content">
        <div className="room-title">
          <h1>Sala React</h1>
          <span>4 perguntas</span>
        </div>

        <form>
          <textarea
            placeholder="O que você quer saber?"
            onChange={(event) => setNewQuestion(event.target.value)}
            value={newQuestion}
          />
          <div className="form-footer">
            <span>
              {/* eslint-disable-next-line react/button-has-type */}
              Para enviar uma pergunta, <button>Faça seu Login</button>.
            </span>
            <Button type="submit">Enviar Pergunta</Button>
          </div>
        </form>
      </main>
    </div>
  )
}
