// 21. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

const countries = ["India", "USA", "China", "Brazil", "Canada", "Mexico", "Australia"];

if (countries.includes("Ethopia")) {
    console.log("Ethopia");
} else {
    countries.push("Ethopia");
}