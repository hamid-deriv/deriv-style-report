/* eslint-disable max-len */
const specificity = `
**Specificity** is the algorithm used by browsers to determine the CSS declaration that is the most relevant to an element, which in turn, determines the property value to apply to the element.
If there are two or more declarations providing different property values for the same element, the declaration value in the style block having the matching selector with the greatest algorithmic weight gets applied.
The specificity algorithm is basically a three-column value of three categories or weights - ID, CLASS, and TYPE. The commas are there to remind us that this isn’t really a *base 10* system.

### ID column
Includes only ID selectors, such as \`#example\`. For each ID in a matching selector, add 1-0-0 to the weight value.

### CLASS column
Includes class selectors, such as \`.myClass\`, attribute selectors like \`[type="radio"]\` and \`[lang|="fr"]\`, and pseudo-classes, such as \`:hover\`, \`:nth-of-type(3n)\`, and \`:required\`. For each class, attribute selector, or pseudo-class in a matching selector, add 0-1-0 to the weight value.

### TYPE column
Includes type selectors, such as \`p\`, \`h1\`, and \`td\`, and pseudo-elements like \`::before\`, \`::placeholder\`, and all other selectors with double-colon notation. For each type or pseudo-element in a matching selector, add 0-0-1 to the weight value.

*Note:*
- The universal selector \`(*)\` and the pseudo-class \`:where()\` and its parameters aren't counted when calculating the weight so their value is 0-0-0.
- Combinator, such as \`+, >, ~, " "\`, and \`||\`, may make a selector more specific in what is selected but they don't add any value to the specificity weight.
- The negation pseudo-class, \`:not()\`, itself has no weight. Neither do the \`:is()\` or the \`:has()\` pseudo-classes. The parameters in these selectors, however, do.
`;

export { specificity };
