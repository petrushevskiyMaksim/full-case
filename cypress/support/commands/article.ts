import { Article } from '../../../src/entities/Article';

const defaultArticle = {
    title: 'TESTING ARTICLE',
    subtitle: 'Что нового в JS за 2025 год?',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvgeE-J5qyKZexjL5uIVR_zsz4WVjeB6_O7w&s',
    views: 1022,
    createAt: '17.08.2025',
    userId: '1',
    type: ['IT'],
    blocks: [],
};

export const createArticle = (article?: Article) => {
    return cy
        .request({
            method: 'POST',
            url: `http://localhost:8000/articles`,
            headers: { Authorization: 'asfsg' },
            body: article ?? defaultArticle,
        })
        .then((resp: Cypress.Response<Article>) => {
            // const response = resp as Cypress.Response<typeof article>;
            return resp.body;
        });
};

export const removeArticle = (articleId: string) => {
    return cy.request({
        method: 'DELETE',
        url: `http://localhost:8000/articles/${articleId}`,
        headers: { Authorization: 'asfsg' },
    });
};

declare global {
    namespace Cypress {
        interface Chainable {
            createArticle(article?: Article): Chainable<Article>;
            removeArticle(articleId: string): Chainable<void>;
        }
    }
}
