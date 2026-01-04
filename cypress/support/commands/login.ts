import { USER_LOCALSTORAGE_KEY } from '../../../src/shared/const/localStorage';
import { User } from '../../../src/entities/User/model/types/user';

export const login = (
    username: string = 'testuser',
    password: string = '123'
) => {
    cy.request({
        method: 'POST',
        url: `http://localhost:8000/login`,
        body: {
            username,
            password,
        },
    }).then(({ body }: { body: User }) => {
        window.localStorage.setItem(
            USER_LOCALSTORAGE_KEY,
            JSON.stringify(body)
        );
    });
};
