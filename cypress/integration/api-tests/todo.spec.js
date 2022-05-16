// Get todo items
describe ('TODO API testing', ()=> {
let todoItem;
it('fetches Todo items - GET', () => {
cy.request('/todos/').as('todoRequest');
cy.get('@todoRequest').then(todos => {
expect(todos.status).to.eq(200);
assert.isArray(todos.body, 'Todos Response is an array')
});
});
});

// Delete todo item

it('deletes Todo items - DELETE', () => {
cy.request('DELETE','/todos/${todoItem}').as('todoRequest');
//Deletes todo item with id = 9
cy.get(@todoRequest').then(todos => {
expect(todos.status).to.eq(200);
assert.isString(todos.body, 'todo deleted!')
});
});

//add todo item
it('Adds todo item - POST',() => {
cy.request('POST','/todos/',{task: "run tests"}).as('todoRequest');
//Add new todo item by defining todo name
cy.get('@todoRequest').then(todos=> {
expect(todos.status).to.eq(200);
cy.wrap(todos.body).should('deep.include',{
task:'run tests',
completed:false,
});
});
});








