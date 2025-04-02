import DummyService from "../services/dummy.service.js";

document.addEventListener('DOMContentLoaded', setup);

async function setup() {
    const service = new DummyService();
    const categories = await service.retrieveCategories();
    renderCategoriesWithinMenu(categories);
}

function renderCategoriesWithinMenu(categories) {
    const nUl = document.querySelector('#tUlCategories');

    categories.forEach(category => {
        const nLi = document.createElement('li');
        nUl.appendChild(nLi);
        nLi.textContent = category.name;
        nLi.setAttribute('data-category', category.id);
        nLi.addEventListener('click', showCategoryBackground);
    });
}

async function showCategoryBackground(e) {
    const categoryId = e.target.dataset.category;
    const service = new DummyService();
    const imageUrl = (await service.retrieveProductsByCategory(categoryId))[0].images[0];
    const nMain = document.querySelector('#tMainCategories');
    nMain.style.backgroundImage = `url(${imageUrl})`;
}