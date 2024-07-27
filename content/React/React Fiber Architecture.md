> [!info] tldr; React Fibre is priority system

React uses Virtual DOM. Virtual DOM updates the part that changes in the DOM. But still updating the whole at once is time consuming. So the team at Meta developed a priority system.  

The highest priority changes, the elements visible to the user, are updated first. While the low priority changes, the elements that are currently not on users view, are updated later.

This spreading of update over time is core principle of React Fiber Architecture.