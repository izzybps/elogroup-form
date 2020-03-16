sim = document.getElementById("sim");
nao = document.getElementById("nao");

//function to show/hide checkboxes
function toggle() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    if (sim.checked) {
        for (var i = 0; i < checkboxes.length; i++) {
            checkboxes[i].disabled = false;
        }
    } else {
        for (var i = 0; i < checkboxes.length; i++) {
            checkboxes[i].disabled = true;
            checkboxes[i].checked = false;
        }
    }
};
sim.addEventListener('change', toggle);
nao.addEventListener('change', toggle);
toggle();

//validation function
function validation(){
    nome = document.getElementById("nome");
    tel = document.getElementById("telefone");
    nome_val = document.getElementById("nome_val");
    tel_val = document.getElementById("tel_val");
    submit_btn = document.getElementById("submit_btn");

    //name validation
    if (nome.value == ""){
        nome.style.background = 'Yellow';
        nome_val.innerHTML = "Preencha um nome e um sobrenome";
    } else if (nome.value.split(" ").length < 2) {
        nome.style.background = 'Yellow';
        nome_val.innerHTML = "Preencha pelo menos um sobrenome";
    } else {
        nome.style.background = 'White';
        nome_val.innerHTML = "";
    }

    // telephone validation
    if (tel.value.match(/^\(?([0-9]{2})\)?[ ]?[-]?[ ]?([0-9]{8})$/)) {
        tel.style.background = 'White';
        tel_val.innerHTML = "";
    }
    else {
        tel.style.background = 'Yellow';
        tel_val.innerHTML = "Utilize apenas números no formato 99 - 99999999";
    }
    
    //calls send function and disables send button
    if (nome_val.innerHTML == "" && tel_val.innerHTML == ""){
        sendForm();
        submit_btn.disabled = true;
        window.alert("Formulário enviado com sucesso!");
    }
};


//send function
function sendForm() {
    //putting formdata in JSON format
    var social_checked = document.querySelectorAll('input[type="checkbox"]:checked');
    social_media = Array.from(social_checked, node => node.value);
    if (social_media.length == 0){
        var JSONdata = JSON.stringify($('#id_form').serializeArray().map(function(x){this[x.name] = x.value; return this;}.bind({}))[0], ['nome', 'telefone', 'source', 'social']);
    }
    else {
        formData = $('#id_form').serializeArray().map(function(x){this[x.name] = x.value; return this;}.bind({}))[0];
        formData.social_checked = social_media; //adding checked social media as an array
        var JSONdata = JSON.stringify(formData, ['nome', 'telefone', 'source', 'social_checked']);
    }
    
    //posting formdata
    $.ajax({
        type: 'POST',
        url: 'http://localhost:8080',  
        dataType: 'json',
        data: {myform:JSONdata},
        success : function(result) {
                    // you can see the result from the console
                    // tab of the developer tools
                    console.log(result);
                },
        error: function(xhr, resp, text) {
            console.log(xhr, resp, text);
        }
        });
};