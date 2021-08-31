// user Object.values and Object.key to solve these problems!

/*
Input: 
{
    wheels: 8,
    type: 'truck',
    goes: 'vroom',
}
*/


/*
Output:
`wheelstypegoes`
or
`goeswheelstype`
or
`wheelsgoestype`
,
etc

(we cannot control the order that these appear in without extra work, so any of these outputs are acceptable)
*/

export function makeWeirdStringFromKeys(someObject)
{
    return Object.keys(someObject).join('');
}


/*
Output:
{
    WHEELS: 8,
    TYPE: 'truck',
    GOES: 'vroom',
}
*/

export function makeMoreScreamingKeys(someObject)
{
    const screamingObject = {};
    const keys = Object.keys(someObject);

    keys.forEach((key) => screamingObject[ key.toUpperCase() ] = someObject[key]);
    return screamingObject;

    // for(let key in someObject)
    // {
    //     const upperKey = key.toUpperCase();
    //     someObject[ upperKey ] = someObject[ key ];
    //     delete someObject[key];
    // }
    // return someObject;
}

/*
Output:
[ 
    ['wheels', 8],
    ['type', 'truck'],
    ['goes', 'vroom'],
]
*/

export function makeTuples(someObject) {
    return Object.entries(someObject);
}
