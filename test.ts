export {};

type Character = {
	nom : string;
	life: number;
	attack : number;
	defense : number;
};

type Pet = Character;
type Hero = Character & {
	pet? : Pet;
}
