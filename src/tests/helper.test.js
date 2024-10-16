import { formatDate } from "../helpers/helper";
import { formatQuestion } from "../api/_DATA";

describe('formatDate', () => {
    it('Format the date', () => {
        var result = formatDate(1467166872634);
        expect(result).toEqual('9:21:AM | 6/29/2016');
    });
})

describe('formatQuestion', () => {
    it('Success save data', () => {
        var result =  formatQuestion({ optionOneText: 'a', optionTwoText: 'b', author: 'c' });
        expect(result.author).toEqual('c');
        expect(result.optionOne.text).toEqual('a');
        expect(result.optionTwo.text).toEqual('b');
    });
})