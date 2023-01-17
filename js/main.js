let btnGetData = document.getElementById('get-user');
//console.log(btnGetUser);
let ulElement = document.createElement('ul');
btnGetData.after(ulElement);

function createLiItem(text) {
    let liElement = document.createElement('li');
    liElement.innerText = `${text}`;
    ulElement.appendChild(liElement);
}


function getData() {

    fetch('https://akademia108.pl/api/ajax/get-post.php', {
        method: 'GET',
    })
        //zmiana tekstu w obiekt JavaScript
        .then(response => response.json())

        .then(resJson => {
            console.log(resJson);

            //ulElement.innerHTML = '';
            createLiItem(`User ID: ${resJson.userId}`);
            createLiItem(`ID: ${resJson.id}`);
            createLiItem(`Title: ${resJson.title}`);
            createLiItem(`Body: ${resJson.body}`);
            createLiItem('.............................')
        })

        .catch((error) => {
            console.error('Error:', error);
        });

}

btnGetData.addEventListener('click', getData)

