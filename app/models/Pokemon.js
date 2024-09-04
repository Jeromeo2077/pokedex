export class Pokemon {
  constructor(data) {
    this.name = data.name
    this.nickname = data.nickname
    this.img = data.img
    this.backImg = data.backImg
    this.weight = data.weight
    this.height = data.height
    this.health = data.health
    this.defense = data.defense
    this.attack = data.attack
    this.speed = data.speed
    this.creatorID = data.creatorID
  }
}