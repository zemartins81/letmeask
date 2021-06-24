import { ReactElement } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import logoImg from '../assets/images/logo.svg'
import { Button } from '../components/Button'
import '../styles/room.scss'
import { RoomCode } from '../components/RoomCode'
import { database } from '../services/firebase'
import { Question } from '../components/Question'
import { UseRoom } from '../hooks/useRoom'
import deleteImg from '../assets/images/delete.svg'

type RoomParams = {
  id: string
}

export function AdminRoom(): ReactElement {
  const params = useParams<RoomParams>()
  const roomId = params.id
  const { title, questions } = UseRoom(roomId)
  const history = useHistory()

  async function handleEndRoom() {
    database.ref(`rooms/${roomId}`).update({
      endedAt: new Date(),
    })

    history.push('/')
  }

  async function handleDeleteQuestion(questionId: string) {
    // eslint-disable-next-line no-alert
    if (window.confirm('Tem certeza que você deseja excluir esta pergunta?')) {
      await database.ref(`rooms/${roomId}/questions/${questionId}`).remove()
    }
  }

  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="letmeask" />
          <div>
            <RoomCode code={roomId} />
            <Button isOutlined onClick={handleEndRoom}>
              Encerrar Sala
            </Button>
          </div>
        </div>
      </header>

      <main className="content">
        <div className="room-title">
          <h1>Sala {title}</h1>
          {questions.length > 0 && <span>{questions.length} perguntas</span>}
        </div>

        <div className="question-list">
          {questions.map(({ author, content, id }) => {
            return (
              <Question key={id} content={content} author={author}>
                <button type="button" onClick={() => handleDeleteQuestion(id)}>
                  <img src={deleteImg} alt="Remover Pergunta" />
                </button>
              </Question>
            )
          })}
        </div>
      </main>
    </div>
  )
}
