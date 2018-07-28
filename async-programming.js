asyncFun = (obj) => {
    return new Promise (resolve => {
        setTimeout(() => resolve(obj), 5000);
        
    });
};

async function getUser (id) {
    const user = await getUserData (id);
    return user;
}

async function getRepositories (username) {
    const repos = await getRepoData(username);
    return repos;
}

function getUserData(id) {
   return asyncFun({ id: id, username: 'poode'});
}

function getRepoData (username) {
   return asyncFun(['repo1', 'repo2', 'repo3', 'repo4']);
}

console.log('Before');
const user = getUser(1)
.then(user => {
    console.log(user);
    getRepositories(user)
    .then(repos => {
        console.log(repos);
        console.log('After');
    });
});

const obj = {
    a: 1,
    b: 2,
}

module.exports = obj;