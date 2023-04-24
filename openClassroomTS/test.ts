function my_ft(obj: {value: number}) : void	{
	obj.value = 10;
}

let x = { value : 0};
console.log(x);
my_ft(x);
console.log(x);
