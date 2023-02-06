const getMoedasApi = async () => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const moedas = await response.json();
  delete moedas.USDT;
  return moedas;
};

export default getMoedasApi;
