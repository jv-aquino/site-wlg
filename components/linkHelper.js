function linkHelper(nome, categoria) {
  const base = 'https://wa.me/12987024097?text=';
  const texto = 'Olá!+Eu+gostaria+de+saber+mais+sobre+o+produto+' + nome.replace(/ /g, '+') + '+da+seção+' + categoria.replace(/ /g, '+');
  return (base + texto);
}

export default linkHelper;