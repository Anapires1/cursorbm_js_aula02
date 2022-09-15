//Exercicio 1:
const produtos = [
	{
		id: 1,
		modelo: "Blusa de time",
		marca: "adidas",
		categoria: "blusa",
	},
	{
		id: 2,
		modelo: "Bermuda esportiva",
		marca: "adidas",
		categoria: "bermuda",
	},
	{
		id: 3,
		modelo: "Tênis para malhar",
		marca: "adidas",
		categoria: "tenis",
	},
	{
		id: 4,
		modelo: "Blusa floral",
		marca: "farm",
		categoria: "blusa",
	},
	{
		id: 5,
		modelo: "Short jeans",
		marca: "farm",
		categoria: "bermuda",
	},
	{
		id: 6,
		modelo: "Tenis summer",
		marca: "farm",
		categoria: "tenis",
	},
];

function selecionaProduto(categoriaSelecionada: string) {
	return produtos.filter((produtos) => {
		return produtos.categoria.includes(categoriaSelecionada) ? true : false;
	});
}

//Exercicio 2
const meuArray = Array.from(Array(27).keys()).map((n) => n + 1);

function criaMatriz() {
	let newArray = [];
	for (let i = 0; i < meuArray.length; i += 3) {
		newArray.push(meuArray.slice(i, i + 3));
	}
	return newArray;
}
const meuArrayConcatenado = criaMatriz();

//Exercicio 3
function somaArray() {
	let soma: number[] = [];
	const arrayDeSomas = meuArrayConcatenado.map((arrays: number[]) => {
		soma = [
			arrays.reduce((acc, value) => {
				return acc + value;
			}),
		];
		return soma;
	});
	return arrayDeSomas;
}

console.log("Array de blusas:", selecionaProduto("blusa"));
console.log("Arrays concatenados:", meuArrayConcatenado);
console.log("Array de somas:", somaArray());
