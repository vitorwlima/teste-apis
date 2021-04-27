const form = document.forms.cep;
const btnSubmit = form.querySelector("#submit");
let cepInserido;

function handleChange(e) {
  cepInserido = +e.target.value;
}

btnSubmit.addEventListener("click", alterarInfo);

form.addEventListener("change", handleChange);

function alterarInfo(action) {
  action.preventDefault();
  const teste = document.querySelector("p");
  fetch(`https://viacep.com.br/ws/${cepInserido}/json/`)
    .then((res) => res.json())
    .then((data) => (teste.innerText = data.logradouro));
}
