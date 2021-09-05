var data = [
{ id: 1, time:'00-05',  type:	'Cá nhà táng',	place:'Thuyền'	,ingame:'Ban đêm'},
{ id: 2, time:'10-20',  type:	'Rùa biển',	place:'Bãi biển'	,ingame:'Ban ngày'},
{ id: 3, time:'13-18',  type:	'Cá voi xanh',	place:'Ngọn hải đăng'	,ingame:'Ban ngày'},
{ id: 4, time:'15-17',  type:	'Cá heo hồng',	place:'Mall'	,ingame:'Ban ngày'},
{ id: 5, time:'20-35',  type:	'Cá sấu mõm dài',	place:'Hồ cắm trại - Thác Nước'	,ingame:'Ban đêm'},
{ id: 6, time:'25-35',  type:	'Cá voi sát thủ',	place:'Thuyền'	,ingame:'Ban đêm'},
{ id: 7, time:'30-40',  type:	'Cá sấu',	place:'Hồ bơi tại gia'	,ingame:'Cả ngày'},
{ id: 8, time:'30-35',  type:	'Cá nhà táng',	place:'Thuyền', ingame:	'Ban đêm'},
{ id: 9, time:'40-50',  type:	'Rùa biển',	place:'Bãi biển'	,ingame:'Ban ngày'},
{ id: 10, time:'43-48',  type:	'Cá voi xanh',	place:'Ngọn hải đăng'	,ingame:'Ban ngày'},
{ id: 11, time:'45-47',  type:	'Cá heo hồng',	place:'Mall'	,ingame:'Ban ngày'},
{ id: 12, time:'55-05',  type:	'Cá sấu',	place:'Hồ bơi tại gia'	,ingame:'Cả ngày'},
{ id: 13, time:'55-05',  type:	'Cá sấu mõm dài', place:'	Hồ cắm trại - Thác Nước',	ingame:'Ban đêm'},
{ id: 14, time:'55-05',  type:	'Cá voi sát thủ',	place:'Thuyền'	,ingame:'Ban đêm'}];
var dataNew = data.map(item => {
    let to = item.time.slice(0,2);
    let from = item.time.slice(3,5);
    if (to == '55') from = 60;
    return {...item, to: +to, from: +from};
})
const date = new Date();
$(() => {
//    var timeIngame = prompt('Nhap thoi gian trong game');
   $tbody = $('.playTogether > tbody');
   outputHtml = data.map(item => {
       return `
        <tr id="${item.id}">
            <th scope="row">${item.time}</th>
            <td>${item.type}</td>
            <td>${item.place}</td>
            <td>${item.ingame}</td>
        </tr>`
   })

   $tbody.append(outputHtml);
   setInterval(() => { 
    minutes = date.getMinutes();
    result = dataNew.filter(item => {
        if (+item.to <= minutes && minutes <= +item.from) {
            return item;
        }
     });
     for (item of result) {
        tr = $tbody.find(`#${item.id}`);
        tr.addClass('table-danger');
     }
   }, 1000);
  
});
