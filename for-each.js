// Use the forEach method to solve these problems! All functions should return a NEW array, without mutating the old array.

/*
Input:
[
    { name: 'spot', type: 'dog' },
    { name: 'rover', type: 'dog' },
    { name: 'jumpy', type: 'frog' },
    { name: 'einstein', type: 'cat' },
]
*/

/*
Output:

['spot', 'rover', 'jumpy', 'einstein']
*/

export function makeArrayOfNames(arr)
{
    const arrayOfNames = [];
    arr.forEach(({ name }) =>
    {
        arrayOfNames.push(name);
        return arrayOfNames;
    });
    return arrayOfNames;
}

/*
Output:

['cat', 'frog', 'dog', 'dog']
*/

export function makeReversedArrayOfTypes(arr)
{
    const reversedArrayOfTypes = [];
    arr.forEach(({ type }) =>
    {
        reversedArrayOfTypes.push(type);
        return reversedArrayOfTypes;
    });
    return reversedArrayOfTypes.reverse();
}

/*
Output:

[
    { nombre: 'spot', tipo: 'dog' },
    { nombre: 'rover', tipo: 'dog' },
    { nombre: 'jumpy', tipo: 'frog' },
    { nombre: 'einstein', tipo: 'cat' },
]
*/

export function makeSpanishLanguageArray(arr)
{
    const spanishLanguageArray = [];
    arr.forEach(({ name, type }) =>
    {
        spanishLanguageArray.push({ nombre: name, tipo: type });
        return spanishLanguageArray;
    });
    return spanishLanguageArray;
}

