/* eslint-disable max-len */
const issues = `
- There are many variables, including CSS and scss variables, but the property values' unique ratio is low.
- There are some variables that are not used in the project but there are exist.
- The style system in the **deriv-app** is not Modular. Components and Packages have access to all the styles. It harms the isolation styles and maintainability.
- There are no design tokens to be used across the packages and projects. (i.e between deriv-app, deriv-ui, deriv-com, and also mobile-app)
- The **deriv-app** project uses \`BEM\` methodology, but not everywhere.
- There are many RuleSets that include **ONLY** one declaration. This is because there are **ZERO** utility classes in the project.
- There are many units that are used across the project. For the same property, we use different units.
- There is duplicate (scss) variables in the project.
- The unique ratio of the values is mostly less than 50%. It is because there is no design tokens or guideline for how to use the variables. Or maybe the variables are not defined generally that do not cover all the needs.
- The specificity graph tells us the maintainability of the project style system. The graph should be flat and the numbers should be as low as possible. Our graph doesn't have both of them which means it's hard to maintain the styles.
- The unique ratio of the selectors is almost 90%. It means that we define a class for almost everything, even if the declarations are the same. (We know that 73% of the defined declarations are the same!). In the project with unique design system having 90% unique classes sounds troubles like hard to maintain, hard to apply new changes and so on.
`;

export { issues };
