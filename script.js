/*1-funcao adicionar*/
var c = 0;
function adicionar() {
    var tarefa = document.getElementById('txt').value
    var res = document.getElementById('resultado')
    if (tarefa == '') {
        alert('Favor inserir tarefa')
    }
    else {

        //criar elementos
        var card = document.createElement('span')
        var editar = document.createElement('button')
        var deletar = document.createElement('button')
        var espaco = document.createElement('br')
        var container=document.createElement('div')
        //adicionar classes para estilo
        editar.className = "editar"
        deletar.className = "deletar"
        card.className = "card"
        //adiconarid
        editar.id = `editar${c}`
        deletar.id = `deletar${c}`
        card.id = `card${c}`
        container.id=`container${c}`
        /*Para mobile*/
        const mediaQuery = window.matchMedia('(max-width: 992px)')
        if (mediaQuery.matches) {
            //inserir texto
            card.innerText = tarefa
            editar.innerHTML = "Editar"
            deletar.innerHTML = "Excluir"
            //colocar na div
            res.appendChild(container)
            container.appendChild(editar)
            container.appendChild(deletar)
            container.appendChild(card)
            container.appendChild(espaco)
        }
        else {
            //inserir texto
            card.innerText = tarefa
            editar.innerHTML = '&#x1F4DD'
            deletar.innerHTML = "&#10006"
            //colocar na div
            res.appendChild(container)
            container.appendChild(card)
            container.appendChild(editar)
            container.appendChild(deletar)
            container.appendChild(espaco)
        }
        //inserir funcoes nos bottoes
        
        document.getElementById(`editar${c}`).setAttribute('onClick', 'editar(this.id)')
        document.getElementById(`deletar${c}`).setAttribute('onClick', 'deletar(this.id)')
        c++
    }
}
/*2-funcao deletar*/
function deletar(e) {
    var num = (e.charAt(e.length-1));
    document.getElementById(`container${num}`).remove();
}
/*3-funcao editar*/
function editar(e) {
    var num = (e.charAt(e.length-1));
    document.getElementById(`card${num}`).innerText=promptTarefa();
}

function promptTarefa() {
    return prompt("Edite sua tarefa");
}