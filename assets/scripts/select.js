export function select() {
    const selectElement = document.getElementById('categoria');

    if (!selectElement) {
        console.warn('Select "categoria" não encontrado.');
        return;
    }

    selectElement.addEventListener('change', function () {
        const categoriaSelecionada = this.value;
        const itens = document.querySelectorAll('.menu-item');

        itens.forEach(item => {
            if (categoriaSelecionada === 'all') {
                item.style.display = 'block';
            } else {
                const pertenceCategoria = item.classList.contains(categoriaSelecionada);
                item.style.display = pertenceCategoria ? 'block' : 'none';
            }
        });
    });
}