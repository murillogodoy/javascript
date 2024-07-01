let pessoas = [
    { idade: "25", nome: "Ana"},
    { idade: "43", nome: "Carlos"},
];

let texto = "";
for (const x of pessoas) {
    console.log(x);
    texto += `${x["nome"]} tem ${x["idade"]} ano(s)`;
}