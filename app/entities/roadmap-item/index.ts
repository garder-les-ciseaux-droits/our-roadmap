
import type { TypeRoadmapItem } from "./model/types";
export { default as RoadmapItemCard } from './ui/RoadmapItemCard.vue'

export const roadmapItems: TypeRoadmapItem[] = [
    {
        id: 1,
        title: "Наше знакомство",
        date: "12.11.2025",
        hasButton: true,
        messages: [
        {
            userId: 1,
            text: "У тебя вайб такой, будто ты сейчас спрыгнешь с Нотр Дам де пари"
        },
        {
            userId: 0,
            text: "так и есть"
        },
        {
            userId: 1,
            text: "раз так, то не забудь тогда и меня за собой потянуть)"
        },
        {
            userId: 0,
            text: "ты должен жить"
        },
        
    
    
    ]
    },
     {
        id: 2,
        title: "Признание",
        date: "08.12.2025",
        hasButton: true,
         messages:  [{
            userId: 1,
            text: "Мне ты нравишься как девушка"
        },
        {
            userId: 1,
            text: "Именно в этом смысле , в каком ты думаешь"
        }
        ,
        {
            userId: 1,
            text: "Но это не значит, что я не считаю тебя своей подругой"
        } ,
        {
            userId: 1,
            text: "И хочу с тобой встречаться"
        },{
            userId: 0,
            text: "я тоже хочу"
        },{
            userId: 0,
            text: "очень"
        }
    
    
    
        ]
    },
     {
        id: 3,
        title: "Первое свидание",
        date: "Скоро",
        hasButton: false,
         messages:  [{
            userId: 0,
            text: "hello"
        }]
    },
     {
        id: 4,
        title: "Проект Семья",
        date: "Скоро",
        hasButton: false,
         messages:  [{
            userId: 0,
            text: "hello"
        }]
    }
]