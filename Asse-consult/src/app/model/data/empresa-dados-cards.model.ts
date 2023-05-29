const timeElapsed = Date.now();
const today = new Date(timeElapsed);

var cards_agendamentos = [
    {
        'data': today.toDateString(),
        'nome':'JTK',
        'cnpj':'45.835.451/0001-87'
    },
    {
        'data': today.toDateString(),
        'nome':'Gas Company',
        'cnpj':'74.189.516/0001-62'
    },
    {
        'data': today.toDateString(),
        'nome':'Distribuidora Future',
        'cnpj':'53.074.049/0001-55'
    }
]



export default cards_agendamentos;