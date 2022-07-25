const lessonTestUnitaire = require('../lessonTestUnitaire');

describe('palindrom ', () => {
    it('should retrieve a sentence', () => {
        expect(lessonTestUnitaire.sentence.length).toBeGreaterThan(0);
    });
    it('should have a length of 11 letters', () => {
        expect(lessonTestUnitaire.sentence.length).toEqual(11);
    })
    it("il y a un 'l' dans la phrase", () => {
        expect(lessonTestUnitaire.sentence.includes('l')).toBeTruthy();
    })
});

