class User {
    constructor(fullname, email, password) {
        this.fullname = fullname
        this.email = email
        this.password = password
    }
    login(email, password) {
        if(email == "consilium@gmail.com" && password == "12345"){
            console.log('Login bem sucedido!');
        }else {
            console.log('Erro de login!');
        }
    }
}

// const john = new User("John Doe", "john@email.com", "123456")

// john.login("john@email.com", "123456")
// john.login("john@email.com", "654321")

const correctUser = new User("Rafael Fortes", "consilium@gmail.com", "12345")
correctUser.login(correctUser.email, correctUser.password)
console.log(correctUser);

const wrongUser = new User("Pedro Loos", "pedrinho@gmail.com", "54321")
wrongUser.login(wrongUser.email, wrongUser.password)
console.log(wrongUser);