export const updateProfile = (firstname: string, lastname: string) => {
    cy.getByTestId('EditableProfileCardHeader.EditButton').click();
    cy.getByTestId('ProfileCard.firstname').clear().type(firstname);
    cy.getByTestId('ProfileCard.lastname').clear().type(lastname);
    cy.getByTestId('EditableProfileCardHeader.SaveButton').click();
};

export const resetProfile = (profileId: string) => {
    return cy.request({
        method: 'PUT',
        url: `http://localhost:8000/profile/${profileId}`,
        headers: { Authorization: 'asfsg' },
        body: {
            id: '4',
            firstname: 'test',
            lastname: 'user',
            age: 35,
            currency: 'RUB',
            country: 'Belarus',
            city: 'Tymen',
            username: 'testuser',
            avatar: 'https://image.api.playstation.com/vulcan/img/cfn/11307j6TBTzh7g71otrP_J9tbJwdxhcdmbhtkAuDqYPjhIIwkP3__rOS_rI4g76oypwQ4nvKeCcN5KkAhjF-FRmoeiwp0YjB.png?w=440&thumb=false',
        },
    });
};

declare global {
    namespace Cypress {
        interface Chainable {
            updateProfile(firstname: string, lastname: string): Chainable<void>;
            resetProfile(profileId: string): Chainable<void>;
        }
    }
}
