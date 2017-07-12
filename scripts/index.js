/**
 * Created by johnhank on 2017/7/11.
 */
import GoTop from './goTop'
import Carousel from './carousel'
import autoLoad from './autoLoad'

var gotop = new GoTop($(".contain")),
    carousel = new Carousel($(".carousel")),
    newsautoload = new autoLoad($(".news-wrap"));
console.log(GoTop)
console.log(Carousel)
console.log(autoLoad)
console.log($)
