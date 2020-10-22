const db = require('./db')
const Database = require('./db')
const saveOrphanage = require('./saveOrphanage')

Database.then(async db => {
    //inserir dados na tabela
        await saveOrphanage(db, {
        lat:'-18.7259831',
        lng:'-47.5265206',
        name: 'Lar da Leh',
        about: 'Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.',
        whatsapp: '11987236713',
        images: ["https://images.unsplash.com/photo-1576043005963-f4b2a8d1195d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
        "https://images.unsplash.com/photo-1576043005963-f4b2a8d1195d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"].toString(),
        instructions:'Venha como se sentir a vontade e traga muito amor e paciência para dar.',
        opening_hours:'Horário de visita Das 18h até 8h',
        open_on_weekends:'1'

        
        
        


    })
        
    

   //consultar dados na tabela
   const selecteOrphanages= await db.all("SELECT * FROM orphanages")
   console.log(selecteOrphanages)
   //consultar somente um orfanato pelo ID
   //const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"')
   //console.log(orphanage)
   //deletar dado da tabela
   //console.log(await db.run("DELETE FROM orphanages ))
})

