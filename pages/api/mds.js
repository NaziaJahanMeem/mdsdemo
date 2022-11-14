import { PrismaClient as MysqlClient } from '../generated/client1';
import { PrismaClient as MongoClient } from '../generated/client2';

const client1 = new MysqlClient();
const client2 = new MongoClient();
async function handler(){
    
        /*
        let idx=await prisma.idx.findMany();
        idx = idx.slice(0, 1000);
        let mkistat=await prisma.mkistat.findMany();
        mkistat = mkistat.slice(0, 1000);
        const man=await prisma.man.findMany();
        const stats=await prisma.stats.findMany();
        const trd=await prisma.trd.findMany();
        var data={
            idx:idx,
            mkistat:mkistat,
            man:man,
            stats: stats,
            trd:trd
        }
        */
        
    const trd= await client1.trd.findMany();
    let promiseMongo;
    try{
        console.log("before error");
        promiseMongo=client2.trd.createMany({data:trd, skipDuplicates: true});
    }
    catch(e){
        promiseMongo = null;
    }
    await Promise.all([promiseMongo]);
    // const trds = await client2.$transaction(
    //     trd.map((t) => {
    //         client2.upsert({
    //             where: {id: t.id},
    //             update: {},
    //             create: {
    //                 TRD_SNO: t.TRD_SNO,
    //                 TRD_TOTAL_TRADES: t.TRD_TOTAL_TRADES,
    //                 TRD_TOTAL_VOLUME: t.TRD_TOTAL_VOLUME,
    //                 TRD_TOTAL_VALUE: t.TRD_TOTAL_VALUE,
    //                 TRD_LM_DATE_TIME: t.TRD_LM_DATE_TIME,
    //             }
    //         })
    //     })
    // );
}
handler()
.catch(e=>{
    throw e
})
.finally(async()=>{
    await client1.$disconnect()
    await client2.$disconnect()
})
export default handler