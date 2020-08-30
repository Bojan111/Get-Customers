document.getElementById('button1').addEventListener('click', loadFun);

function loadFun(){
    const xhr = new XMLHttpRequest();

    xhr.open('GET','customer.json', true);

    xhr.onload = function(){
        if(this.status === 200){

            const user = JSON.parse(this.responseText);

            const output = `
                <ul>
                    <li>ID: ${user.id}</li>
                    <li>Name: ${user.name}</li>
                    <li>Company: ${user.company}</li>
                    <li>Phone: ${user.phone}</li>

                </ul>
            `

            document.getElementById('customer').innerHTML = output;
        }
    }

    xhr.send();
}



document.getElementById('button2').addEventListener('click', loadBtn2);

function loadBtn2(){
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'customers.json', true);

    xhr.onload = function(){

        const customers = JSON.parse(this.responseText);
        let test = '';
        customers.forEach(function(item){
            test += `
            <ul>
                <li>ID: ${item.id}</li>
                <li>Name: ${item.name}</li>
                <li>Company: ${item.company}</li>
                <li>Phone: ${item.phone}</li>

            </ul>
            `
            document.getElementById('customers').innerHTML = test;
        })
    }
    xhr.send();
}