import { StrengthPipe } from "./strength.pipe";


describe('StrengthPipe', () => {
    xit('should desplay weak if strength is 5', () => {
        let pipe = new StrengthPipe();

        expect(pipe.transform(5)).toEqual('5 (week)');
    })

    it('should display strong if strength is 10', () => {
        let pipe = new StrengthPipe();

        expect(pipe.transform(10)).toEqual('10 (strong)');
    })
})