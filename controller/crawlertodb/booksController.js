const bookClassifyDetailInfo = require('../../model/booksInfo');

//过滤的字段
const video_filter = {
    __v: 0,
};

function saveBooks(bookinfo) {
    bookClassifyDetailInfo.create(bookinfo, (err, res) => {
        if (err) {
            console.log(err);
            console.log('插入书籍信息失败');
        }
        console.log(res);
        console.log('插入书籍信息成功');
    })
}


function findBookById(id, callback) {
    bookClassifyDetailInfo.findOne({"_id": id},video_filter, (err, res) => {
        if (err) {
            console.log(err);
            return;
        }
        callback(res);
    })
}


function findAllBook(callback) {
    bookClassifyDetailInfo.find({},video_filter, (err, res) => {
        if (err) {
            console.log(err);
            return;
        }
        callback(res);
    })
}

exports.saveBooks = saveBooks;
exports.findBookById = findBookById;
exports.findAllBook = findAllBook;