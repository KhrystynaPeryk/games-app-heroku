import { Injectable } from "@angular/core";

@Injectable()
export class FriendsService {
    friendsArray = [
        {name: 'smokerfire'},
        {name: 'tubepower'},
        {name: 'multishotcoalore'},
        {name: 'spawnfoot'},
        {name: 'bearsnowball'},
        {name: 'bowlog'},
        {name: 'craftingpigstep'},
        {name: 'chorussmite'},
        {name: 'lavasaddle'},
        {name: 'porkchopforest'},
        {name: 'valleypot'},
        {name: 'portalprismarine'},
        {name: 'nautilusblaze'},
        {name: 'poppyprojectile'},
        {name: 'pillagersnow'},
        {name: 'farmlandriptide'},
        {name: 'dioritecyandye'},
        {name: 'impalingboots'},
        {name: 'carrotlime'},
        {name: 'flamebinding'},
        {name: 'basaltmellohi'},
        {name: 'coalorestone'},
        {name: 'ominousgilded'},
        {name: 'spectraltrapdoor'},
        {name: 'framesmoker'},
        {name: 'lodestonecookie'},
        {name: 'smallsand'},
        {name: 'lecternvanishing'},
        {name: 'rottendiorite'},
        {name: 'bakedcyan'},
        {name:'conduititem'},
        {name:'jukeboxfox'},
        {name:'loyaltytree'},
        {name:'grassguardian'},
        {name:'brownpattern'},
        {name:'potgranite'},
        {name:'tablepurpur'},
        {name:'packedcrystals'},
        {name:'flintbarrier'},
        {name:'seagrassbeehives'},
        {name:'tundrasticky'},
        {name:'powerstaned'},
        {name:'alliumweeping'},
        {name:'dirtlukewarm'},
        {name:'fanhoglin'},
        {name:'muttonpufferfish'},
        {name:'blackstoneslime'},
        {name:'cocoaegg'},
        {name:'cubefortress'},
        {name:'glazedbee'}
    ]

    gamesArray = [
        {
          name: 'Doom Ethernal', 
          price: '200 UAH', 
          description: 'Lorem ipsum dolor sit amet, eu probatus atomorum definitionem vim, eam ad nobis dolor persequeris. Voluptatum definiebas in cum. Has no everti eirmod interpretaris.',
          tag: 'Action'
        },
        {
          name: 'Warfare 1944',
          price: '150 UAH',
          description: 'Lorem ipsum dolor sit amet, eu probatus atomorum definitionem vim, eam ad nobis dolor persequeris. Voluptatum definiebas in cum. Has no everti eirmod interpretaris.',
          tag: 'Strategy'
        },
        {
          name: 'Forge of Empires',
          price: '180 UAH',
          description: 'Lorem ipsum dolor sit amet, eu probatus atomorum definitionem vim, eam ad nobis dolor persequeris. Voluptatum definiebas in cum. Has no everti eirmod interpretaris.',
          tag: 'Strategy'
        },
        {
          name: 'Tower Defence',
          price: '150 UAH',
          description: 'Lorem ipsum dolor sit amet, eu probatus atomorum definitionem vim, eam ad nobis dolor persequeris. Voluptatum definiebas in cum. Has no everti eirmod interpretaris.',
          tag: 'Strategy'
        },
        {
          name: 'Artifission',
          price: '180 UAH',
          description: 'Lorem ipsum dolor sit amet, eu probatus atomorum definitionem vim, eam ad nobis dolor persequeris. Voluptatum definiebas in cum. Has no everti eirmod interpretaris.',
          tag: 'Action'
        },
        {
          name: 'Fatal Puzzle',
          price: '200 UAH',
          description: 'Lorem ipsum dolor sit amet, eu probatus atomorum definitionem vim, eam ad nobis dolor persequeris. Voluptatum definiebas in cum. Has no everti eirmod interpretaris.',
          tag: 'Action'
        },
        {
          name: 'Danger Dungeon',
          price: '150 UAH',
          description: 'Lorem ipsum dolor sit amet, eu probatus atomorum definitionem vim, eam ad nobis dolor persequeris. Voluptatum definiebas in cum. Has no everti eirmod interpretaris.',
          tag: 'Zombie'
        },
        {
          name: 'Undead Throne',
          price: '200 UAH',
          description: 'Lorem ipsum dolor sit amet, eu probatus atomorum definitionem vim, eam ad nobis dolor persequeris. Voluptatum definiebas in cum. Has no everti eirmod interpretaris.',
          tag: 'Zombie'
        },
        {
          name: 'Zombie Buster',
          price: '180 UAH',
          description: 'Lorem ipsum dolor sit amet, eu probatus atomorum definitionem vim, eam ad nobis dolor persequeris. Voluptatum definiebas in cum. Has no everti eirmod interpretaris.',
          tag: 'Zombie'
        },
    ]
    myLibraryArray: any = []
    myFriendsBucket: any = [];
}