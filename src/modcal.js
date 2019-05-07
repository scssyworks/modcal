/**
 * ModCal is a modular calendar component designed to be customizable as per developer's need
 * @author Sachin Singh
 * @license MIT
 */

export default class ModCal {
    constructor(config) {
        this.config = {
            rangeSelection: false,
            rows: 1,
            columns: 1,
            skip: 1,
            direction: 'both',
            ...config
        };
    }
}