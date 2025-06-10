export default function select() {
    document.getElementById('categoria').addEventListener('change', () => {
        const categoriaSelecionada = this.value;
        const itens = document.querySelectorAll('.menu-item')

        itens.forEach(item => {
            if (categoriaSelecionada === 'all') {
                item.style.display = 'block'
            } else {
                item.style.display = item.classList.contains(categoriaSelecionada)
            }
        })
    })
}