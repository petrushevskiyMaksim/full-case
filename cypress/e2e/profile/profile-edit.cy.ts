import { User } from '../../../src/entities/User/model/types/user';

let profileId = '';

describe('Пользователь заходит на страницу профиля', () => {
    beforeEach(() => {
        cy.visit('');
        cy.login().then((data: User) => {
            profileId = data.id;
            cy.visit('profile/' + profileId);
        });
    });

    afterEach(() => {
        cy.resetProfile(profileId);
    });

    it('И профиль успешно загружается', () => {
        cy.getByTestId('ProfileCard.firstname').should('have.value', 'test');
    });

    it('И редактирует профиль', () => {
        const newName = 'new';
        const newLasname = 'lastname';

        cy.updateProfile(newName, newLasname);
        cy.getByTestId('ProfileCard.firstname').should('have.value', newName);
        cy.getByTestId('ProfileCard.lastname').should('have.value', newLasname);
    });
});
