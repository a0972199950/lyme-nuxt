import io from 'socket.io-client'

class SocketHelper {
  public socket!: SocketIOClient.Socket
  private backendDomain: string
  private socketPath: string = '/socket'

  constructor(backendDomain: string) {
    this.backendDomain = backendDomain
  }

  public connect() {
    const { backendDomain, socketPath } = this

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

export default SocketHelper
