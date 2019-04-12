
var Dia_chi_Dich_vu = "https://dv-du-lieu.herokuapp.com/"
var Dia_chi_Media = "https://dv--media.herokuapp.com/"
//************** Xử lý Lưu trữ ***********


//========================================

function Doc_Danh_sach_Dien_thoai() {
    var Du_lieu = {}
    var Xu_ly_HTTP = new XMLHttpRequest()
    var Tham_so = `Ma_so_Xu_ly=Doc_Danh_sach_Dien_thoai`
    var Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}?${Tham_so}`
    Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false)
    Xu_ly_HTTP.send("")
    var Chuoi_JSON = Xu_ly_HTTP.responseText
    if (Chuoi_JSON != "")
        Du_lieu = JSON.parse(Chuoi_JSON)
    return Du_lieu
}

function Doc_Danh_sach_Thanh_ly_Dien_thoai() {
    var Du_lieu = {}
    var Xu_ly_HTTP = new XMLHttpRequest()
    var Tham_so = `Ma_so_Xu_ly=Doc_Danh_sach_Thanh_ly_Dien_thoai`
    var Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}?${Tham_so}`
    Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false)
    Xu_ly_HTTP.send("")
    var Chuoi_JSON = Xu_ly_HTTP.responseText
    if (Chuoi_JSON != "")
        Du_lieu = JSON.parse(Chuoi_JSON)
    return Du_lieu
}

function Ghi_Media(Hinh) {
    
    var Xu_ly_HTTP = new XMLHttpRequest()
    var Dia_chi_Xu_ly = `${Dia_chi_Media}`
    Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false)
    var Chuoi_Goi = JSON.stringify(Hinh)
    Xu_ly_HTTP.send(Chuoi_Goi)
    var Chuoi_KQ = Xu_ly_HTTP.responseText
    return Chuoi_KQ
}
function Ghi_Dien_thoai_Moi(Dien_thoai) {
    var Du_lieu = {}
    var Xu_ly_HTTP = new XMLHttpRequest()
    var Tham_so = `Ma_so_Xu_ly=Ghi_Dien_thoai_Moi`
    var Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}?${Tham_so}`
    Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false)
    var Chuoi_Goi = JSON.stringify(Dien_thoai)
    Xu_ly_HTTP.send(Chuoi_Goi)
    var Chuoi_JSON = Xu_ly_HTTP.responseText
    if (Chuoi_JSON != "")
        Du_lieu = JSON.parse(Chuoi_JSON)
    return Du_lieu
}

function Ghi_Cap_nhap_Dien_thoai(Danh_sach) {
    var Kq = ""
    var Xu_ly_HTTP = new XMLHttpRequest()
    var Tham_so = `Ma_so_Xu_ly=Cap_nhat_Dien_thoai`
    var Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}?${Tham_so}`
    Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false)
    var Chuoi_Goi = JSON.stringify(Danh_sach)
    Xu_ly_HTTP.send(Chuoi_Goi)
    Kq = Xu_ly_HTTP.responseText
    return Kq
}
function Ghi_Xoa_Dien_thoai(Danh_sach) {
    var Kq = ""
    var Xu_ly_HTTP = new XMLHttpRequest()
    var Tham_so = `Ma_so_Xu_ly=Xoa_Dien_thoai`
    var Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}?${Tham_so}`
    Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false)
    var Chuoi_Goi = JSON.stringify(Danh_sach)
    Xu_ly_HTTP.send(Chuoi_Goi)
    Kq = Xu_ly_HTTP.responseText
    return Kq
}
function Ghi_Thanh_ly_Dien_thoai(Danh_sach) {
    var Kq = ""
    var Xu_ly_HTTP = new XMLHttpRequest()
    var Tham_so = `Ma_so_Xu_ly=Thanh_ly_Dien_thoai`
    var Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}?${Tham_so}`
    Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false)
    var Chuoi_Goi = JSON.stringify(Danh_sach)
    Xu_ly_HTTP.send(Chuoi_Goi)
    Kq = Xu_ly_HTTP.responseText
    return Kq
}
function Ghi_Phuc_hoi_Dien_thoai(Danh_sach) {
    var Kq = ""
    var Xu_ly_HTTP = new XMLHttpRequest()
    var Tham_so = `Ma_so_Xu_ly=Phuc_hoi_Dien_thoai`
    var Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}?${Tham_so}`
    Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false)
    var Chuoi_Goi = JSON.stringify(Danh_sach)
    Xu_ly_HTTP.send(Chuoi_Goi)
    Kq = Xu_ly_HTTP.responseText
    return Kq
}

//========================================

function Dang_nhap_He_thong(Thong_tin) {
    var Du_lieu = {}
    var Xu_ly_HTTP = new XMLHttpRequest()
    var Tham_so = `Ma_so_Xu_ly=Dang_nhap`
    var Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}?${Tham_so}`
    Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false)
    var Chuoi_Thong_tin = JSON.stringify(Thong_tin)
    Xu_ly_HTTP.send(Chuoi_Thong_tin)
    var Chuoi_JSON = Xu_ly_HTTP.responseText
    if (Chuoi_JSON != "")
        Du_lieu = JSON.parse(Chuoi_JSON)
    return Du_lieu
}

//==============================================
function Tao_The_hien_Them_Dien_thoai(Th_Cha) {
    var Chuoi_HTML = `
        <div class="form m-3 p-3">
        
        <div class="form-group">
            <label for="Th_Nhom_Mat_hang">Loại: </label>
            <select id="Th_Nhom_Mat_hang" onchange="Lay_Ma_so_cuoi()">
                <option value="CA_PHE">Nước uống</option>
                <option value="MON_AN">Món ăn</option>
            </select>
        </div>
        <div class="form-group">
            <label for="Th_Ma_so">Mã số </label>
            <input type="text" class="form-control" id="Th_Ma_so" readonly>
        </div>
        <div class="form-group">
            <label for="Th_Ten">Tên </label>
            <input type="text" class="form-control" id="Th_Ten" placeholder="Nhập Tên Món ăn hoặc Nước uống">
        </div>
        <div class="form-group">
            <label for="Th_Don_gia_Nhap">Đơn giá Nhập</label>
            <input type="text" class="form-control" id="Th_Don_gia_Nhap" placeholder="Nhập Đơn giá Nhập">
        </div>
        <div class="form-group">
            <label for="Th_Don_gia_Nhap">Đơn giá Bán</label>
            <input type="text" class="form-control" id="Th_Don_gia_Ban" placeholder="Nhập Đơn giá Bán">
        </div>
        <div class="form-group">
            <label for="Th_file">Chọn hình</label>
            <input id="Th_file" type="file" onchange="Xem_truoc_Media()" accept="image/png" />
            <img id="Th_Hinh_Xem_truoc" style="width:10rem" />
        </div>
    </div>
    `
    Th_Cha.innerHTML = Chuoi_HTML
}
function Tao_The_hien_Phuc_hoi(Th_Cha,Danh_sach_Phuc_hoi){
    var noi_dung_HTML=`
    <table class="table">
                <thead>
                    <tr>
                        <th>Tên điện thoại</th>
                        <th>Nhóm điện thoại</th>
                        <th>Đơn giá Bán</th>
                        <th>Chọn </th>
                    </tr>
                </thead>
                <tbody>`
    Danh_sach_Phuc_hoi.forEach(Dien_thoai=>{
        var Nhom=Dien_thoai.Nhom_Mat_hang.Ma_so
        noi_dung_HTML+=`
        <tr>
            <td scope="row">${Dien_thoai.Ten}</td>
            <td>${Nhom}</td>
            <td>${Tao_Chuoi_The_hien_So_nguyen_duong(Dien_thoai.Don_gia_Ban)}đ</td>
            <td><input type="checkbox" Ma_so="${Dien_thoai.Ma_so}" class="PHUC_HOI" /></td>
        </tr>
        `
    
    })            
    
    noi_dung_HTML+=`
                </tbody>
            </table>
    `
    Th_Cha.innerHTML=noi_dung_HTML
}
function Tao_The_hien_Xoa(Th_Cha,Danh_sach_Cap_nhat){
    var noi_dung_HTML=`
    <table class="table">
                <thead>
                    <tr>
                        <th>Tên điện thoại</th>
                        <th>Nhóm điện thoại</th>
                        <th>Đơn giá Nhập</th>
                        <th>Đơn giá Bán</th>
                    </tr>
                </thead>
                <tbody>`
    Danh_sach_Cap_nhat.forEach(Dien_thoai=>{
        var Nhom=Dien_thoai.Nhom_Mat_hang.Ma_so
        noi_dung_HTML+=`
        <tr Ma_so="${Dien_thoai.Ma_so}" class="CAP_NHAP">
            <td scope="row">${Dien_thoai.Ten}</td>
            <td>${Nhom}</td>
            <td>${Tao_Chuoi_The_hien_So_nguyen_duong(Dien_thoai.Don_gia_Nhap)}đ</td>
            <td>${Tao_Chuoi_The_hien_So_nguyen_duong(Dien_thoai.Don_gia_Ban)}đ</td>
        </tr>
        `
    
    })            
    
    noi_dung_HTML+=`
                </tbody>
            </table>
    `
    Th_Cha.innerHTML=noi_dung_HTML
}
function Tao_The_hien_Cap_nhat(Th_Cha,Danh_sach_Cap_nhat){
    var noi_dung_HTML=`
    <table class="table">
                <thead>
                    <tr>
                        <th>Tên điện thoại</th>
                        <th>Nhóm điện thoại</th>
                        <th>Đơn giá Nhập</th>
                        <th>Đơn giá Bán</th>
                    </tr>
                </thead>
                <tbody>`
    Danh_sach_Cap_nhat.forEach(Dien_thoai=>{
        var Nhom=Dien_thoai.Nhom_Mat_hang.Ma_so
        noi_dung_HTML+=`
        <tr Ma_so="${Dien_thoai.Ma_so}" class="CAP_NHAP">
            <td scope="row"><input type="text" value="${Dien_thoai.Ten}"/></td>
            <td>
            <select id="Th_Nhom_Dien_thoai">
                <option value="CA_PHE" ${Nhom=='CA_PHE'?'selected':''} >CA_PHE</option>
                <option value="MON_AN" ${Nhom=='MON_AN'?'selected':''}  >MON_AN</option>
            </select>
            </td>
            <td><input type="text" value="${Dien_thoai.Don_gia_Nhap}" class="text-right" /></td>
            <td><input type="text" value="${Dien_thoai.Don_gia_Ban}" class="text-right" /></td>
        </tr>
        `
    })            
    
    noi_dung_HTML+=`
                </tbody>
            </table>
    `
    Th_Cha.innerHTML=noi_dung_HTML
}

function Tao_The_hien_Dien_thoai(Dien_thoai, Th_Cha) {
    var the_hien = document.createElement("div")
    the_hien.setAttribute("data",JSON.stringify(Dien_thoai))
    Th_Cha.appendChild(the_hien)
    var Chuoi_HTML = `<div class="card m-2 p-2" style="width:15rem" Ma_so="${Dien_thoai.Ma_so}">
  <img class="card-img-top" src="https://dv--media.herokuapp.com/${Dien_thoai.Ma_so}.png" alt="">
  <div class="card-body">
      <h5 class="card-title text-primary">${Dien_thoai.Ten}</h5>
      <p class="card-text text-danger">Đơn giá Bán: ${Tao_Chuoi_The_hien_So_nguyen_duong(Dien_thoai.Don_gia_Ban)} đ</p>
      Loại nhóm: ${Dien_thoai.Nhom_Mat_hang.Ten}
  </div>
</div>`
    the_hien.innerHTML = Chuoi_HTML;
    return the_hien
}

function Tao_The_hien_Dang_nhap(Th_Cha) {
    var noi_dung_HTML = `<div  style="width:30rem; margin:auto; padding:10px" id="Th_Khung_Dang_nhap" class="table-bordered">
    <div class="form-group">
      <label for="Th_Ten_Dang_nhap">Tên đăng nhập</label>
      <input type="text" class="form-control" id="Th_Ten_Dang_nhap" placeholder="Nhập Tên đăng nhập" value="QL_1">
    </div>
    <div class="form-group">
      <label for="Th_Mat_khau">Mật khẩu</label>
      <input type="password" class="form-control" id="Th_Mat_khau" placeholder="Nhập mật khẩu" value="QL_1">
    </div>
    
    <button type="button" class="btn btn-primary" id="Th_Dang_nhap">Đăng nhập</button>
  </div>`
    Th_Cha.innerHTML = noi_dung_HTML
    
}

//==============================================================================
// Xử lý biến Số nguyên
function Nhap_So_nguyen_duong(Th_So_nguyen) {
    var Kq = {}
    Kq.So_nguyen = parseInt(Th_So_nguyen.value.trim())
    Kq.Hop_le = !isNaN(Kq.So_nguyen) && Kq.So_nguyen > 0
    return Kq
}

function Tao_Chuoi_The_hien_So_nguyen_duong(So_nguyen) {
    var Chuoi_The_hien = ""
    var Chuoi_So_nguyen = So_nguyen.toString()
    var So_Ky_so = Chuoi_So_nguyen.length
    if (So_Ky_so % 3 == 0) {
        for (var Chi_so = 0; Chi_so < Chuoi_So_nguyen.length; Chi_so++) {
            Chuoi_The_hien += Chuoi_So_nguyen[Chi_so]
            if (Chi_so % 3 == 2 && Chi_so < Chuoi_So_nguyen.length - 1)
                Chuoi_The_hien += "."
        }
    } else if (So_Ky_so % 3 == 1) {
        Chuoi_The_hien = Chuoi_So_nguyen[0]
        if (So_Ky_so > 1)
            Chuoi_The_hien += "."
        Chuoi_So_nguyen = Chuoi_So_nguyen.slice(1)
        for (var Chi_so = 0; Chi_so < Chuoi_So_nguyen.length; Chi_so++) {
            Chuoi_The_hien += Chuoi_So_nguyen[Chi_so]
            if (Chi_so % 3 == 2 && Chi_so < Chuoi_So_nguyen.length - 1)
                Chuoi_The_hien += "."

        }
    } else if (So_Ky_so % 3 == 2) {
        Chuoi_The_hien = Chuoi_So_nguyen[0] + Chuoi_So_nguyen[1]
        if (So_Ky_so > 2)
            Chuoi_The_hien += "."
        Chuoi_So_nguyen = Chuoi_So_nguyen.slice(2)
        for (var Chi_so = 0; Chi_so < Chuoi_So_nguyen.length; Chi_so++) {
            Chuoi_The_hien += Chuoi_So_nguyen[Chi_so]
            if (Chi_so % 3 == 2 && Chi_so < Chuoi_So_nguyen.length - 1)
                Chuoi_The_hien += "."
        }
    }
    return Chuoi_The_hien
}
// Xử lý Biến Số thực
function Nhap_So_thuc_duong(Th_So_thuc) {
    var Kq = {}
    Kq.So_thuc = parseInt(Th_So_thuc.value.trim())
    Kq.Hop_le = !isNaN(Kq.So_thuc) && Kq.So_thuc > 0
    return Kq
}

function Tao_Chuoi_The_hien_So_thuc_duong(So_thuc, So_so_le) {
    So_thuc = parseFloat(So_thuc)
    var Chuoi_The_hien = ""
    if (!So_so_le)
        So_so_le = 2
    var Thanh_phan_con = So_thuc
        .toFixed(So_so_le)
        .split(".")
    Chuoi_The_hien = Tao_Chuoi_The_hien_So_nguyen_duong(Thanh_phan_con[0])
    if (Thanh_phan_con.length == 2 && parseInt(Thanh_phan_con[1]) != 0 && So_so_le > 0)
        Chuoi_The_hien += "," + Tao_Chuoi_The_hien_So_nguyen_duong(Thanh_phan_con[1])
    return Chuoi_The_hien
}

function Tao_Chuoi_The_hien_Tien(So_tien, n) {
    if (!n)
        n = 0

    var Chuoi_The_hien = Tao_Chuoi_The_hien_So_thuc_duong(So_tien, n)

    return Chuoi_The_hien
}

// Xử lý với Biến Ngày
function La_Ngay_Hien_hanh(Ngay) {
    var Ngay_Hien_hanh = new Date()
    Ngay = new Date(Ngay)
    var Kq = Ngay_Hien_hanh.getDate() == Ngay.getDate() &&
        Ngay_Hien_hanh.getMonth() == Ngay.getMonth() &&
        Ngay_Hien_hanh.getFullYear() == Ngay.getFullYear()

    return Kq
}

function Tao_Chuoi_The_hien_Ngay(Ngay) {
    var Chuoi_The_hien = ""
    if (!Ngay)
        Ngay = new Date()
    Chuoi_The_hien = Ngay.getDate() + "/" + (Ngay.getMonth() + 1) + "/" + Ngay.getFullYear()
    return Chuoi_The_hien
}

function Tao_Chuoi_The_hien_Gio(Ngay) {
    var Chuoi_The_hien = ""
    if (!Ngay)
        Ngay = new Date()
    Chuoi_The_hien = Ngay.getHours() + ":" + Ngay.getMinutes() + ":" + Ngay.getMinutes()
    return Chuoi_The_hien
}

function Tao_Chuoi_The_hien_Ngay_Gio(Ngay) {
    var Chuoi_The_hien = Tao_Chuoi_The_hien_Ngay(Ngay) + " " + Tao_Chuoi_The_hien_Gio(Ngay)
    return Chuoi_The_hien
}

function Kiem_tra_Ngay(Chuoi_ngay) {
    var Thanh_phan_con = Chuoi_ngay.split("/")
    var Hop_le = Thanh_phan_con.length == 3 && !isNaN(Thanh_phan_con[0]) && !isNaN(Thanh_phan_con[1]) && !isNaN(Thanh_phan_con[2])
    if (Hop_le) {
        var Ng = parseInt(Thanh_phan_con[0])
        var Th = parseInt(Thanh_phan_con[1])
        var Nm = parseInt(Thanh_phan_con[2])
        var So_ngay_cua_Th = new Date(Nm, Th, 0).getDate()
        // var So_ngay_cua_Th = new Date(Nm, Th+1 , 0).getDate()
        Hop_le = Ng >= 1 && Ng <= So_ngay_cua_Th && Th >= 1 && Th <= 12 && Nm > 0
    }
    return Hop_le
}

function Nhap_Ngay(Th_Ngay) {
    var Kq = {}
    var Chuoi_Ngay = Th_Ngay
        .value
        .trim()
    Kq.Hop_le = Kiem_tra_Ngay(Chuoi_Ngay)
    if (Kq.Hop_le) {
        var Thanh_phan_con = Chuoi_ngay.split("/")
        Kq.Ngay = new Date(Thanh_phan_con[1] + "-" + Thanh_phan_con[0] + "-" + Thanh_phan_con[2])
    }

    return Kq
}









