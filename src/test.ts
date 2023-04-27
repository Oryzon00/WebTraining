type Character = {
	name: string;
	life: number;
	attack: number;
	defense: number;
 };
 

type Shop<T> = {
	name: string;
	owner: Character;
	items: Array<T>;
};

type Equipment = {
	price: number;
	attack?: number;
	defense?: number;
};

type Armory = Shop<Equipment>;

console.log("Hello world!");
