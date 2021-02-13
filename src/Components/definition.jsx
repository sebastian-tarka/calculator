export const ACTION_TYPE = 'action';
export const VALUE_TYPE = 'number'
export const CLEAN = 'ac';
export const CALCULATE = '=';
export const REMOVE = "rem";
export const MORE = 'rot';

export const THEMES = [{name:'dark', icon: "far fa-moon"},{name:'light',icon:"far fa-sun"}];

const definition = [

    {
        text: CLEAN,
        type: ACTION_TYPE
    },
    {
        text: REMOVE,
        type: ACTION_TYPE,
        iconCss: 'fas fa-eraser'
    },
    {
        text: '%',
        type: ACTION_TYPE
    },
    {
        text: '/',
        type: ACTION_TYPE
    },
    {
        text: '7',
        type: VALUE_TYPE,
        values: 7
    },
    {
        text: '8',
        type: VALUE_TYPE,
        values: 8
    },
    {
        text: '9',
        type: VALUE_TYPE,
        values: 9
    },
    {
        text: '*',
        type: ACTION_TYPE
    },
    {
        text: '4',
        type: VALUE_TYPE,
        values: 4
    },
    {
        text: '5',
        type: VALUE_TYPE,
        values: 5
    },
    {
        text: '6',
        type: VALUE_TYPE,
        values: 6
    },
    {
        text: '-',
        type: ACTION_TYPE
    },
    {
        text: '1',
        type: VALUE_TYPE,
        values: 1
    },
    {
        text: '2',
        type: VALUE_TYPE,
        values: 2
    },
    {
        text: '3',
        type: VALUE_TYPE,
        values: 3
    },
    {
        text: '+',
        type: ACTION_TYPE
    },
    {
        text: MORE,
        type: ACTION_TYPE,
        iconCss: 'fas fa-angle-double-right'
    },
    {
        text: '0',
        type: VALUE_TYPE,
        values: 0
    },
    {
        text: '.',
        type: ACTION_TYPE
    },

    {
        text: '=',
        type: ACTION_TYPE,
        style: {
            light: {},
            dark:{
                backgroundColor: 'orange',
                borderRadius:'25px',
                color: 'black'
            }

        }
    },

];

export default definition;