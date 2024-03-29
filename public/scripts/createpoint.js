function populateUFs () {
    const ufSelect = document.querySelector("select[name=state]")
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then(res => res.json())
    .then (states => {
        for ( const state of states ) {
            ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
        }
    })
}

populateUFs()

function getCities (event) {
    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("input[name=state]")
    const ufValue = event.target.value
    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text
    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`
    citySelect.innerHTML = "<option>selecione a cidade</option>"
    citySelect.disabled = true
    fetch(url)
    .then(res => res.json())
    .then (cities => {
        for (const city of cities) {
            citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
        }
    citySelect.disabled = false
    })
}

document
    .querySelector("select[name=state]")
    .addEventListener("change", getCities)

const collectedItems =  document.querySelector("input[name=items]")    
const itemsToCollect = document.querySelectorAll("div li")
for (const item of itemsToCollect) {
    item.addEventListener("click", handleSelectedItem)
}

let selectedItems = []

function handleSelectedItem(event) {
    const itemLi = event.target
    const itemId = itemLi.dataset.id
    itemLi.classList.toggle("selected")
    
    const alreadySelected = selectedItems.findIndex(item => {
        const itemFound = item == itemId //t ou f
        return itemFound
    })

    if(alreadySelected >= 0) {
        const filteredItems = selectedItems.filter(item => {
            const itemIsDiferent = item != itemId
            return itemIsDiferent
        })
        selectedItems = filteredItems
    } else {
        selectedItems.push(itemId)
    }
    
    collectedItems.value = selectedItems
}