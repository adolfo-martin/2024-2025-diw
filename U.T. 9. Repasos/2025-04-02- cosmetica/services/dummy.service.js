export default class DummyService {
    async retrieveCategories() {
        const url = 'https://dummyjson.com/products/categories/?delay=2000';
        const response = await fetch(url);
        const data = await response.json();
        return data.map(category => ({ id: category.slug, name: category.name }));
    }

    async retrieveProductsByCategory(categoryId) {
        const url = `https://dummyjson.com/products/category/${categoryId}/?delay=2000`;
        const response = await fetch(url);
        const data = await response.json();
        return data.products;
    }
}