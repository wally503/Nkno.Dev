interface SingleMtgCard {
    name: string;
    id: string;
    multiverseid: string; // multiverse id
    multiverseidint: number; // multiverse id - api preconverted to number form
    manaCost: string;
    cmc: number;
    colors: string[];
    colorIdentity: string[];
    type: string;
    types: string[]; //card types
    subTypes: string[];
    rarity: string;
    set: string;
    imageUrl: string;
    foreignNames: ForeignLanguageCardDetail[];
}

interface ForeignLanguageCardDetail {
    name: string;
    text: string;
    type: string;
    language: string;
}