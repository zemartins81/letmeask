import { ReactElement } from 'react'
import copyImg from '../assets/images/copy.svg'
import '../styles/room-code.scss'

type RoomCodeProps = {
  code: string
}

export function RoomCode({ code }: RoomCodeProps): ReactElement {
  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(code)
  }

  return (
    // eslint-disable-next-line react/button-has-type
    <button className="room-code" onClick={copyRoomCodeToClipboard}>
      <div>
        <img src={copyImg} alt="Copy room code" />
      </div>
      <span>Sala: #{code}</span>
    </button>
  )
}
