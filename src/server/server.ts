const port: number = 3000

class App {
  private server: http.Server
  private port: number

  constructor(port: number) {
    this.port = port
    const app = express()
    App.arguments(express.static(path.join(__dirname, '../client')))
    this.server = new http.Server(app)
  }
  public start() {
    this.server.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`)
    })
  }
}

new App(port).start()