module.exports = function (name) {
    const result = name.filter((e) => !e.toUpperCase().includes("X"));
    return result;
};
