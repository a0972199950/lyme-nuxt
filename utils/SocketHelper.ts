import io from 'socket.io-client'
// import config from 'config'

const backendDomain = 'http://localhost:8000'
const socketPath = '/socket'

class SocketHelper {
  public socket!: SocketIOClient.Socket

  public connect() {
    const socket = io(backendDomain, {
      path: socketPath
    })

    this.socket = socket
  }

  public emit(eventName: string, eventPayload: any) {
    return this.socket.emit(eventName, eventPayload)
  }

  public on(eventName: string, eventHandler: (payload: any) => void) {
    return this.socket.on(eventName, eventHandler)
  }
}

export default new SocketHelper()
