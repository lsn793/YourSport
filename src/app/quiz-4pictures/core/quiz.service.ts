import { Injectable }           from '@angular/core';
import { GridComponent }        from './components/grid/grid';
import { QuizItem }             from './quiz-item';

@Injectable()
export class QuizService {
  getFlagsQuizEasy() {
    return [[//level1
      new QuizItem(GridComponent, "Китай",  {"/flags/cn.png": true, '/flags/vn.png':false,'/flags/ki.png':false,'/flags/gr.png':false}),
      new QuizItem(GridComponent, "Бразилия", {"/flags/za.png": false,'/flags/de.png':false,'/flags/tr.png':false,'/flags/br.png':true}),
      new QuizItem(GridComponent, "Греция", {"/flags/cu.png": false,'/flags/gr.png':true,'/flags/ar.png':false,'/flags/mh.png':false}),
      new QuizItem(GridComponent, "Япония", {"/flags/jp.png": true,'/flags/kg.png':true,'/flags/pw.png':false,'/flags/il.png':false}),
      new QuizItem(GridComponent, "Италия", {"/flags/it.png": true,'/flags/cm.png':false,'/flags/fi.png':false,'/flags/at.png':false}),
      new QuizItem(GridComponent, "Голландия", {"/flags/nl.png": true,'/flags/py.png':false,'/flags/lt.png':false,'/flags/ir.png':false}),
      new QuizItem(GridComponent, "Корея", {"/flags/kr.png": true,'/flags/eg.png':false,'/flags/sn.png':false,'/flags/sg.png':false}),
      new QuizItem(GridComponent, "Канада", {"/flags/lb.png": false,'/flags/ls.png':false,'/flags/ca.png':true,'/flags/ug.png':false}),
      new QuizItem(GridComponent, "Испания", {"/flags/es.png": true,'/flags/in.png':false,'/flags/bo.png':false,'/flags/tj.png':false}),
      new QuizItem(GridComponent, "ЮАР", {"/flags/za.png": true,'/flags/lr.png':false,'/flags/cr.png':false,'/flags/ph.png':false}),
    ],
    [//level2
      new QuizItem(GridComponent, "Хорватия", {"/flags/hr.png": true,'/flags/ph.png':false,'/flags/si.png':false,'/flags/lu.png':false}),
      new QuizItem(GridComponent, "Турция", {"/flags/tr.png": true,'/flags/sg.png':false,'/flags/mt.png':false,'/flags/lb.png':false}),
      new QuizItem(GridComponent, "Германия",  {"/flags/de.png": true,'/flags/gn.png':false,'/flags/ki.png':false,'/flags/ua.png':false}),
      new QuizItem(GridComponent, "Аргентина", {"/flags/za.png": false,'/flags/fj.png':false,'/flags/tz.png':false,'/flags/ar.png':true}),
      new QuizItem(GridComponent, "Куба", {"/flags/cu.png": true,'/flags/gr.png':false,'/flags/er.png':false,'/flags/bs.png':false}),
      new QuizItem(GridComponent, "Швеция", {"/flags/se.png": true,'/flags/fi.png':false,'/flags/is.png':false,'/flags/do.png':false}),
      new QuizItem(GridComponent, "Бельгия", {"/flags/hn.png": false,'/flags/bd.png':false,'/flags/is.png':false,'/flags/be.png':true}),
      new QuizItem(GridComponent, "Уругвай", {"/flags/uy.png": true,'/flags/gr.png':false,'/flags/et.png':false,'/flags/sv.png':false}),
      new QuizItem(GridComponent, "Ямайка", {"/flags/jm.png": true,'/flags/tg.png':false,'/flags/pl.png':false,'/flags/no.png':false}),
      new QuizItem(GridComponent, "Малазия", {"/flags/my.png": true,'/flags/lr.png':false,'/flags/cu.png':false,'/flags/us.png':false}),
    ],
    [//level3
      new QuizItem(GridComponent, "Новая Зеландия", {"/flags/nz.png": true,'/flags/cr.png':false,'/flags/nr.png':false,'/flags/ht.png':false}),
      new QuizItem(GridComponent, "Болгария", {"/flags/bg.png": true,'/flags/am.png':false,'/flags/ad.png':false,'/flags/gn.png':false}),
      new QuizItem(GridComponent, "Чили",  {"/flags/cl.png": true,'/flags/gq.png':false,'/flags/mm.png':false,'/flags/cz.png':false}),
      new QuizItem(GridComponent, "Перу", {"/flags/pe.png": true,'/flags/at.png':false,'/flags/be.png':false,'/flags/ie.png':false}),
      new QuizItem(GridComponent, "Пакистан", {"/flags/pk.png": true,'/flags/tm.png':false,'/flags/gy.png':false,'/flags/sr.png':false}),
      new QuizItem(GridComponent, "Тринидада и Тобаго", {"/flags/tt.png": true,'/flags/lv.png':false,'/flags/mk.png':false,'/flags/me.png':false}),
      new QuizItem(GridComponent, "Египет", {"/flags/eg.png": true,'/flags/tl.png':false,'/flags/bh.png':false,'/flags/si.png':false}),
      new QuizItem(GridComponent, "Мексика", {"/flags/mx.png": true,'/flags/vc.png':false,'/flags/gn.png':false,'/flags/st.png':false}),
      new QuizItem(GridComponent, "Панама", {"/flags/pa.png": true,'/flags/do.png':false,'/flags/bf.png':false,'/flags/gr.png':false}),
      new QuizItem(GridComponent, "Финляндия", {"/flags/fi.png": true,'/flags/bw.png':false,'/flags/fr.png':false,'/flags/is.png':false}),
    ],

    ]
  };

  getFlagsQuizHard() {
    return [[//level1
      new QuizItem(GridComponent, "Польша",  {"/flags/pl.png": true, '/flags/pe.png':false,'/flags/at.png':false,'/flags/dk.png':false}),
      new QuizItem(GridComponent, "Швейцария", {"/flags/ch.png": true,'/flags/to.png':false,'/flags/ge.png':false,'/flags/mt.png':true}),
      new QuizItem(GridComponent, "Тунис", {"/flags/tn.png": true,'/flags/tr.png':true,'/flags/sg.png':false,'/flags/dz.png':false}),
      new QuizItem(GridComponent, "Венгрия", {"/flags/hu.png": true,'/flags/tj.png':true,'/flags/ne.png':false,'/flags/in.png':false}),
      new QuizItem(GridComponent, "Исландия", {"/flags/is.png": true,'/flags/no.png':false,'/flags/aa.png':false,'/flags/fo.png':false}),
      new QuizItem(GridComponent, "Камерун", {"/flags/cm.png": true,'/flags/sn.png':false,'/flags/ml.png':false,'/flags/gh.png':false}),
      new QuizItem(GridComponent, "Венесуэла", {"/flags/ve.png": true,'/flags/ec.png':false,'/flags/co.png':false,'/flags/sc.png':false}),
      new QuizItem(GridComponent, "Гондурас", {"/flags/hn.png": false,'/flags/ni.png':false,'/flags/gt.png':true,'/flags/sv.png':false}),
      new QuizItem(GridComponent, "Румыния", {"/flags/ro.png": true,'/flags/md.png':false,'/flags/ad.png':false,'/flags/bb.png':false}),
      new QuizItem(GridComponent, "Лихтенштейн", {"/flags/li.png": true,'/flags/ht.png':false,'/flags/kh.png':false,'/flags/nr.png':false}),
    ],
    [//level2
      new QuizItem(GridComponent, "Македония", {"/flags/mk.png": true,'/flags/sc.png':false,'/flags/bi.png':false,'/flags/cf.png':false}),
      new QuizItem(GridComponent, "Ватикан", {"/flags/va.png": true,'/flags/vc.png':false,'/flags/lk.png':false,'/flags/bn.png':false}),
      new QuizItem(GridComponent, "Фиджи", {"/flags/fj.png": true,'/flags/tv.png':false,'/flags/nz.png':false,'/flags/ws.png':false}),
      new QuizItem(GridComponent, "Сан-Марино", {"/flags/sm.png": true,'/flags/so.png':false,'/flags/pw.png':false,'/flags/rw.png':false}),
      new QuizItem(GridComponent, "Бангладеш", {"/flags/bd.png": true,'/flags/la.png':false,'/flags/pw.png':false,'/flags/bz.png':false}),
      new QuizItem(GridComponent, "Латвия", {"/flags/lv.png": true,'/flags/mu.png':false,'/flags/mw.png':false,'/flags/qa.png':false}),
      new QuizItem(GridComponent, "Португалия", {"/flags/pt.png": true,'/flags/bj.png':false,'/flags/cg.png':false,'/flags/gy.png':false}),
      new QuizItem(GridComponent, "Словакия", {"/flags/sk.png": true,'/flags/si.png':false,'/flags/ru.png':false,'/flags/bg.png':false}),
      new QuizItem(GridComponent, "ОАЭ", {"/flags/ae.png": true,'/flags/sd.png':false,'/flags/kw.png':false,'/flags/jo.png':false}),
      new QuizItem(GridComponent, "Монако", {"/flags/mc.png": true,'/flags/id.png':false,'/flags/sg.png':false,'/flags/pl.png':false}),
    ],
    ]
  }
}