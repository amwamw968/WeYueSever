const schedule = require('node-schedule');
const zhuiShuCrawler = require('../crawler/ZhuiShuCrawler');
const async = require("async");

function scheduleCrawler() {
    console.log("启动爬虫定时任务");

    // schedule.scheduleJob('0 15 * * * *', function () {//每小时执行一次
        console.log('开始执行爬虫任务:' + new Date());
        async.series({
            allBooks: zhuiShuCrawler.getAllBooks,
            chaptersId: zhuiShuCrawler.getChaptersId,
            bookChapters: zhuiShuCrawler.getBookChapters,
            booksInfoById: zhuiShuCrawler.getBooksInfoById
        }, (err, datas) => {
            if (!err) {
                console.log('爬虫完毕');
                console.log(datas);
            }
        })

    // });
    // schedule.scheduleJob('0 25 * * * *', function(){//每小时执行一次
    //     console.log('开始执行链接没获取到的任务:' + new Date());
    //     yongjiuzyCrawler.startUrlsIsNull();
    // });
}

exports.scheduleCrawler = scheduleCrawler;