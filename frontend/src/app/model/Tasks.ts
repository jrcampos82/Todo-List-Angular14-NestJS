export class Tasks {
  id: string
  name: string
  status: string
  criadoEm: Date
  dono: string

  constructor(
    id: string,
    name: string,
    status: string,
    criadoEm: Date,
    dono: string,
  ) {
    this.id = id
    this.name = name
    this.status = status
    this.criadoEm = criadoEm
    this.dono = dono
  }
}
