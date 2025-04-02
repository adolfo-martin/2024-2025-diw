import DummyService from "./dummy.service.js";

const service = new DummyService();
console.log(await service.retrieveCategories());
