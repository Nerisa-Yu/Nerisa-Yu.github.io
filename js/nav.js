// 获取汉堡按钮
const burger = document.querySelector(".burger");
// 获取导航菜单
const navMenu = document.querySelector(".nav-menu");
//获取菜单项
const navMenuItems = document.querySelectorAll(".nav-menu li");
const nav = document.querySelector(".nav");
const balls = document.querySelectorAll('.ball');
const burger1 = document.querySelector("#burger");

//注册监听
burger.addEventListener("click", () => {
    // 汉堡按钮
    burger.classList.toggle("active");
    // 导航菜单开关
    navMenu.classList.toggle("open");

    // 菜单项动画
    navMenuItems.forEach((item, index) => {
        // 如果已添加animation,先取消
        if (item.style.animation) {
            item.style.animation = "";
        } else {
            item.style.animation = `0.3s ease-in slideIn forwards ${index * 0.1 +
            0.3}s`;
        }
    });
});

burger1.addEventListener("click", () => {
    burger1.classList.toggle("active")
});

window.addEventListener('scroll', function () {
    const f1 = window.scrollY > 200;
    nav.classList.toggle("hidden", f1)
    balls.forEach((Item)=>{
        Item.classList.toggle("visible",f1)
    });
})

function goToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}