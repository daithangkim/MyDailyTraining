class DiaryInput {
    constructor(date, trainingType, trainingIntensity, goalsAchieved) {
        this.date = date
        this.trainingType = trainingType
        this.trainingIntensity = trainingIntensity
        this.goalsAchieved = goalsAchieved
    }
}

class User {
    constructor(name, email, password, age, address) {
        this.name = name
        this.email = email
        this.password = password
        this.age = age
        this.address = address
        this.diaryList = []
    }
}

const userDataBase = []

export { User, userDataBase }
