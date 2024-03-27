var food = [
    {
        id: 1,
        name: "Tôm",
        code: "TC01345",
        price: "250.000",
        image: "https://images.squarespace-cdn.com/content/v1/53883795e4b016c956b8d243/1562815515627-WUI5RN2UL8UZPT1WLROY/chup-anh-mon-an-nha-hang-chuyen-nghiep-4.jpg",
    },
    {
        id: 2,
        name: "Cua",
        code: "TC013442",
        price: "550.000",
        image: "https://kimlocphat.vn/upload/mon-an-ngon-02-23-09-2017-11-57-20.jpg",
    },
    {
        id: 3,
        name: "Thịt nướng",
        code: "TC0134342",
        price: "130.000",
        image: "https://tourdanangcity.vn/wp-content/uploads/2020/09/Sky-View-Restaurant-nha-hang-da-nang-1.jpg",
    },
    {
        id: 4,
        name: "Beef steak",
        code: "TC013324",
        price: "250.000",
        image: "https://tourdanangcity.vn/wp-content/uploads/2020/09/the-grill-nha-hang-da-nang-1.jpg",
    },
];
    function listProducts() {
        var show = ''
        for (let i = 0; i < food.length; i++) {
            var demo = '<div class="col-3">';
            demo += '<div class="card" style="width: 18rem;">';
            demo += '<img src="' + food[i].image + '" class="card-img-top" style="height: 400px;">';
            demo += '<div class="card-body">';
            demo += '<h5 class="card-title">' + food[i].name + '</h5>';
            demo += '<p class="card-text">' + food[i].price + '</p>';
            demo += '<a href="#" class="btn btn-primary" onclick="order()">Đặt mua</a>';
            demo += '<a href="#" class="btn btn-secondary" onclick="viewDetail(' + food[i].id + ')">Xem chi tiết</a>';
            demo += '</div>';
            demo += '</div>';
            demo += '</div>';
            document.getElementById("food").innerHTML += demo;
            document.getElementById("view_Detail").innerHTML = show;
        }
    }
    function viewDetail(id) {
        var Detail = document.getElementById("Detail")
        var homepage = document.getElementById("homepage")
        Detail.style.height = "100vh"
        homepage.style.height = "0"
    
        food.forEach(function(id_data){
            if(id === id_data.id){
                var show_detail = `<div class="detail_img w-50 ms-3">
                <img class="w-100" src="${id_data.image}" alt="">
            </div>
            <div class="detail_text w-50">
                <h1 class="fw-bold">${id_data.name}</h1>
                <p class="fs-5 mt-3"><b> Code: </b>${id_data.code}</p>
                <p class="fs-5"><b> Giá: ${id_data.price}</b> </p>
                <button type="button" onclick="back()" class="btn btn-secondary">Trở lại</button>
            </div>`
            
               document.getElementById("Detail").innerHTML = show_detail
            }
            
        })
    }
    function back(){
        var Detail = document.getElementById("Detail")
        var homepage = document.getElementById("homepage")
        Detail.style.height = "0"
        homepage.style.height = "auto"
        Detail.innerHTML = ''
    }

    function order() {
        alert("Đặt hàng thành công!");
    }
    function searchProducts() {
        var searchInput = document.getElementById('searchInput').value.toLowerCase();
        var filteredProducts = food.filter(function(product) {
            return product.name.toLowerCase().includes(searchInput) || product.code.toLowerCase().includes(searchInput);
        });
        displayProducts(filteredProducts);
    }   
    function displayProducts(products) {
        var productList = document.getElementById("food");
        productList.innerHTML = "";
    
        products.forEach(function(product) {
            var demo = `
                <div class="col-3">
                    <div class="card" style="width: 18rem;">
                        <img src="${product.image}" class="card-img-top" style="height: 400px;">
                        <div class="card-body">
                            <h5 class="card-title">${product.name}</h5>
                            <p class="card-text">${product.price}</p>
                            <a href="#" class="btn btn-primary" onclick="order()">Đặt mua</a>
                            <a href="#" class="btn btn-secondary" onclick="viewDetail(${product.id})">Xem chi tiết</a>
                        </div>
                    </div>
                </div>`;
            productList.innerHTML += demo;
        });
    }
    
    //admin
 
    
    
    function add_mon(id_mon,ten_mon,anh_mon,gia_mon,diadiem_mon,mota_mon){
        console.log(id_mon,ten_mon,anh_mon,gia_mon,diadiem_mon,mota_mon)
    
    
        if(id_mon == ''&&ten_mon == ''&& anh_mon == ''&&gia_mon==''&&diadiem_mon == '' && mota_mon == ''){
            var messenger = document.getElementById("messenger")
            var text_messenger = document.getElementById("text_messenger")
        }else{
            food.forEach(function(items){
                if(id_mon === items.id){
                    var messenger = document.getElementById("messenger")
                    var text_messenger = document.getElementById("text_messenger")
                    messenger.style.height = '100vh'
                    text_messenger.innerHTML = 'id món đã tồn tại'
                    return  
                }else if(ten_mon === items.Name){
                    var messenger = document.getElementById("messenger")
                    var text_messenger = document.getElementById("text_messenger")
                    messenger.style.height = '100vh'
                    text_messenger.innerHTML = 'Tên món đã tồn tại'
                }
            })
            var Mon = {
                id: id_mon,
                Name: ten_mon,
                img: anh_mon,
                Price: gia_mon,
                Location: diadiem_mon,
                detail: mota_mon
            }
            food.push(Mon)
            var messenger = document.getElementById("messenger")
            var text_messenger = document.getElementById("text_messenger")
            messenger.style.height = '100vh'
            text_messenger.innerHTML = 'Thêm món thành công'
            Load_view()
        }
        
    }
    
    // admin
    document.getElementById("menu_view").addEventListener("click",function(){
          document.getElementById("View").style.maxHeight = "100vh"
          document.getElementById("product_add").style.maxHeight = "0"
          document.getElementById("product_edit").style.maxHeight = "0"
          document.getElementById("product_delete").style.maxHeight = "0"
    })
    document.getElementById("menu_add").addEventListener("click",function(){
          document.getElementById("product_add").style.maxHeight = "100vh"
          document.getElementById("View").style.maxHeight = "0"
          document.getElementById("product_edit").style.maxHeight = "0"
          document.getElementById("product_delete").style.maxHeight = "0"
    })
    document.getElementById("menu_edit").addEventListener("click",function(){
          document.getElementById("product_edit").style.maxHeight = "200vh"
          document.getElementById("product_add").style.maxHeight = "0"
          document.getElementById("View").style.maxHeight = "0"
          document.getElementById("product_delete").style.maxHeight = "0"
    })
    document.getElementById("menu_delete").addEventListener("click",function(){
          document.getElementById("product_delete").style.maxHeight = "100vh"
          document.getElementById("product_add").style.maxHeight = "0"
          document.getElementById("product_edit").style.maxHeight = "0"
          document.getElementById("View").style.maxHeight = "0"
    })
    
    function Clear(){
        document.getElementById("id_mon").value = ''
        document.getElementById("ten_mon").value = ''
        document.getElementById("anh_mon").value = ''
        document.getElementById("gia_mon").value = ''
        document.getElementById("diadiem_mon").value = ''
        document.getElementById("mota_mon").value = ''
    }
    function select(){
        var value =  document.getElementById("load_product_select").value
        console.log(value)
        food.forEach(function(items){
            if(value == items.id){
                document.getElementById("Id_mon").value = items.id
                document.getElementById("Ten_mon").value = items.Name
                document.getElementById("Anh_mon").value = items.img
                document.getElementById("Gia_mon").value = items.Price
                document.getElementById("Diadiem_mon").value = items.Location
                document.getElementById("Mota_mon").value = items.detail
            }
        })
    }
    function input_select(){
        document.getElementById("Id_mon").value = ''
        document.getElementById("Ten_mon").value = ''
        document.getElementById("Anh_mon").value = ''
        document.getElementById("Gia_mon").value = ''
        document.getElementById("Diadiem_mon").value = ''
        document.getElementById("Mota_mon").value = ''
    }
    function edit(Id_mon,Ten_mon,Anh_mon,Gia_mon,Diadiem_mon,Mota_mon){ 
         food.forEach(function(items){
            if(Id_mon == items.id){
                items.id = Id_mon;
                items.Name = Ten_mon
                items.Price = Gia_mon
                items.img = Anh_mon
                items.detail = Mota_mon
                items.Location = Diadiem_mon
            }
         })
         var messenger = document.getElementById("messenger")
            var text_messenger = document.getElementById("text_messenger")
            messenger.style.height = '100vh'
            text_messenger.innerHTML = 'Sửa món thành công'
         input_select()
         listProducts()
    }
    function Delete(){
        var id = document.getElementById("load_product_select_2").value
        console.log(id)
        for(var i = 0; i < monan.length; i++){
            if(id == monan[i].id){
                food.splice(i, 1)
                break;
            }
        }
        var messenger = document.getElementById("messenger")
        var text_messenger = document.getElementById("text_messenger")
        messenger.style.height = '100vh'
        text_messenger.innerHTML = 'xóa món thành công'
        select()
        listProducts()
    }
  
    