const ctx = require.context('./', true, /.*.json$/)
const FeatureCollectionMap = ctx.keys().reduce((accumulator, currentValue) => {
    const key = currentValue.split('.')[1].split('/')[1]
    const josnData = ctx(currentValue)
    if (josnData.type === 'FeatureCollection') {
        accumulator[key] = ctx(currentValue)
    }
    return accumulator
}, {})

// const _nul = require('./_nul.json')
// const abw = require('./abw.json')
// const afg = require('./afg.json')
// const ago = require('./ago.json')
// const aia = require('./aia.json')
// const alb = require('./alb.json')
// const ald = require('./ald.json')
// const and = require('./and.json')
// const are = require('./are.json')
// const arg = require('./arg.json')
// const arm = require('./arm.json')
// const asm = require('./asm.json')
// const ata = require('./ata.json')
// const atc = require('./atc.json')
// const atf = require('./atf.json')
// const atg = require('./atg.json')
// const aus = require('./aus.json')
// const aut = require('./aut.json')
// const aze = require('./aze.json')
// const bdi = require('./bdi.json')
// const bel = require('./bel.json')
// const ben = require('./ben.json')
// const bfa = require('./bfa.json')
// const bgd = require('./bgd.json')
// const bgr = require('./bgr.json')
// const bhr = require('./bhr.json')
// const bhs = require('./bhs.json')
// const bih = require('./bih.json')
// const bjn = require('./bjn.json')
// const blm = require('./blm.json')
// const blr = require('./blr.json')
// const blz = require('./blz.json')
// const bmu = require('./bmu.json')
// const bol = require('./bol.json')
// const bra = require('./bra.json')
// const brb = require('./brb.json')
// const brn = require('./brn.json')
// const btn = require('./btn.json')
// const bwa = require('./bwa.json')
// const caf = require('./caf.json')
// const can = require('./can.json')
// const che = require('./che.json')
// const chl = require('./chl.json')
// const chn = require('./chn.json')
// const civ = require('./civ.json')
// const clp = require('./clp.json')
// const cmr = require('./cmr.json')
// const cod = require('./cod.json')
// const cog = require('./cog.json')
// const cok = require('./cok.json')
// const col = require('./col.json')
// const com = require('./com.json')
// const cpv = require('./cpv.json')
// const cri = require('./cri.json')
// const csi = require('./csi.json')
// const cub = require('./cub.json')
// const cuw = require('./cuw.json')
// const cym = require('./cym.json')
// const cyn = require('./cyn.json')
// const cyp = require('./cyp.json')
// const cze = require('./cze.json')
// const deu = require('./deu.json')
// const dji = require('./dji.json')
// const dma = require('./dma.json')
// const dnk = require('./dnk.json')
// const dom = require('./dom.json')
// const dza = require('./dza.json')
// const ecu = require('./ecu.json')
// const egy = require('./egy.json')
// const eri = require('./eri.json')
// const esb = require('./esb.json')
// const esp = require('./esp.json')
// const est = require('./est.json')
// const eth = require('./eth.json')
// const fin = require('./fin.json')
// const fji = require('./fji.json')
// const flk = require('./flk.json')
// const fra = require('./fra.json')
// const fro = require('./fro.json')
// const fsm = require('./fsm.json')
// const gab = require('./gab.json')
// const gbr = require('./gbr.json')
// const geo = require('./geo.json')
// const ggy = require('./ggy.json')
// const gha = require('./gha.json')
// const gib = require('./gib.json')
// const gin = require('./gin.json')
// const gmb = require('./gmb.json')
// const gnb = require('./gnb.json')
// const gnq = require('./gnq.json')
// const grc = require('./grc.json')
// const grd = require('./grd.json')
// const grl = require('./grl.json')
// const gtm = require('./gtm.json')
// const gum = require('./gum.json')
// const guy = require('./guy.json')
// const hkg = require('./hkg.json')
// const hmd = require('./hmd.json')
// const hnd = require('./hnd.json')
// const hrv = require('./hrv.json')
// const hti = require('./hti.json')
// const hun = require('./hun.json')
// const idn = require('./idn.json')
// const imn = require('./imn.json')
// const ind = require('./ind.json')
// const ioa = require('./ioa.json')
// const iot = require('./iot.json')
// const irl = require('./irl.json')
// const irn = require('./irn.json')
// const irq = require('./irq.json')
// const isl = require('./isl.json')
// const isr = require('./isr.json')
// const ita = require('./ita.json')
// const jam = require('./jam.json')
// const jey = require('./jey.json')
// const jor = require('./jor.json')
// const jpn = require('./jpn.json')
// const kab = require('./kab.json')
// const kas = require('./kas.json')
// const kaz = require('./kaz.json')
// const ken = require('./ken.json')
// const kgz = require('./kgz.json')
// const khm = require('./khm.json')
// const kir = require('./kir.json')
// const kna = require('./kna.json')
// const kor = require('./kor.json')
// const kos = require('./kos.json')
// const kwt = require('./kwt.json')
// const lao = require('./lao.json')
// const lbn = require('./lbn.json')
// const lbr = require('./lbr.json')
// const lby = require('./lby.json')
// const lca = require('./lca.json')
// const lie = require('./lie.json')
// const lka = require('./lka.json')
// const lso = require('./lso.json')
// const ltu = require('./ltu.json')
// const lux = require('./lux.json')
// const lva = require('./lva.json')
// const mac = require('./mac.json')
// const maf = require('./maf.json')
// const mar = require('./mar.json')
// const mco = require('./mco.json')
// const mda = require('./mda.json')
// const mdg = require('./mdg.json')
// const mdv = require('./mdv.json')
// const mex = require('./mex.json')
// const mhl = require('./mhl.json')
// const mkd = require('./mkd.json')
// const mli = require('./mli.json')
// const mlt = require('./mlt.json')
// const mmr = require('./mmr.json')
// const mne = require('./mne.json')
// const mng = require('./mng.json')
// const mnp = require('./mnp.json')
// const moz = require('./moz.json')
// const mrt = require('./mrt.json')
// const msr = require('./msr.json')
// const mus = require('./mus.json')
// const mwi = require('./mwi.json')
// const mys = require('./mys.json')
// const nam = require('./nam.json')
// const ncl = require('./ncl.json')
// const ner = require('./ner.json')
// const nfk = require('./nfk.json')
// const nga = require('./nga.json')
// const nic = require('./nic.json')
// const niu = require('./niu.json')
// const nld = require('./nld.json')
// const nor = require('./nor.json')
// const npl = require('./npl.json')
// const nru = require('./nru.json')
// const nzl = require('./nzl.json')
// const omn = require('./omn.json')
// const pak = require('./pak.json')
// const pan = require('./pan.json')
// const pcn = require('./pcn.json')
// const per = require('./per.json')
// const pga = require('./pga.json')
// const phl = require('./phl.json')
// const plw = require('./plw.json')
// const png = require('./png.json')
// const pol = require('./pol.json')
// const pri = require('./pri.json')
// const prk = require('./prk.json')
// const prt = require('./prt.json')
// const pry = require('./pry.json')
// const psx = require('./psx.json')
// const pyf = require('./pyf.json')
// const qat = require('./qat.json')
// const rou = require('./rou.json')
// const rus = require('./rus.json')
// const rwa = require('./rwa.json')
// const sah = require('./sah.json')
// const sau = require('./sau.json')
// const scr = require('./scr.json')
// const sdn = require('./sdn.json')
// const sds = require('./sds.json')
// const sen = require('./sen.json')
// const ser = require('./ser.json')
// const sgp = require('./sgp.json')
// const sgs = require('./sgs.json')
// const shn = require('./shn.json')
// const slb = require('./slb.json')
// const sle = require('./sle.json')
// const slv = require('./slv.json')
// const smr = require('./smr.json')
// const sol = require('./sol.json')
// const som = require('./som.json')
// const spm = require('./spm.json')
// const srb = require('./srb.json')
// const stp = require('./stp.json')
// const sur = require('./sur.json')
// const svk = require('./svk.json')
// const svn = require('./svn.json')
// const swe = require('./swe.json')
// const swz = require('./swz.json')
// const sxm = require('./sxm.json')
// const syc = require('./syc.json')
// const syr = require('./syr.json')
// const tca = require('./tca.json')
// const tcd = require('./tcd.json')
// const testing_world = require('./testing-world.json')
// const testing = require('./testing.json')
// const tgo = require('./tgo.json')
// const tha = require('./tha.json')
// const tjk = require('./tjk.json')
// const tkm = require('./tkm.json')
// const tls = require('./tls.json')
// const ton = require('./ton.json')
// const tto = require('./tto.json')
// const tun = require('./tun.json')
// const tur = require('./tur.json')
// const tuv = require('./tuv.json')
// const twn = require('./twn.json')
// const tza = require('./tza.json')
// const uga = require('./uga.json')
// const ukr = require('./ukr.json')
// const umi = require('./umi.json')
// const ury = require('./ury.json')
// const usa = require('./usa.json')
// const usg = require('./usg.json')
// const uzb = require('./uzb.json')
// const vat = require('./vat.json')
// const vct = require('./vct.json')
// const ven = require('./ven.json')
// const vgb = require('./vgb.json')
// const vir = require('./vir.json')
// const vnm = require('./vnm.json')
// const vut = require('./vut.json')
// const wlf = require('./wlf.json')
// const world_hires = require('./world.hires.json')
// const world = require('./world.json')
// const wsb = require('./wsb.json')
// const wsm = require('./wsm.json')
// const yem = require('./yem.json')
// const zaf = require('./zaf.json')
// const zmb = require('./zmb.json')
// const zwe = require('./zwe.json')
// const FeatureCollectionMap = {
//     _nul,
//     abw,
//     afg,
//     ago,
//     aia,
//     alb,
//     ald,
//     and,
//     are,
//     arg,
//     arm,
//     asm,
//     ata,
//     atc,
//     atf,
//     atg,
//     aus,
//     aut,
//     aze,
//     bdi,
//     bel,
//     ben,
//     bfa,
//     bgd,
//     bgr,
//     bhr,
//     bhs,
//     bih,
//     bjn,
//     blm,
//     blr,
//     blz,
//     bmu,
//     bol,
//     bra,
//     brb,
//     brn,
//     btn,
//     bwa,
//     caf,
//     can,
//     che,
//     chl,
//     chn,
//     civ,
//     clp,
//     cmr,
//     cod,
//     cog,
//     cok,
//     col,
//     com,
//     cpv,
//     cri,
//     csi,
//     cub,
//     cuw,
//     cym,
//     cyn,
//     cyp,
//     cze,
//     deu,
//     dji,
//     dma,
//     dnk,
//     dom,
//     dza,
//     ecu,
//     egy,
//     eri,
//     esb,
//     esp,
//     est,
//     eth,
//     fin,
//     fji,
//     flk,
//     fra,
//     fro,
//     fsm,
//     gab,
//     gbr,
//     geo,
//     ggy,
//     gha,
//     gib,
//     gin,
//     gmb,
//     gnb,
//     gnq,
//     grc,
//     grd,
//     grl,
//     gtm,
//     gum,
//     guy,
//     hkg,
//     hmd,
//     hnd,
//     hrv,
//     hti,
//     hun,
//     idn,
//     imn,
//     ind,
//     ioa,
//     iot,
//     irl,
//     irn,
//     irq,
//     isl,
//     isr,
//     ita,
//     jam,
//     jey,
//     jor,
//     jpn,
//     kab,
//     kas,
//     kaz,
//     ken,
//     kgz,
//     khm,
//     kir,
//     kna,
//     kor,
//     kos,
//     kwt,
//     lao,
//     lbn,
//     lbr,
//     lby,
//     lca,
//     lie,
//     lka,
//     lso,
//     ltu,
//     lux,
//     lva,
//     mac,
//     maf,
//     mar,
//     mco,
//     mda,
//     mdg,
//     mdv,
//     mex,
//     mhl,
//     mkd,
//     mli,
//     mlt,
//     mmr,
//     mne,
//     mng,
//     mnp,
//     moz,
//     mrt,
//     msr,
//     mus,
//     mwi,
//     mys,
//     nam,
//     ncl,
//     ner,
//     nfk,
//     nga,
//     nic,
//     niu,
//     nld,
//     nor,
//     npl,
//     nru,
//     nzl,
//     omn,
//     pak,
//     pan,
//     pcn,
//     per,
//     pga,
//     phl,
//     plw,
//     png,
//     pol,
//     pri,
//     prk,
//     prt,
//     pry,
//     psx,
//     pyf,
//     qat,
//     rou,
//     rus,
//     rwa,
//     sah,
//     sau,
//     scr,
//     sdn,
//     sds,
//     sen,
//     ser,
//     sgp,
//     sgs,
//     shn,
//     slb,
//     sle,
//     slv,
//     smr,
//     sol,
//     som,
//     spm,
//     srb,
//     stp,
//     sur,
//     svk,
//     svn,
//     swe,
//     swz,
//     sxm,
//     syc,
//     syr,
//     tca,
//     tcd,
//     'testing-world': testing_world,
//     testing,
//     tgo,
//     tha,
//     tjk,
//     tkm,
//     tls,
//     ton,
//     tto,
//     tun,
//     tur,
//     tuv,
//     twn,
//     tza,
//     uga,
//     ukr,
//     umi,
//     ury,
//     usa,
//     usg,
//     uzb,
//     vat,
//     vct,
//     ven,
//     vgb,
//     vir,
//     vnm,
//     vut,
//     wlf,
//     'world.hires': world_hires,
//     world,
//     wsb,
//     wsm,
//     yem,
//     zaf,
//     zmb,
//     zwe
// }

export default FeatureCollectionMap

export {
    FeatureCollectionMap
}