import users from './users.js';

const getSortedUniqueSkills = users => {
  const skills = users
    .map(user => user.skills)
    .reduce((newArr, user) => newArr.concat(...user));

  return skills.filter((user, index) => skills.indexOf(user) === index).sort();
};

console.log(getSortedUniqueSkills(users)); // [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
