export default function handler(req, res) {
    res.status(200).json({ 
        items:[{
            image:"/image@2x.png",
            title:"Csv парсер на java",
            subtitle:"Был предоставлен csv файл, в котором содержались данные о студентах, который нужно было правильно распарсить и ответ предоставить в виде таблицы",
            buttenText:"Смотреть ",
            linkText: "https://github.com/NikitaBasmanov/JavaProject",
        },
        {
            image:"/image1@2x.png",
            title:"Сайт на Django",
            subtitle:"Была придумана идея визуальной составляющей сайта, так же построен макет, что в дальнейшем очень помогло и с работой",
            buttenText:"Смотреть ",
            linkText: "https://github.com/NikitaBasmanov/djsite",
        }
        ]
    })
  }