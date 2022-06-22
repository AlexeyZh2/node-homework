
add_button.addEventListener('click', addDataOnPage)
function addDataOnPage(event) {
    event.preventDefault()
    fetch('http://localhost:8080/data')
        .then((res) => {
            console.log(res.status);
            console.log(res.headers);

            if (res.status == 200) {
                return res.text();
            } else {
                throw new Error('');
            }
        })
        .then((str_html) => {
            let div = document.createElement('div');
            div.innerHTML = str_html;
            container.appendChild(div); 
        });
}