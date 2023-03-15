import { useState } from "react"

const Form = () => {
    const [altura, setAltura] = useState('')
    const [peso, setPeso] = useState('')

    const retornaImc = () => {
        const imc = peso / (altura * altura)

        if (imc < 18.5) {
            return (
                <p>{imc.toFixed(2)} - Baixo peso</p>
            )
        } else if (imc >= 18.6 && imc <= 24.9) {
            return (
                <p>{imc.toFixed(2)} - Peso normal</p>
            )
        } else if (imc >= 25 && imc <= 29.9) {
            return (
                <p>{imc.toFixed(2)} - Sobrepeso</p>
            )
        } else if (imc >= 30 && imc <= 34.9) {
            return (
                <p>${imc.toFixed(2)} - Obesidade grau I</p>
            )
        } else if (imc >= 35 && imc <= 39.9) {
            return (
                <p>{imc.toFixed(2)} - Obesidade grau II</p>
            )
        } else if (imc >= 40) {
            return (
                <p>{imc.toFixed(2)} - Obesidade grau III</p>
            )
        }
    }
        
    return (
        <>
            <h1>Formulário</h1>
            <form>
                <div>
                    <h5>Informe seu peso (kg)</h5>
                    <input type="number" placeholder="0.00" onChange={e => setAltura(Number(e.target.value))} />
                </div>
                <div>
                    <h5>Informe sua altura (metro e cm)</h5>
                    <input type="number" placeholder="00kg" onChange={e => setPeso(Number(e.target.value))} />
                </div>
            </form>
            <div>
                <h5>Resuldado</h5>
                {retornaImc()}
            </div>
        </>
    )
}

export default Form
