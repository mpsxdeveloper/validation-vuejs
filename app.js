const { createApp } = Vue

const app = createApp({
    data() {
        return {
            name: '',
            email: '',
            cpf: '',
            password: '',
            confirm: '',
            emailPattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            errors: [],
            errorMessages: ['Nome é obrigatório', 'Nome deve ter entre 5 e 30 caracteres',
                'E-mail é obrigatório', 'Formato de e-mail incorreto', 'CPF é obrigatório',
                'CPF deve ter 11 números, sem espaços, letras ou símbolos', 'Senha deve ter no mínimo 8 caracteres',
                'Confirmação de senha deve ter no mínimo 8 caracteres', 'As senhas informadas não são iguais'
            ]
        }
    },
    methods: {
        validate() {
            this.errors = []
            if(this.name === '') {
                if(!this.errors.includes(this.errorMessages[0])) {
                    this.errors.push(this.errorMessages[0])
                }
            }
            if(this.name !== '' && this.name.length < 5 || this.name.length > 30) {
                if(!this.errors.includes(this.errorMessages[1])) {
                    this.errors.push(this.errorMessages[1])
                }
            }
            if(this.email === '') {
                if(!this.errors.includes(this.errorMessages[2])) {
                    this.errors.push(this.errorMessages[2])
                }
            }
            if(this.email !== '' && !this.emailPattern.test(this.email)) {
                if(!this.errors.includes(this.errorMessages[3])) {
                    this.errors.push(this.errorMessages[3])
                }
            }
            if(this.cpf === '' || this.cpf.length !== 11) {
                if(!this.errors.includes(this.errorMessages[4])) {
                    this.errors.push(this.errorMessages[4])
                }
            }
            if(this.cpf.length === 11) {
                let hasErrors = false
                for(let i = 0; i < this.cpf.length; i++) {
                    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
                    if(!numbers.includes(this.cpf.charAt(i))) {
                        hasErrors = true
                        break
                    }
                }
                if(hasErrors && !this.errors.includes(this.errorMessages[5])) {
                    this.errors.push(this.errorMessages[5])
                }
            }
            if(this.password === '' || this.password.length < 8) {
                if(!this.errors.includes(this.errorMessages[6])) {
                    this.errors.push(this.errorMessages[6])
                }
            }
            if(this.confirm === '' || this.confirm.length < 8) {
                if(!this.errors.includes(this.errorMessages[7])) {
                    this.errors.push(this.errorMessages[7])
                }
            }
            if(this.password.length > 7 && this.confirm.length > 7 && this.password !== this.confirm) {
                if(!this.errors.includes(this.errorMessages[8])) {
                    this.errors.push(this.errorMessages[8])
                }
            }
            if(this.errors.length === 0) {                
                this.$refs.messages.classList.add("success")
                this.errors.push("Formulário enviado com sucesso")
                this.name = this.email = this.cpf = this.password = this.confirm = ''
            }
        }
    }
})
  
app.mount('#app')