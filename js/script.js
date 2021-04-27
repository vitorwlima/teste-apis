function scriptCep() {
  const form = document.forms.cep;
  const btnSubmit = form.querySelector("#submit");
  const info = document.querySelectorAll("p");
  let cepInserido;

  btnSubmit.addEventListener("click", alterarInfo);
  form.addEventListener("change", handleChange);

  function handleChange(e) {
    cepInserido = +e.target.value;
  }

  function alterarInfo(action) {
    action.preventDefault();
    const pCep = document.querySelector(".cep");
    const pCidade = document.querySelector(".cidadeUF");
    const pDdd = document.querySelector(".ddd");
    const pBairro = document.querySelector(".bairro");
    const pRua = document.querySelector(".logradouro");
    fetch(`https://viacep.com.br/ws/${cepInserido}/json/`)
      .then((res) => res.json())
      .then((data) => {
        pCep.innerText = `CEP: ${cepInserido}`;
        pCidade.innerText = `Cidade - UF: ${data.localidade} - ${data.uf}`;
        pDdd.innerText = `DDD: ${data.ddd}`;
        pBairro.innerText = `Bairro: ${data.bairro}`;
        pRua.innerText = `Rua: ${data.logradouro}`;
      })
      .catch(() => {
        pCep.innerText = "CEP: Insira um CEP válido.";
        pCidade.innerText = "Cidade:";
        pDdd.innerText = "DDD:";
        pBairro.innerText = "Bairro:";
        pRua.innerText = "Rua:";
      });
  }
}
scriptCep();
