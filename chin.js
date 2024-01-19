var date = document.querySelector(".date")

date.innerText = new Date().toLocaleString('vi')

//remove title
var bt_1 = document.querySelector(".bt-1")
var black = document.querySelector(".black")

bt_1.addEventListener("click",function(){
    black.classList.add("hide1")
    init()
})

var form = document.querySelector("form")
var input = document.querySelector(".input")
var add_icon = document.querySelector(".add-icon")
var td_ul = document.querySelector(".td-ul")
var td_card = document.querySelector(".td-card")

form.addEventListener("submit",function(event){
    event.preventDefault()
    let val = input.value.trim()

    if(val){
        addTodo({
            text:val,
        })

        saveTodo()
    }

    input.value=''
})

//ham them todo moi
function addTodo(todo){
    
        // <i class='bx bx-caret-right right-icon' ></i>
        // <span>aaaa</span>
        // <button class="bt-dl"><i class='bx bx-trash-alt delete-icon'></i></button>

        var li = document.createElement("li")
        li.innerHTML= `
            <i class='bx bx-caret-right right-icon' ></i>
            <span>${todo.text}</span>
            <button class="bt-dl"><i class='bx bx-trash-alt delete-icon'></i></button>
        `

        if(todo.status ==='delete'){
            li.setAttribute('class','delete')
        }

        li.addEventListener('click',function(){
            this.classList.toggle("delete")
            saveTodo()
        })

        li.querySelector("button").addEventListener('click',function(){
            this.parentElement.remove()
            saveTodo()
        })

        td_ul.appendChild(li)
                
}


//ham save todo list
//luu du lieu
function saveTodo(){
    let todoList = document.querySelectorAll('li')
    let save = []
    todoList.forEach(function(item){
        let text = item.querySelector("span").innerText
        let status = item.getAttribute('class')
        save.push({
            text,
            status
        })
    })

    localStorage.setItem('todolist',JSON.stringify(save))
}

//ham load lai du lieu
function init(){
    let data = JSON.parse(localStorage.getItem('todolist'))
    data.forEach(function(item){
        addTodo(item)
    })
}


//xu ly more
var more = document.querySelector(".more")
var close = document.querySelector(".close-icon")
var icon_more = document.querySelector(".icon-more")
var more_guide = document.querySelector(".more-guide")
var more_feedback = document.querySelector(".more-feedback")
var more_info = document.querySelector(".more-info")

icon_more.addEventListener("click",function(){
    more.classList.remove("hide1")
})

close.addEventListener("click",function(){
    more.classList.add("hide1")
})

more_guide.addEventListener("click",function(){
    guide_all.classList.remove('hide2')
})

more_feedback.addEventListener("click",function(){
    fb.classList.remove('hide3')
})

more_info.addEventListener("click",function(){
    info_all.classList.remove('hide4')
})

//xu ly dark mode
var moon = document.querySelector(".moon-icon")
var sun = document.querySelector(".sun-icon")
var body = document.querySelector('.body')
var info_p1 = document.querySelector('.info-p1')
var info_p2 = document.querySelector('.info-p2')
var info_p = document.querySelector('.info-p')


moon.addEventListener('click',function(){
    moon.classList.add('hide1')
    sun.classList.remove('hide1')
    body.classList.add("dark-body")
    td_card.classList.add("dark-td")
    guide_card.classList.add('guide-dark')
    fb_card.classList.add('fb-dark')
    info_card.classList.add("info-dark")
    info_p.classList.add("info-name-dark")
    info_p1.classList.add("info-p-dark")
    info_p2.classList.add("info-p-dark")
})

sun.addEventListener('click',function(){
    moon.classList.remove('hide1')
    sun.classList.add('hide1')
    body.classList.remove("dark-body")
    td_card.classList.remove("dark-td")
    guide_card.classList.remove('guide-dark')
    fb_card.classList.remove('fb-dark')
    info_card.classList.remove("info-dark")
    info_p.classList.remove("info-name-dark")
    info_p1.classList.remove("info-p-dark")
    info_p2.classList.remove("info-p-dark")
})

more.addEventListener('click',function(){
    more.classList.add("hide1")
})


//xu ly menu
var create = document.querySelector('.mn-1')
var guide = document.querySelector('.mn-2')
var feedback = document.querySelector('.mn-3')
var info = document.querySelector('.mn-4')
var main = document.querySelector('.main-form')
var menu_app = document.querySelector('.menu-app')
var back_icon = document.querySelector('.back-icon')
var lg_3 = document.querySelector('.lg-3')
var guide_bt = document.querySelector('.guide-bt')
var guide_all = document.querySelector('.guide')
var guide_card = document.querySelector('.guide-card')
var fb = document.querySelector('.fb')
var fb_close = document.querySelector('.fb-close')
var fb_card = document.querySelector('.fb-card')
var info_all = document.querySelector('.info')
var info_close = document.querySelector('.info-close')
var info_card = document.querySelector('.info-card')



create.addEventListener('click',function(){
    menu_app.classList.add('hide1')
    main.classList.remove('hide')
    lg_3.classList.add('lg-3-move')
    back_icon.classList.remove('hide1')
})

back_icon.addEventListener('click',function(){
    main.classList.add('hide')
    menu_app.classList.remove('hide1')
    lg_3.classList.remove('lg-3-move')
    back_icon.classList.add('hide1')
})

guide.addEventListener('click',function(){
    guide_all.classList.remove('hide2')
})

guide_bt.addEventListener('click',function(){
    guide_all.classList.add('hide2')
})

guide_all.addEventListener('click',function(){
    guide_all.classList.add('hide2')
})

feedback.addEventListener('click',function(){
    fb.classList.remove('hide3')
})

fb_close.addEventListener('click',function(){
    fb.classList.add('hide3')
})

fb.addEventListener('click',function(){
    fb.classList.add('hide3')
})

info.addEventListener('click',function(){
    info_all.classList.remove('hide4')
})

info_close.addEventListener('click',function(){
    info_all.classList.add('hide4')
})

info_all.addEventListener('click',function(){
    info_all.classList.add('hide4')
})


